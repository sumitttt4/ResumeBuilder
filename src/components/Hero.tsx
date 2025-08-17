import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Globe, Zap, Award } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit bg-accent text-accent-foreground px-3 py-1">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered Resume Builder
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight">
                Create Professional 
                <span className="text-primary"> Resumes</span> &
                <span className="text-primary"> Portfolios</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Build ATS-friendly resumes and stunning portfolio websites with AI. 
                Support for 20+ Indian languages, live preview, and one-click export.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                20+ Languages
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                ATS-Friendly
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                Job Readiness Score
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold">
                Create Resume Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold btn-neumorphic">
                View Templates
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Resumes Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">20+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="card-neumorphic">
              <img 
                src={heroImage} 
                alt="Resume and Portfolio Builder Preview" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center soft-shadow">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-20 h-12 bg-accent rounded-xl flex items-center justify-center soft-shadow">
              <span className="text-sm font-semibold text-accent-foreground">AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;