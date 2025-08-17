import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Upload, Sparkles, Download, Globe, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload or Start Fresh",
    description: "Import your existing resume or start from scratch with our AI-guided questionnaire.",
    details: "Supports PDF, DOC, LinkedIn import",
    step: "01"
  },
  {
    icon: Sparkles,
    title: "AI Enhancement",
    description: "Our AI analyzes your content and suggests improvements for better ATS compatibility.",
    details: "Job-specific keywords, formatting, content optimization",
    step: "02"
  },
  {
    icon: Download,
    title: "Choose & Customize",
    description: "Select from 50+ templates and customize colors, fonts, and layout to match your style.",
    details: "Real-time preview, multi-language support",
    step: "03"
  },
  {
    icon: Globe,
    title: "Export & Share",
    description: "Download as PDF or generate a stunning portfolio website to showcase your work.",
    details: "One-click export, custom domain, LinkedIn sharing",
    step: "04"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            How It Works
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            From Resume to Dream Job in 4 Steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our intelligent platform guides you through creating a professional resume 
            and portfolio that gets noticed by recruiters and ATS systems.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.step} className="relative">
                  <Card className="card-feature h-full p-6 text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <Badge variant="outline" className="absolute -top-2 -right-2 w-8 h-8 rounded-full p-0 flex items-center justify-center text-xs font-bold">
                        {step.step}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    <p className="text-xs text-primary font-medium">{step.details}</p>
                  </Card>
                  
                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-primary/40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Interactive Demo */}
          <Card className="card-neumorphic p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              See It In Action
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Watch how our AI transforms a basic resume into an ATS-optimized, 
              professional document that stands out to employers.
            </p>
            <div className="bg-muted/50 rounded-xl p-8 mb-6">
              <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mb-4 mx-auto flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-lg font-medium mb-2">Interactive Demo</p>
                  <p className="text-sm text-muted-foreground">
                    See the transformation process
                  </p>
                </div>
              </div>
            </div>
            <Button size="lg" className="btn-neumorphic">
              Try Interactive Demo
            </Button>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">2.5x</div>
            <div className="text-sm text-muted-foreground">More Interview Calls</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">90%</div>
            <div className="text-sm text-muted-foreground">ATS Pass Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">15 min</div>
            <div className="text-sm text-muted-foreground">Average Build Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;