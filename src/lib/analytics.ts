import { hasAnalyticsConsent } from '@/components/CookieConsent';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GA_ID = 'G-MEASUREMENT_ID'; // Replace with actual GA4 Measurement ID

export const initializeAnalytics = () => {
  if (!hasAnalyticsConsent()) return;

  // Load gtag script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(...args: any[]) {
    window.dataLayer.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    consent_mode: 'default',
    analytics_storage: 'granted'
  });
};

export const trackEvent = (eventName: string, parameters?: any) => {
  if (!hasAnalyticsConsent() || !window.gtag) return;
  
  window.gtag('event', eventName, parameters);
};

export const trackPageView = (path: string) => {
  if (!hasAnalyticsConsent() || !window.gtag) return;
  
  window.gtag('config', GA_ID, {
    page_path: path
  });
};