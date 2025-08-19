import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Download, Edit3, Eye, Share2, Star } from 'lucide-react';

const SampleResume = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const templateId = params.get('template') || '1';
  const templateName = params.get('name') || 'Professional Executive';
  
  const [formData, setFormData] = useState({
    fullName: 'Raj Dutta',
    email: 'raj.dutta@email.com',
    phone: '+91 98765 43210',
    location: 'Mumbai, Maharashtra',
    title: 'Senior Software Engineer',
    summary: 'Experienced software engineer with 5+ years in full-stack development, specializing in React, Node.js, and cloud technologies. Proven track record of delivering scalable solutions for fintech and e-commerce platforms.',
    experience: 'Senior Software Engineer\nTech Solutions Pvt Ltd | Mumbai\n2020 - Present\n• Led development of microservices architecture serving 1M+ users\n• Implemented automated testing reducing bugs by 40%\n• Mentored 3 junior developers and conducted code reviews',
    education: 'Bachelor of Technology in Computer Science\nIIT Bombay | 2016-2020\nCGPA: 8.5/10',
    skills: 'React, Node.js, Python, AWS, Docker, MongoDB, PostgreSQL, Git, Agile, Leadership'
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold">Resume Editor</h1>
              <p className="text-muted-foreground">Template: {templateName}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Badge variant="secondary">ATS-Optimized</Badge>
            <Badge variant="secondary">
              <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
              4.9 Rating
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Editor Form */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Edit3 className="w-5 h-5 mr-2" />
                Personal Information
              </h2>
              <div className="space-y-4">
                <Input
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
                <Input
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <Input
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <Input
                  placeholder="Location"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
                <Input
                  placeholder="Professional Title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Professional Summary</h2>
              <Textarea
                placeholder="Write a brief summary of your professional background..."
                value={formData.summary}
                onChange={(e) => setFormData({...formData, summary: e.target.value})}
                rows={4}
              />
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
              <Textarea
                placeholder="Add your work experience..."
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                rows={6}
              />
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Education</h2>
              <Textarea
                placeholder="Add your education details..."
                value={formData.education}
                onChange={(e) => setFormData({...formData, education: e.target.value})}
                rows={3}
              />
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <Textarea
                placeholder="List your key skills..."
                value={formData.skills}
                onChange={(e) => setFormData({...formData, skills: e.target.value})}
                rows={2}
              />
            </Card>
          </div>

          {/* Live Preview */}
          <div className="lg:sticky lg:top-8">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
              <div className="bg-white text-black p-8 rounded border shadow-inner min-h-[600px] space-y-4">
                <div className="text-center border-b pb-4">
                  <h1 className="text-2xl font-bold text-blue-900">{formData.fullName}</h1>
                  <p className="text-lg text-blue-700">{formData.title}</p>
                  <div className="text-sm text-gray-600 mt-2">
                    {formData.email} | {formData.phone} | {formData.location}
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-blue-900 mb-2">PROFESSIONAL SUMMARY</h2>
                  <p className="text-sm">{formData.summary}</p>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-blue-900 mb-2">WORK EXPERIENCE</h2>
                  <pre className="text-sm whitespace-pre-wrap">{formData.experience}</pre>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-blue-900 mb-2">EDUCATION</h2>
                  <pre className="text-sm whitespace-pre-wrap">{formData.education}</pre>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-blue-900 mb-2">SKILLS</h2>
                  <p className="text-sm">{formData.skills}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/">
            <Button variant="outline">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SampleResume;