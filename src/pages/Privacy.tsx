import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-2">Personal Information</h3>
            <p>When you use our Resume Builder, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email address and login credentials</li>
              <li>Profile information (name, professional details)</li>
              <li>Resume content and work history</li>
              <li>Payment information (processed securely by third parties)</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 mt-6">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device information and browser type</li>
              <li>IP address and location data</li>
              <li>Usage patterns and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our resume building services</li>
              <li>Process your account registration and authentication</li>
              <li>Generate AI-powered content and suggestions</li>
              <li>Communicate with you about your account and our services</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information in the following situations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Third-party services that help us operate our platform</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              <li><strong>Consent:</strong> When you explicitly authorize sharing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication systems</li>
              <li>Secure hosting infrastructure</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintain your login session</li>
              <li>Remember your preferences</li>
              <li>Analyze website usage and performance</li>
              <li>Provide personalized experiences</li>
            </ul>
            <p className="mt-4">
              You can control cookie settings through your browser, but some features may not work properly if cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us through our support system or email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            <p>
              We retain your information only as long as necessary to provide our services or as required by law. When you delete your account, we will remove your personal information within a reasonable timeframe, except where retention is required for legal or business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
            <p>
              Your information may be processed and stored in countries other than your own. We ensure appropriate safeguards are in place to protect your information during international transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p>
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we discover that we have collected information from a child under 13, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by email or through our service. Your continued use of our service after such changes constitutes acceptance of the new Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us through:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Our support system within the application</li>
              <li>Email: privacy@resumebuilder.com</li>
              <li>Mailing address: [Your company address]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. GDPR Compliance (EU Users)</h2>
            <p>
              If you are located in the European Union, we comply with the General Data Protection Regulation (GDPR). Our legal basis for processing your information includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Consent for optional features and communications</li>
              <li>Contract performance for core services</li>
              <li>Legitimate interests for service improvement and security</li>
              <li>Legal obligations where required by law</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;