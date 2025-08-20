import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Code, Palette, Globe, Smartphone, Zap } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 fade-in-left">
            <div className="card-neumorphic card-tilt">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">John Doe</h3>
                      <p className="text-white/80">Software Engineer</p>
                    </div>
                  </div>
                  
                  <p className="text-white/90 mb-6 leading-relaxed">
                    A passionate software engineer dedicated to creating innovative solutions 
                    that make a real difference in people's lives.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Featured Projects</h4>
                      <div className="space-y-2">
                        <div className="bg-white/10 rounded-lg p-3 hover:bg-white/15 transition-colors">
                          <h5 className="font-medium">E-commerce Platform</h5>
                          <p className="text-sm text-white/70">Full-stack web application with React & Node.js</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 hover:bg-white/15 transition-colors">
                          <h5 className="font-medium">Mobile App</h5>
                          <p className="text-sm text-white/70">React Native cross-platform application</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-6">
                    <Button variant="secondary" size="sm" className="group">
                      <ExternalLink className="w-4 h-4 mr-1 transition-transform group-hover:translate-x-1" />
                      View Live
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8 fade-in-right">
            <div>
              <Badge variant="secondary" className="w-fit bg-accent text-accent-foreground px-3 py-1 mb-4">
                <Palette className="w-3 h-3 mr-1" />
                Portfolio Generator
              </Badge>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
                Transform Your Resume Into a
                <span className="text-primary"> Stunning Website</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Automatically convert your resume into a professional portfolio website. 
                Perfect for showcasing your work, projects, and achievements online.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 hover:bg-card transition-colors card-tilt">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Responsive Design</h3>
                  <p className="text-muted-foreground text-sm">Perfect on desktop, tablet, and mobile devices with fluid layouts</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 hover:bg-card transition-colors card-tilt">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Custom Domain</h3>
                  <p className="text-muted-foreground text-sm">Get your own professional web address and online presence</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 hover:bg-card transition-colors card-tilt">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Palette className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Multiple Themes</h3>
                  <p className="text-muted-foreground text-sm">Choose from professionally designed themes and color schemes</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 hover:bg-card transition-colors card-tilt">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Fast Loading</h3>
                  <p className="text-muted-foreground text-sm">Optimized for speed with modern web technologies</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link to="/portfolio/ai">
                <Button size="lg" className="btn-gradient group">
                  Create Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;