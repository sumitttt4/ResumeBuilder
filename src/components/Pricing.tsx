import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap } from "lucide-react";
import { useState } from "react";

const monthlyPlans = [
  {
    name: "Free",
    price: "₹0",
    period: "Forever",
    description: "Perfect for getting started with basic resume building",
    features: [
      "3 resume downloads per month",
      "5 basic templates",
      "Basic AI suggestions",
      "PDF export",
      "Job readiness score",
      "Mobile responsive"
    ],
    limitations: [
      "Watermark on resumes",
      "Limited template customization"
    ],
    cta: "Get Started Free",
    popular: false,
    variant: "outline" as const
  },
  {
    name: "Professional",
    price: "₹299",
    period: "per month",
    description: "Most popular choice for job seekers and professionals",
    features: [
      "Unlimited resume downloads",
      "50+ premium templates",
      "Advanced AI-powered suggestions",
      "Multi-language support (20+ Indian languages)",
      "Portfolio website generator",
      "ATS optimization scanner",
      "LinkedIn profile optimizer",
      "Cover letter generator",
      "Priority support",
      "No watermarks"
    ],
    cta: "Start 7-Day Free Trial",
    popular: true,
    variant: "default" as const
  },
  {
    name: "Enterprise",
    price: "₹999",
    period: "per month",
    description: "For teams, recruiters, and career coaches",
    features: [
      "Everything in Professional",
      "Team collaboration tools",
      "Bulk resume processing",
      "Advanced analytics dashboard",
      "White-label solution",
      "API access",
      "Custom branding",
      "Dedicated account manager",
      "Training & onboarding",
      "SLA support"
    ],
    cta: "Contact Sales",
    popular: false,
    variant: "outline" as const
  }
];

const yearlyPlans = [
  {
    name: "Free",
    price: "₹0",
    period: "Forever",
    description: "Perfect for getting started with basic resume building",
    features: [
      "3 resume downloads per month",
      "5 basic templates",
      "Basic AI suggestions",
      "PDF export",
      "Job readiness score",
      "Mobile responsive"
    ],
    limitations: [
      "Watermark on resumes",
      "Limited template customization"
    ],
    cta: "Get Started Free",
    popular: false,
    variant: "outline" as const
  },
  {
    name: "Professional",
    price: "₹2,999",
    period: "per year",
    description: "Most popular choice for job seekers and professionals",
    features: [
      "Unlimited resume downloads",
      "50+ premium templates",
      "Advanced AI-powered suggestions",
      "Multi-language support (20+ Indian languages)",
      "Portfolio website generator",
      "ATS optimization scanner",
      "LinkedIn profile optimizer",
      "Cover letter generator",
      "Priority support",
      "No watermarks"
    ],
    cta: "Start 7-Day Free Trial",
    popular: true,
    variant: "default" as const
  },
  {
    name: "Enterprise",
    price: "₹9,999",
    period: "per year",
    description: "For teams, recruiters, and career coaches",
    features: [
      "Everything in Professional",
      "Team collaboration tools",
      "Bulk resume processing",
      "Advanced analytics dashboard",
      "White-label solution",
      "API access",
      "Custom branding",
      "Dedicated account manager",
      "Training & onboarding",
      "SLA support"
    ],
    cta: "Contact Sales",
    popular: false,
    variant: "outline" as const
  }
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const currentPlans = isYearly ? yearlyPlans : monthlyPlans;

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Flexible Pricing
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and upgrade as you grow. All plans include our core features 
            with no hidden fees.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted p-1 rounded-full">
            <Button 
              variant={!isYearly ? "default" : "ghost"} 
              size="sm" 
              className="rounded-full px-6"
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </Button>
            <Button 
              variant={isYearly ? "default" : "ghost"} 
              size="sm" 
              className="rounded-full px-6"
              onClick={() => setIsYearly(true)}
            >
              Yearly <Badge variant="secondary" className="ml-2">Save 20%</Badge>
            </Button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentPlans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative p-8 ${plan.popular ? 'card-neumorphic border-primary/20' : 'card-feature'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="px-4 py-1 bg-primary text-primary-foreground">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    What's included:
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {plan.limitations && (
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold mb-2 text-muted-foreground text-sm">
                      Limitations:
                    </h4>
                    <ul className="space-y-1">
                      {plan.limitations.map((limitation) => (
                        <li key={limitation} className="text-xs text-muted-foreground">
                          • {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Button 
                className="w-full" 
                variant={plan.variant}
                size="lg"
              >
                {plan.cta}
              </Button>
              
              {plan.name === "Professional" && (
                <p className="text-xs text-center text-muted-foreground mt-3">
                  No credit card required • Cancel anytime
                </p>
              )}
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by 50,000+ professionals across India
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-xs">256-bit SSL Secure</div>
            <div className="text-xs">GDPR Compliant</div>
            <div className="text-xs">99.9% Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;