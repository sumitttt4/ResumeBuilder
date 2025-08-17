import { FileText, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-foreground">Resume Builder</h3>
                <p className="text-xs text-muted-foreground">AI-Powered Platform</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Create professional resumes and stunning portfolios with AI assistance. 
              Trusted by 50,000+ professionals worldwide.
            </p>
            <div className="flex items-center gap-3">
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold font-heading text-foreground">Product</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Resume Builder</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio Generator</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Templates</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">ATS Scanner</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Job Readiness</a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold font-heading text-foreground">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Help Center</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Career Tips</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Interview Guide</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">API Docs</a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold font-heading text-foreground">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Careers</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Resume Builder. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Made with ❤️ for professionals</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;