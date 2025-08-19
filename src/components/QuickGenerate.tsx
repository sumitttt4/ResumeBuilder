import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { 
  FileText, 
  User, 
  Mail, 
  Briefcase, 
  Zap, 
  Sparkles,
  Copy,
  Download,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

type GenerationType = 'cold_email' | 'cover_letter' | 'portfolio' | 'resume';

interface QuickPrompts {
  cold_email: string;
  cover_letter: string;
  portfolio: string;
  resume: string;
}

const QuickGenerate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<GenerationType>('resume');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [customPrompt, setCustomPrompt] = useState('');

  const quickPrompts: QuickPrompts = {
    resume: "Create an ATS-optimized resume for a Software Developer with 3 years experience in React, Node.js, and Python. Include skills in cloud technologies, database management, and agile development. Make it suitable for Indian job market with focus on technical skills and project achievements.",
    
    portfolio: "Create portfolio website content for a Full Stack Developer with expertise in modern web technologies. Include hero section highlighting problem-solving skills, about section showcasing 5+ years experience, and project descriptions for e-commerce platform, social media app, and fintech dashboard. Target audience: tech startups and established companies.",
    
    cold_email: "Create a cold email for business development targeting Indian startups. Offering web development and digital transformation services. Highlight cost-effective solutions, quick turnaround, and experience with similar companies. Professional yet approachable tone, clear call-to-action for a 15-minute discovery call.",
    
    cover_letter: "Create a cover letter for Senior Frontend Developer position at a tech startup. Emphasize React expertise, leadership in UI/UX improvements, and passion for user-centered design. Show enthusiasm for the company's mission and highlight specific achievements in previous roles with metrics and impact."
  };

  const generateContent = async (prompt: string) => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt or use a quick template');
      return;
    }

    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-copy', {
        body: {
          type: selectedType,
          prompt: prompt.trim(),
          context: { source: 'quick_generate' }
        }
      });

      if (error) throw error;

      if (data?.content) {
        setGeneratedContent(data.content);
        toast.success('Content generated successfully!');
      } else {
        throw new Error('No content received');
      }
    } catch (error: any) {
      console.error('Generation error:', error);
      let message = 'Failed to generate content. Please try again.';
      
      if (error?.message?.includes('unavailable')) {
        message = 'AI service is temporarily busy. Please try again in a moment.';
      }
      
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    toast.success('Content copied to clipboard!');
  };

  const generationOptions = [
    {
      type: 'resume' as GenerationType,
      title: 'ATS Resume',
      description: 'Professional resume optimized for Indian job market',
      icon: FileText,
      color: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    {
      type: 'portfolio' as GenerationType,
      title: 'Portfolio Website',
      description: 'Complete portfolio content with projects & skills',
      icon: User,
      color: 'bg-purple-500',
      textColor: 'text-purple-600'
    },
    {
      type: 'cold_email' as GenerationType,
      title: 'Cold Email',
      description: 'Business outreach emails that convert',
      icon: Mail,
      color: 'bg-green-500',
      textColor: 'text-green-600'
    },
    {
      type: 'cover_letter' as GenerationType,
      title: 'Cover Letter',
      description: 'Personalized cover letters for job applications',
      icon: Briefcase,
      color: 'bg-orange-500',
      textColor: 'text-orange-600'
    }
  ];

  const selectedOption = generationOptions.find(opt => opt.type === selectedType);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Quick Generate
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One-Click AI Generation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Generate professional content instantly. Perfect for busy professionals who need quality results fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {generationOptions.map((option) => {
            const Icon = option.icon;
            return (
              <Dialog key={option.type} open={isOpen && selectedType === option.type} onOpenChange={(open) => {
                setIsOpen(open);
                if (open) {
                  setSelectedType(option.type);
                  setGeneratedContent('');
                  setCustomPrompt('');
                }
              }}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-12 h-12 ${option.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{option.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground text-center">
                        {option.description}
                      </p>
                      <div className="flex items-center justify-center mt-4">
                        <Sparkles className={`w-4 h-4 ${option.textColor} mr-1`} />
                        <span className={`text-sm font-medium ${option.textColor}`}>Generate Now</span>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Icon className={`w-5 h-5 ${option.textColor}`} />
                      Generate {option.title}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Quick Template</h3>
                      <Card className="p-4 bg-muted/50">
                        <p className="text-sm text-muted-foreground mb-3">
                          {quickPrompts[option.type]}
                        </p>
                        <Button 
                          onClick={() => generateContent(quickPrompts[option.type])}
                          disabled={isLoading}
                          className="w-full"
                        >
                          {isLoading ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Generating...
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-4 h-4 mr-2" />
                              Use This Template
                            </>
                          )}
                        </Button>
                      </Card>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          Or customize your prompt
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Custom Prompt</h3>
                      <Textarea
                        value={customPrompt}
                        onChange={(e) => setCustomPrompt(e.target.value)}
                        placeholder={`Describe what you want for your ${option.title.toLowerCase()}...`}
                        className="min-h-[100px]"
                      />
                      <Button 
                        onClick={() => generateContent(customPrompt)}
                        disabled={isLoading || !customPrompt.trim()}
                        className="w-full mt-3"
                        variant="outline"
                      >
                        Generate with Custom Prompt
                      </Button>
                    </div>

                    {generatedContent && (
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-medium">Generated Content</h3>
                          <div className="flex gap-2">
                            <Button
                              onClick={copyToClipboard}
                              variant="outline"
                              size="sm"
                            >
                              <Copy className="w-4 h-4 mr-1" />
                              Copy
                            </Button>
                            {option.type === 'portfolio' && (
                              <Link to="/portfolio/sample">
                                <Button size="sm">
                                  <ExternalLink className="w-4 h-4 mr-1" />
                                  View Sample
                                </Button>
                              </Link>
                            )}
                            {option.type === 'resume' && (
                              <Link to="/resume/sample">
                                <Button size="sm">
                                  <ExternalLink className="w-4 h-4 mr-1" />
                                  View Template
                                </Button>
                              </Link>
                            )}
                          </div>
                        </div>
                        <Card className="p-4 bg-muted/30 max-h-96 overflow-y-auto">
                          <pre className="whitespace-pre-wrap text-sm">
                            {generatedContent}
                          </pre>
                        </Card>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickGenerate;