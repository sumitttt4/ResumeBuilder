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
import { ArrowLeft, Copy, Mail, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const coldEmailSchema = z.object({
  recipientName: z.string().min(1, 'Recipient name is required'),
  recipientCompany: z.string().min(1, 'Company is required'),
  recipientRole: z.string().optional(),
  yourName: z.string().min(1, 'Your name is required'),
  yourCompany: z.string().optional(),
  yourRole: z.string().optional(),
  purpose: z.string().min(10, 'Purpose must be at least 10 characters'),
  tone: z.enum(['professional', 'friendly', 'casual']),
});

type ColdEmailFormData = z.infer<typeof coldEmailSchema>;

const ColdEmail = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedEmail, setGeneratedEmail] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
  if (!user) {
    navigate('/auth');
    return null;
  }

  const { register, handleSubmit, formState: { errors }, watch } = useForm<ColdEmailFormData>({
    resolver: zodResolver(coldEmailSchema),
    defaultValues: {
      tone: 'professional',
      yourName: user?.user_metadata?.full_name || '',
    }
  });

  const onSubmit = async (data: ColdEmailFormData) => {
    setIsGenerating(true);
    try {
      const prompt = `Create a cold email with the following details:

Recipient: ${data.recipientName} ${data.recipientRole ? `(${data.recipientRole})` : ''} at ${data.recipientCompany}
From: ${data.yourName} ${data.yourRole ? `(${data.yourRole})` : ''} ${data.yourCompany ? `at ${data.yourCompany}` : ''}
Purpose: ${data.purpose}
Tone: ${data.tone}

Please create a personalized, engaging cold email that avoids spam triggers and includes a clear call-to-action.`;

      const { data: result, error } = await supabase.functions.invoke('generate-copy', {
        body: {
          type: 'cold_email',
          prompt,
          context: data
        }
      });

      if (error) {
        throw error;
      }

      if (result?.content) {
        setGeneratedEmail(result.content);
        toast.success('Cold email generated successfully!');
      } else {
        throw new Error('No content generated');
      }
    } catch (error: any) {
      console.error('Error generating cold email:', error);
      toast.error(error.message || 'Failed to generate cold email');
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedEmail);
      toast.success('Email copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy email');
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
              <Mail className="h-4 w-4" />
              AI Cold Email Generator
            </div>
            <h1 className="text-4xl font-bold">Generate Professional Cold Emails</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create personalized, engaging cold emails that get responses using AI
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-xl border-0 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Email Details
              </CardTitle>
              <CardDescription>
                Fill in the details to generate a personalized cold email
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="recipientName">Recipient Name *</Label>
                    <Input
                      id="recipientName"
                      placeholder="John Smith"
                      {...register('recipientName')}
                    />
                    {errors.recipientName && (
                      <p className="text-sm text-destructive">{errors.recipientName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="recipientCompany">Their Company *</Label>
                    <Input
                      id="recipientCompany"
                      placeholder="Acme Corp"
                      {...register('recipientCompany')}
                    />
                    {errors.recipientCompany && (
                      <p className="text-sm text-destructive">{errors.recipientCompany.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recipientRole">Their Role (optional)</Label>
                  <Input
                    id="recipientRole"
                    placeholder="Marketing Director"
                    {...register('recipientRole')}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="yourName">Your Name *</Label>
                    <Input
                      id="yourName"
                      placeholder="Your name"
                      {...register('yourName')}
                    />
                    {errors.yourName && (
                      <p className="text-sm text-destructive">{errors.yourName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="yourCompany">Your Company (optional)</Label>
                    <Input
                      id="yourCompany"
                      placeholder="Your company"
                      {...register('yourCompany')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="yourRole">Your Role (optional)</Label>
                  <Input
                    id="yourRole"
                    placeholder="Sales Manager"
                    {...register('yourRole')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purpose">Email Purpose *</Label>
                  <Textarea
                    id="purpose"
                    placeholder="Describe what you want to achieve with this email (e.g., schedule a meeting, introduce your product, seek partnership, etc.)"
                    rows={4}
                    {...register('purpose')}
                  />
                  {errors.purpose && (
                    <p className="text-sm text-destructive">{errors.purpose.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tone">Email Tone</Label>
                  <select 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    {...register('tone')}
                  >
                    <option value="professional">Professional</option>
                    <option value="friendly">Friendly</option>
                    <option value="casual">Casual</option>
                  </select>
                </div>

                <Button type="submit" className="w-full" disabled={isGenerating}>
                  {isGenerating ? 'Generating...' : 'Generate Cold Email'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Generated Email
              </CardTitle>
              <CardDescription>
                Your AI-generated cold email will appear here
              </CardDescription>
            </CardHeader>
            <CardContent>
              {generatedEmail ? (
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap border">
                    {generatedEmail}
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={copyToClipboard} variant="outline" className="flex-1">
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Email
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Mail className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Fill out the form to generate your cold email</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ColdEmail;