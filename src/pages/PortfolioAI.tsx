import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { 
  Sparkles, 
  Wand2, 
  Loader2, 
  CheckCircle, 
  Globe, 
  Palette, 
  Code,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const PortfolioAI = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<any>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    profession: '',
    experience: '',
    skills: '',
    projects: '',
    bio: '',
    style: 'modern'
  });

  const handleGenerate = async () => {
    if (!user) {
      toast.error('Please sign in to generate your portfolio');
      return;
    }

    if (!formData.fullName || !formData.profession) {
      toast.error('Please fill in your name and profession');
      return;
    }

    setIsLoading(true);

    try {
      const prompt = `Create a professional portfolio website content for:
      Name: ${formData.fullName}
      Profession: ${formData.profession}
      Experience: ${formData.experience}
      Skills: ${formData.skills}
      Projects: ${formData.projects}
      Bio: ${formData.bio}
      Style: ${formData.style}`;

      const { data, error } = await supabase.functions.invoke('generate-copy', {
        body: {
          type: 'portfolio',
          prompt,
          context: formData
        }
      });

      if (error) {
        throw error;
      }

      setGeneratedContent(data);
      toast.success('Portfolio generated successfully!');
    } catch (error: any) {
      console.error('Error generating portfolio:', error);
      toast.error('Failed to generate portfolio. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered Portfolio Generator
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Create Your Portfolio in One Click
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let AI generate a stunning, professional portfolio website for you. 
              Just provide your details and watch the magic happen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Wand2 className="w-5 h-5 mr-2" />
                  Your Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="e.g., Priya Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="profession">Profession *</Label>
                    <Input
                      id="profession"
                      placeholder="e.g., Full Stack Developer"
                      value={formData.profession}
                      onChange={(e) => setFormData({...formData, profession: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input
                      id="experience"
                      placeholder="e.g., 3 years"
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="skills">Skills & Technologies</Label>
                    <Textarea
                      id="skills"
                      placeholder="e.g., React, Node.js, Python, AWS, MongoDB..."
                      value={formData.skills}
                      onChange={(e) => setFormData({...formData, skills: e.target.value})}
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="projects">Notable Projects</Label>
                    <Textarea
                      id="projects"
                      placeholder="Briefly describe 2-3 of your best projects..."
                      value={formData.projects}
                      onChange={(e) => setFormData({...formData, projects: e.target.value})}
                      rows={4}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="bio">Personal Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself, your passions, and what drives you..."
                      value={formData.bio}
                      onChange={(e) => setFormData({...formData, bio: e.target.value})}
                      rows={3}
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Portfolio Style</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: 'modern', name: 'Modern', icon: Sparkles },
                    { id: 'creative', name: 'Creative', icon: Palette },
                    { id: 'minimal', name: 'Minimal', icon: Code }
                  ].map(({ id, name, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => setFormData({...formData, style: id})}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.style === id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <Icon className="w-6 h-6 mx-auto mb-2" />
                      <p className="text-sm font-medium">{name}</p>
                    </button>
                  ))}
                </div>
              </Card>

              <Button 
                onClick={handleGenerate} 
                disabled={isLoading || !user}
                size="lg" 
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating Your Portfolio...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Portfolio with AI
                  </>
                )}
              </Button>

              {!user && (
                <p className="text-center text-sm text-muted-foreground">
                  <Link to="/auth" className="text-primary hover:underline">
                    Sign in
                  </Link> to generate your AI portfolio
                </p>
              )}
            </div>

            {/* Preview/Results */}
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  {generatedContent ? 'Your Portfolio Preview' : 'Features'}
                </h2>

                {generatedContent ? (
                  <div className="space-y-6">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-medium">Portfolio Generated!</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Your AI-generated portfolio is ready. Here's a preview of the content:
                      </p>
                      <div className="bg-background p-4 rounded border text-sm">
                        <pre className="whitespace-pre-wrap">{generatedContent.content}</pre>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Button className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Deploy Portfolio
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Code className="w-4 h-4 mr-2" />
                        Customize Design
                      </Button>
                      <Link to="/portfolio/sample">
                        <Button variant="outline" className="w-full">
                          View Sample Portfolio
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">AI-Powered Content</h3>
                        <p className="text-sm text-muted-foreground">
                          Professional copy written specifically for your background
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Palette className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Beautiful Design</h3>
                        <p className="text-sm text-muted-foreground">
                          Choose from modern, creative, or minimal styles
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Instant Deployment</h3>
                        <p className="text-sm text-muted-foreground">
                          Get your portfolio live on the web in minutes
                        </p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link to="/portfolio/sample">
                        <Button variant="outline" className="w-full">
                          View Sample Portfolio
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/">
              <Button variant="outline">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioAI;