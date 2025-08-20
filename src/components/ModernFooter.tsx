import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Github, Mail, Globe, Heart } from "lucide-react";

const ModernFooter = () => {
  return (
    <footer className="bg-card border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-xl font-bold text-white">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-foreground">Resume Builder</h3>
                <p className="text-xs text-muted-foreground">AI-Powered • Multi-Language</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Create professional resumes and stunning portfolio websites with AI. 
              Trusted by 50,000+ job seekers worldwide.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/resume/sample" className="text-sm text-muted-foreground hover:text-primary transition-colors nav-link">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link to="/portfolio/ai" className="text-sm text-muted-foreground hover:text-primary transition-colors nav-link">
                  Portfolio Generator
                </Link>
              </li>
              <li>
                <Link to="/tools/cover-letter" className="text-sm text-muted-foreground hover:text-primary transition-colors nav-link">
                  Cover Letter Generator
                </Link>
              </li>
              <li>
                <Link to="/tools/cold-email" className="text-sm text-muted-foreground hover:text-primary transition-colors nav-link">
                  Cold Email Generator
                </Link>
              </li>
              <li>
                <Link to="/templates" className="text-sm text-muted-foreground hover:text-primary transition-colors nav-link">
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors nav-link">
                  Career Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors nav-link">
                  Resume Examples
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors nav-link">
                  Interview Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors nav-link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors nav-link">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors nav-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors nav-link">
                  Pricing
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors nav-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors nav-link">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-heading mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest resume tips, job market insights, and career advice delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground"
              />
              <Button className="btn-gradient">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border/40">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 sm:mb-0">
            <span>© 2024 Resume Builder. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for job seekers</span>
            <Globe className="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;