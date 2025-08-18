import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Cookie, X } from 'lucide-react';

const CONSENT_KEY = 'cookie-consent';
const ANALYTICS_CONSENT_KEY = 'analytics-consent';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'true');
    localStorage.setItem(ANALYTICS_CONSENT_KEY, 'true');
    setShowBanner(false);
    
    // Initialize analytics after consent
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, 'true');
    localStorage.setItem(ANALYTICS_CONSENT_KEY, 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <Card className="mx-auto max-w-2xl border bg-card/95 backdrop-blur-sm shadow-2xl">
        <div className="flex items-start gap-4 p-6">
          <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-2">We use cookies</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We use cookies to enhance your experience and analyze site usage. 
              By clicking "Accept", you consent to our use of cookies for analytics.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleAccept} size="sm" className="bg-primary hover:bg-primary-hover">
                Accept All
              </Button>
              <Button onClick={handleReject} variant="outline" size="sm">
                Reject Non-Essential
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReject}
            className="h-8 w-8 p-0 flex-shrink-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export const hasAnalyticsConsent = (): boolean => {
  return localStorage.getItem(ANALYTICS_CONSENT_KEY) === 'true';
};