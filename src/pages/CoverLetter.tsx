import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { ArrowLeft, Copy, FileText, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const coverLetterSchema = z.object({
  jobTitle: z.string().min(1, 'Job title is required'),
  company: z.string().min(1, 'Company name is required'),
  hiringManager: z.string().optional(),
  yourName: z.string().min(1, 'Your name is required'),
  experience: z.string().min(10, 'Experience must be at least 10 characters'),
  skills: z.string().min(10, 'Skills must be at least 10 characters'),
  achievements: z.string().optional(),
  whyInterested: z.string().min(10, 'Must be at least 10 characters'),
  tone: z.enum(['professional', 'enthusiastic', 'confident']),
});

type CoverLetterFormData = z.infer<typeof coverLetterSchema>;

const CoverLetter = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
  if (!user) {
    navigate('/auth');
    return null;
  }

  const { register, handleSubmit, formState: { errors } } = useForm<CoverLetterFormData>({
    resolver: zodResolver(coverLetterSchema),
    defaultValues: {
      tone: 'professional',
      yourName: user?.user_metadata?.full_name || '',
    }
  });

  const onSubmit = async (data: CoverLetterFormData) => {
    setIsGenerating(true);
    try {
      const prompt = `Create a compelling cover letter with the following information:

Position: ${data.jobTitle} at ${data.company}
${data.hiringManager ? `Hiring Manager: ${data.hiringManager}` : ''}
Applicant: ${data.yourName}
Tone: ${data.tone}

Experience/Background: ${data.experience}

Key Skills: ${data.skills}

${data.achievements ? `Notable Achievements: ${data.achievements}` : ''}

Why interested in this role/company: ${data.whyInterested}

Please create a professional cover letter that:
- Shows enthusiasm for the specific role and company
- Highlights relevant experience and skills
- Demonstrates value proposition
- Includes specific examples where possible
- Follows proper business letter format
- Has a strong opening and closing`;

      const { data: result, error } = await supabase.functions.invoke('generate-copy', {
        body: {
          type: 'cover_letter',
          prompt,
          context: data
        }
      });

      if (error) {
        throw error;
      }

      if (result?.content) {
        setGeneratedLetter(result.content);
        toast.success('Cover letter generated successfully!');
      } else {
        throw new Error('No content generated');
      }
    } catch (error: any) {
      console.error('Error generating cover letter:', error);
      toast.error(error.message || 'Failed to generate cover letter');
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedLetter);
      toast.success('Cover letter copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy cover letter');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 p-4">
      <div className="container mx-auto max-w-6xl py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <FileText className="h-4 w-4" />
              AI Cover Letter Generator
            </div>
            <h1 className="text-4xl font-bold">Generate Professional Cover Letters</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create compelling, personalized cover letters that help you stand out
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-xl border-0 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Job & Personal Details
              </CardTitle>
              <CardDescription>
                Provide information about the job and your background
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title *</Label>
                    <Input
                      id="jobTitle"
                      placeholder="Software Engineer"
                      {...register('jobTitle')}
                    />
                    {errors.jobTitle && (
                      <p className="text-sm text-destructive">{errors.jobTitle.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      placeholder="Google"
                      {...register('company')}
                    />
                    {errors.company && (
                      <p className="text-sm text-destructive">{errors.company.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hiringManager">Hiring Manager (optional)</Label>
                    <Input
                      id="hiringManager"
                      placeholder="Jane Smith"
                      {...register('hiringManager')}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="yourName">Your Name *</Label>
                    <Input
                      id="yourName"
                      placeholder="Your full name"
                      {...register('yourName')}
                    />
                    {errors.yourName && (
                      <p className="text-sm text-destructive">{errors.yourName.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Relevant Experience *</Label>
                  <Textarea
                    id="experience"
                    placeholder="Describe your relevant work experience, education, and background that relates to this position..."
                    rows={4}
                    {...register('experience')}
                  />
                  {errors.experience && (
                    <p className="text-sm text-destructive">{errors.experience.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills">Key Skills *</Label>
                  <Textarea
                    id="skills"
                    placeholder="List your relevant skills, technologies, certifications, or competencies for this role..."
                    rows={3}
                    {...register('skills')}
                  />
                  {errors.skills && (
                    <p className="text-sm text-destructive">{errors.skills.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="achievements">Notable Achievements (optional)</Label>
                  <Textarea
                    id="achievements"
                    placeholder="Mention specific accomplishments, awards, or quantifiable results that demonstrate your value..."
                    rows={3}
                    {...register('achievements')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whyInterested">Why This Role/Company? *</Label>
                  <Textarea
                    id="whyInterested"
                    placeholder="Explain why you're interested in this specific position and company..."
                    rows={3}
                    {...register('whyInterested')}
                  />
                  {errors.whyInterested && (
                    <p className="text-sm text-destructive">{errors.whyInterested.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tone">Letter Tone</Label>
                  <select 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    {...register('tone')}
                  >
                    <option value="professional">Professional</option>
                    <option value="enthusiastic">Enthusiastic</option>
                    <option value="confident">Confident</option>
                  </select>
                </div>

                <Button type="submit" className="w-full" disabled={isGenerating}>
                  {isGenerating ? 'Generating...' : 'Generate Cover Letter'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Generated Cover Letter
              </CardTitle>
              <CardDescription>
                Your AI-generated cover letter will appear here
              </CardDescription>
            </CardHeader>
            <CardContent>
              {generatedLetter ? (
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4 text-sm whitespace-pre-wrap border max-h-96 overflow-y-auto">
                    {generatedLetter}
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={copyToClipboard} variant="outline" className="flex-1">
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Cover Letter
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Fill out the form to generate your cover letter</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;