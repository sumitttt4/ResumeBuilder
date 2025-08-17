import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Code, Palette, Globe } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="card-neumorphic">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 text-white">
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
                  A software engineer with a passion for developing innovative programs that expedite 
                  the efficiency of everyday tasks.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Featured Projects</h4>
                    <div className="space-y-2">
                      <div className="bg-white/10 rounded-lg p-3">
                        <h5 className="font-medium">E-commerce Platform</h5>
                        <p className="text-sm text-white/70">Full-stack web application</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <h5 className="font-medium">Mobile App</h5>
                        <p className="text-sm text-white/70">React Native application</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-6">
                  <Button variant="secondary" size="sm">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Live
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <Badge variant="secondary" className="w-fit bg-accent text-accent-foreground px-3 py-1 mb-4">
                <Palette className="w-3 h-3 mr-1" />
                Portfolio Generator
              </Badge>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
                Transform Your Resume Into a
                <span className="text-primary"> Stunning Website</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Automatically convert your resume into a professional portfolio website. 
                Perfect for showcasing your work, projects, and achievements online.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Code className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Responsive Design</h3>
                  <p className="text-muted-foreground text-sm">Perfect on desktop, tablet, and mobile devices</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Custom Domain</h3>
                  <p className="text-muted-foreground text-sm">Get your own professional web address</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Palette className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Multiple Themes</h3>
                  <p className="text-muted-foreground text-sm">Choose from professionally designed themes</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold">
                Create Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;