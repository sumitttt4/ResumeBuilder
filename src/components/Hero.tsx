import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Globe, Zap, Award } from "lucide-react";
import heroImage from "@/assets/hero-3d-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in-left">
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
              <Link to="/resume/sample">
                <Button size="lg" className="btn-gradient group">
                  Create Resume Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/templates">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold btn-neumorphic">
                  View Templates
                </Button>
              </Link>
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

          <div className="relative fade-in-right">
            <div className="card-neumorphic card-tilt">
              <img 
                src={heroImage} 
                alt="AI Resume and Portfolio Builder - 3D Illustration" 
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center soft-shadow animate-pulse">
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