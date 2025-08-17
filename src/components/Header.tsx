import { Button } from "@/components/ui/button";
import { FileText, User, Languages } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-heading text-foreground">Resume Builder</h1>
              <p className="text-xs text-muted-foreground">AI-Powered • Multi-Language</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#templates" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Templates
            </a>
            <a href="#portfolio" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium px-6">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;