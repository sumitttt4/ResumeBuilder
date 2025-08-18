// App configuration - Update these values for production
export const appConfig = {
  // Google Analytics 4 Measurement ID
  ga4MeasurementId: 'G-MEASUREMENT_ID', // Replace with actual GA4 ID
  
  // Sentry DSN for error monitoring  
  sentryDsn: '', // Add Sentry DSN here for error monitoring
  
  // App metadata
  appName: 'AI Resume Builder',
  appDescription: 'Create professional resumes with AI assistance',
  version: '1.0.0'
} as const;