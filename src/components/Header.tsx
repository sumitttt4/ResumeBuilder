import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FileText, User, LogOut, Mail, FileText as FileTextIcon, Menu, Home } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
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
          
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors flex items-center gap-2 ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
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
            {/* Mobile menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  <Link 
                    to="/" 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 text-base font-medium transition-colors ${
                      isActive('/') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    <Home className="h-5 w-5" />
                    Home
                  </Link>
                  <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </a>
                  <a href="#templates" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors">
                    Templates
                  </a>
                  <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors">
                    Portfolio
                  </a>
                  <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors">
                    Pricing
                  </a>
                  
                  {user ? (
                    <div className="flex flex-col space-y-4 pt-6 border-t">
                      <Link 
                        to="/tools/cold-email" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        Cold Email Generator
                      </Link>
                      <Link 
                        to="/tools/cover-letter" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FileTextIcon className="h-5 w-5" />
                        Cover Letter Generator
                      </Link>
                      <Button 
                        onClick={() => { signOut(); setMobileMenuOpen(false); }} 
                        variant="ghost" 
                        className="justify-start text-destructive hover:text-destructive"
                      >
                        <LogOut className="h-5 w-5 mr-3" />
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-3 pt-6 border-t">
                      <Button variant="ghost" asChild>
                        <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
                      </Button>
                      <Button asChild>
                        <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <ThemeToggle />
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">
                      {user.user_metadata?.full_name || user.email?.split('@')[0]}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/tools/cold-email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Cold Email Generator
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/tools/cover-letter" className="flex items-center gap-2">
                      <FileTextIcon className="h-4 w-4" />
                      Cover Letter Generator
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut} className="text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" size="sm" className="hidden sm:flex" asChild>
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium px-6" asChild>
                  <Link to="/auth">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;