import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/hooks/useAuth";
import { CookieConsent } from "@/components/CookieConsent";
import { useEffect } from "react";
import { trackPageView, initializeAnalytics } from "@/lib/analytics";

import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ColdEmail from "./pages/ColdEmail";
import CoverLetter from "./pages/CoverLetter";
import NotFound from "./pages/NotFound";
import SupportWidget from "./components/SupportWidget";

const queryClient = new QueryClient();

// Analytics tracking component
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    initializeAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
              <AnalyticsTracker />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/tools/cold-email" element={<ColdEmail />} />
                <Route path="/tools/cover-letter" element={<CoverLetter />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <SupportWidget />
              <CookieConsent />
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

// Error fallback component for Sentry
const ErrorFallback = ({ error, resetError }: { error: unknown; resetError: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center space-y-4 p-8">
      <h1 className="text-2xl font-bold text-foreground">Oops! Something went wrong</h1>
      <p className="text-muted-foreground">
        We're sorry for the inconvenience. Please try refreshing the page.
      </p>
      <button 
        onClick={() => window.location.reload()} 
        className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary-hover transition-colors"
      >
        Refresh Page
      </button>
      <button 
        onClick={resetError} 
        className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg hover:bg-secondary/80 transition-colors ml-4"
      >
        Try Again
      </button>
      <details className="mt-4 text-sm text-muted-foreground">
        <summary className="cursor-pointer">Error Details</summary>
        <pre className="mt-2 p-4 bg-muted rounded text-left overflow-auto">
          {error instanceof Error ? error.message : String(error)}
        </pre>
      </details>
    </div>
  </div>
);

export default App;
