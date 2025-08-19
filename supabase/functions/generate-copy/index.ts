import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface GenerateRequest {
  type: 'cold_email' | 'cover_letter' | 'portfolio';
  prompt: string;
  context?: any;
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

    // Get user from JWT
    const authHeader = req.headers.get('Authorization')!;
    const jwt = authHeader.replace('Bearer ', '');
    const { data: { user } } = await supabase.auth.getUser(jwt);

    if (!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { type, prompt, context }: GenerateRequest = await req.json();
    
    if (!type || !prompt) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Prepare OpenRouter request
    const openRouterApiKey = Deno.env.get('OPENROUTER_API_KEY');
    if (!openRouterApiKey) {
      throw new Error('OpenRouter API key not configured');
    }

    let systemPrompt = '';
    if (type === 'cold_email') {
      systemPrompt = `You are an expert cold email writer. Create personalized, engaging cold emails that:
      - Are concise and professional
      - Have compelling subject lines
      - Include clear call-to-actions
      - Avoid spam triggers
      - Sound natural and human
      - Are tailored to the recipient's industry/role when possible
      
      Format the response as:
      Subject: [subject line]
      
      [email body]`;
    } else if (type === 'cover_letter') {
      systemPrompt = `You are an expert cover letter writer. Create compelling cover letters that:
      - Highlight relevant skills and experience
      - Show enthusiasm for the specific role/company
      - Demonstrate value proposition
      - Are professional yet personable
      - Include specific examples when possible
      - Follow proper business letter format
      
      Format as a complete cover letter with proper structure.`;
    } else if (type === 'portfolio') {
      systemPrompt = `You are an expert portfolio content writer and UX copywriter. Create compelling portfolio website content that:
      - Showcases professional strengths and unique value proposition
      - Includes engaging hero section copy with clear positioning
      - Writes compelling "About Me" sections that build trust and connection
      - Creates project descriptions that highlight impact and technical skills
      - Develops professional yet personable tone throughout
      - Incorporates relevant keywords for the person's industry
      - Suggests content structure and sections for a complete portfolio
      - Makes the person stand out in their field
      - Includes call-to-action suggestions for contact and hiring
      
      Based on the provided information, create comprehensive portfolio content including:
      1. Hero section (headline, subheadline, brief intro)
      2. About section (professional story, values, what makes them unique)
      3. Skills/expertise summary
      4. Project descriptions and impact statements
      5. Professional summary/elevator pitch
      6. Call-to-action suggestions
      
      Format as structured content with clear section headings.`;
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openRouterApiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://bdacvgunqboxgrjuhcyy.supabase.co',
        'X-Title': 'AI Resume Builder'
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.1-8b-instruct:free',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt }
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenRouter API error:', errorText);
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json();
    const generatedContent = data.choices[0].message.content;

    // Save to database
    const { error: dbError } = await supabase
      .from('generations')
      .insert({
        user_id: user.id,
        type,
        input_data: { prompt, context },
        generated_content: generatedContent,
      });

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to save generation');
    }

    return new Response(
      JSON.stringify({ 
        content: generatedContent,
        type,
        success: true 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error: any) {
    console.error('Error in generate-copy function:', error);
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