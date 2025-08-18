import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { HelpCircle, Send, X, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  message: string;
  is_ai_response: boolean;
  created_at: string;
}

const SupportWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);
  const { user } = useAuth();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Load chat history if user is authenticated and widget is open
  useEffect(() => {
    if (isOpen && user && !threadId) {
      loadChatHistory();
    }
  }, [isOpen, user]);

  const loadChatHistory = async () => {
    if (!user) return;

    try {
      // Get the most recent thread for this user
      const { data: threads, error: threadsError } = await supabase
        .from('support_threads')
        .select('id')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false })
        .limit(1);

      if (threadsError) {
        console.error('Error loading threads:', threadsError);
        return;
      }

      if (threads && threads.length > 0) {
        const currentThreadId = threads[0].id;
        setThreadId(currentThreadId);

        // Load messages for this thread
        const { data: threadMessages, error: messagesError } = await supabase
          .from('support_messages')
          .select('*')
          .eq('thread_id', currentThreadId)
          .order('created_at', { ascending: true });

        if (messagesError) {
          console.error('Error loading messages:', messagesError);
          return;
        }

        if (threadMessages) {
          setMessages(threadMessages);
        }
      }
    } catch (error) {
      console.error('Error in loadChatHistory:', error);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setIsLoading(true);

    // Add user message to UI immediately
    const tempUserMessage: Message = {
      id: `temp-${Date.now()}`,
      message: userMessage,
      is_ai_response: false,
      created_at: new Date().toISOString(),
    };
    setMessages(prev => [...prev, tempUserMessage]);

    try {
      const { data, error } = await supabase.functions.invoke('support-chat', {
        body: {
          message: userMessage,
          threadId: threadId
        }
      });

      if (error) {
        throw error;
      }

      if (data?.threadId && !threadId) {
        setThreadId(data.threadId);
      }

      // Add AI response to messages
      if (data?.response) {
        const aiMessage: Message = {
          id: `ai-${Date.now()}`,
          message: data.response,
          is_ai_response: true,
          created_at: new Date().toISOString(),
        };
        
        // Remove temp message and add both user and AI messages
        setMessages(prev => {
          const withoutTemp = prev.filter(msg => msg.id !== tempUserMessage.id);
          return [...withoutTemp, 
            { ...tempUserMessage, id: `user-${Date.now()}` },
            aiMessage
          ];
        });
      }
    } catch (error: any) {
      console.error('Error sending message:', error);
      
      let errorMessage = 'Failed to send message. Please try again.';
      
      // Handle specific OpenAI quota errors
      if (error?.message?.includes('insufficient_quota') || 
          error?.message?.includes('quota') || 
          error?.message?.includes('429')) {
        errorMessage = 'Our AI support is temporarily unavailable due to high demand. Please try again later or contact us directly.';
      } else if (error?.message?.includes('OpenAI API error')) {
        errorMessage = 'AI support is temporarily unavailable. Please try again in a few minutes.';
      }
      
      toast.error(errorMessage);
      
      // Add error message to chat for better UX
      const errorAiMessage: Message = {
        id: `error-${Date.now()}`,
        message: `I apologize, but I'm experiencing some technical difficulties right now. ${errorMessage.includes('quota') ? 'Our AI service is temporarily down due to high usage.' : 'Please try your message again.'} 

For immediate assistance, you can contact us directly at support@resumebuilder.com`,
        is_ai_response: true,
        created_at: new Date().toISOString(),
      };
      
      // Remove temp message and add both user and error messages
      setMessages(prev => {
        const withoutTemp = prev.filter(msg => msg.id !== tempUserMessage.id);
        return [...withoutTemp, 
          { ...tempUserMessage, id: `user-${Date.now()}` },
          errorAiMessage
        ];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 shadow-2xl bg-primary hover:bg-primary/90"
        >
          <HelpCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={`shadow-2xl border-0 bg-card/95 backdrop-blur-sm transition-all duration-200 ${
        isMinimized ? 'w-80 h-12' : 'w-80 h-96'
      }`}>
        <CardHeader className="py-3 px-4 border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">24/7 Support</CardTitle>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8 p-0"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-80">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.length === 0 && (
                  <div className="text-center text-muted-foreground text-sm py-8">
                    <HelpCircle className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>Hi! How can I help you today?</p>
                    <p className="text-xs mt-1">Ask me anything about the Resume Builder!</p>
                  </div>
                )}
                
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.is_ai_response ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.is_ai_response
                          ? 'bg-muted text-foreground'
                          : 'bg-primary text-primary-foreground'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.message}</p>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-lg text-sm">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={sendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  size="sm"
                  className="px-3"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default SupportWidget;