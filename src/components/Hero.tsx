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
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <Badge 
                variant="secondary" 
                className="w-fit bg-accent text-accent-foreground px-3 py-1 animate-slide-in-left"
                style={{ animationDelay: '0.2s' }}
              >
                <Sparkles className="w-3 h-3 mr-1 animate-pulse" />
                AI-Powered Resume Builder
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                Create Professional 
                <span className="text-primary animate-gradient-text"> Resumes</span> &
                <span className="text-primary animate-gradient-text"> Portfolios</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
                Build ATS-friendly resumes and stunning portfolio websites with AI. 
                Support for 20+ Indian languages, live preview, and one-click export.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-2 hover:scale-110 transition-transform">
                <Globe className="w-4 h-4 text-primary animate-spin-slow" />
                20+ Languages
              </div>
              <div className="flex items-center gap-2 hover:scale-110 transition-transform">
                <Zap className="w-4 h-4 text-primary animate-bounce" />
                ATS-Friendly
              </div>
              <div className="flex items-center gap-2 hover:scale-110 transition-transform">
                <Award className="w-4 h-4 text-primary animate-pulse" />
                Job Readiness Score
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left" style={{ animationDelay: '0.9s' }}>
              <Link to="/resume/sample">
                <Button 
                  size="lg" 
                  className="btn-gradient group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Create Resume Free
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </Link>
              <Link to="/templates">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 text-lg font-semibold btn-neumorphic group"
                >
                  <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent group-hover:text-foreground transition-colors">
                    View Templates
                  </span>
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4 animate-slide-in-left" style={{ animationDelay: '1s' }}>
              <div className="text-center hover:scale-110 transition-transform">
                <div className="text-2xl font-bold text-foreground bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  <span className="animate-counter" data-target="50">50</span>K+
                </div>
                <div className="text-sm text-muted-foreground">Resumes Created</div>
              </div>
              <div className="text-center hover:scale-110 transition-transform">
                <div className="text-2xl font-bold text-foreground bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  <span className="animate-counter" data-target="98">98</span>%
                </div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center hover:scale-110 transition-transform">
                <div className="text-2xl font-bold text-foreground bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  <span className="animate-counter" data-target="20">20</span>+
                </div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right" style={{ animationDelay: '1.2s' }}>
            <div className="card-neumorphic card-tilt transform transition-all duration-500 hover:scale-105">
              <div className="relative group cursor-pointer">
                <img 
                  src={heroImage} 
                  alt="AI Resume and Portfolio Builder - 3D Illustration" 
                  className="w-full h-auto rounded-2xl animate-float"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
            
            {/* Floating elements with enhanced animations */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-2xl flex items-center justify-center soft-shadow animate-float" style={{ animationDelay: '0.5s' }}>
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-20 h-12 bg-gradient-to-br from-accent to-accent-foreground/20 rounded-xl flex items-center justify-center soft-shadow animate-float" style={{ animationDelay: '0.8s' }}>
              <span className="text-sm font-semibold text-accent-foreground">AI</span>
            </div>

            {/* Additional decorative elements */}
            <div className="absolute -top-2 left-1/4 w-8 h-8 bg-secondary/50 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-2 w-6 h-6 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1.3s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;