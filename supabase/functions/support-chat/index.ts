import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ChatRequest {
  message: string;
  threadId?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get user from JWT (optional for support)
    let user = null;
    const authHeader = req.headers.get('Authorization');
    if (authHeader) {
      const jwt = authHeader.replace('Bearer ', '');
      const { data: { user: authUser } } = await supabase.auth.getUser(jwt);
      user = authUser;
    }

    const { message, threadId }: ChatRequest = await req.json();
    
    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let currentThreadId = threadId;

    // Create new thread if none provided
    if (!currentThreadId) {
      const { data: newThread, error: threadError } = await supabase
        .from('support_threads')
        .insert({
          user_id: user?.id || null,
          subject: message.substring(0, 50) + (message.length > 50 ? '...' : ''),
        })
        .select()
        .single();

      if (threadError) {
        console.error('Thread creation error:', threadError);
        throw new Error('Failed to create support thread');
      }
      currentThreadId = newThread.id;
    }

    // Save user message
    const { error: messageError } = await supabase
      .from('support_messages')
      .insert({
        thread_id: currentThreadId,
        user_id: user?.id || null,
        message,
        is_ai_response: false,
      });

    if (messageError) {
      console.error('Message save error:', messageError);
      throw new Error('Failed to save message');
    }

    // Get conversation history for context
    const { data: messages, error: historyError } = await supabase
      .from('support_messages')
      .select('message, is_ai_response')
      .eq('thread_id', currentThreadId)
      .order('created_at', { ascending: true })
      .limit(20);

    if (historyError) {
      console.error('History fetch error:', historyError);
    }

    // Generate AI response
    const openRouterApiKey = Deno.env.get('OPENROUTER_API_KEY');
    if (!openRouterApiKey) {
      throw new Error('OpenRouter API key not configured');
    }

    // Build conversation context
    const conversationHistory = messages?.map(msg => ({
      role: msg.is_ai_response ? 'assistant' : 'user',
      content: msg.message
    })) || [];

    const systemPrompt = `You are a helpful customer support assistant for a Resume Builder application. 

Your role:
- Provide helpful, friendly, and professional support
- Answer questions about resume building, account management, and features
- Troubleshoot technical issues when possible
- Escalate complex issues to human agents when appropriate
- Keep responses concise but comprehensive
- Always maintain a positive, solution-focused tone

Common topics you can help with:
- Account setup and login issues
- Resume template selection and customization
- AI content generation features
- Export and download options
- Subscription and billing questions
- General app navigation and usage

If you cannot resolve an issue or if the user requests human support, acknowledge this and let them know their request will be escalated to our support team.`;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openRouterApiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://bdacvgunqboxgrjuhcyy.supabase.co',
        'X-Title': 'AI Resume Builder Support'
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.1-8b-instruct:free',
        messages: [
          { role: 'system', content: systemPrompt },
          ...conversationHistory
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenRouter API error:', errorText);
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    // Save AI response
    const { error: aiMessageError } = await supabase
      .from('support_messages')
      .insert({
        thread_id: currentThreadId,
        user_id: null,
        message: aiResponse,
        is_ai_response: true,
      });

    if (aiMessageError) {
      console.error('AI message save error:', aiMessageError);
      throw new Error('Failed to save AI response');
    }

    // Update thread timestamp
    const { error: updateError } = await supabase
      .from('support_threads')
      .update({ updated_at: new Date().toISOString() })
      .eq('id', currentThreadId);

    if (updateError) {
      console.error('Thread update error:', updateError);
    }

    return new Response(
      JSON.stringify({ 
        response: aiResponse,
        threadId: currentThreadId,
        success: true 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error: any) {
    console.error('Error in support-chat function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Internal server error',
        success: false 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);