// Error reporting and monitoring utilities
interface ErrorReport {
  message: string;
  stack?: string;
  url: string;
  userAgent: string;
  timestamp: number;
  userId?: string;
}

export const reportError = (error: Error, context?: any) => {
  const errorReport: ErrorReport = {
    message: error.message,
    stack: error.stack,
    url: window.location.href,
    userAgent: navigator.userAgent,
    timestamp: Date.now(),
    ...context
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error Report:', errorReport);
  }

  // Send to analytics if available
  if (window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false
    });
  }

  // Could integrate with Sentry or other error reporting services here
  // Example: Sentry.captureException(error, { extra: context });
};

export const handleAsyncError = (promise: Promise<any>, context?: any) => {
  promise.catch(error => {
    reportError(error, context);
  });
};

// Global error handler
export const setupGlobalErrorHandling = () => {
  window.addEventListener('error', (event) => {
    reportError(new Error(event.message), {
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    reportError(new Error(event.reason), {
      type: 'unhandledrejection'
    });
  });
};