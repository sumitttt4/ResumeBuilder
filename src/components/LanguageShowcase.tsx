import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Languages, Users } from "lucide-react";

const languages = [
  { name: "English", native: "English", users: "45M+", flag: "🇺🇸" },
  { name: "Hindi", native: "हिंदी", users: "38M+", flag: "🇮🇳" },
  { name: "Bengali", native: "বাংলা", users: "12M+", flag: "🇧🇩" },
  { name: "Telugu", native: "తెలుగు", users: "8M+", flag: "🇮🇳" },
  { name: "Marathi", native: "मराठी", users: "7M+", flag: "🇮🇳" },
  { name: "Tamil", native: "தமிழ்", users: "6M+", flag: "🇮🇳" },
  { name: "Gujarati", native: "ગુજરાતી", users: "5M+", flag: "🇮🇳" },
  { name: "Urdu", native: "اردو", users: "4M+", flag: "🇵🇰" },
  { name: "Kannada", native: "ಕನ್ನಡ", users: "4M+", flag: "🇮🇳" },
  { name: "Odia", native: "ଓଡ଼ିଆ", users: "3M+", flag: "🇮🇳" },
  { name: "Malayalam", native: "മലയാളം", users: "3M+", flag: "🇮🇳" },
  { name: "Punjabi", native: "ਪੰਜਾਬੀ", users: "2M+", flag: "🇮🇳" }
];

const features = [
  {
    icon: Globe,
    title: "Native Language Support",
    description: "Create resumes in your mother tongue with proper formatting and cultural context"
  },
  {
    icon: Languages,
    title: "Smart Translation",
    description: "AI-powered translation that maintains professional tone and industry terminology"
  },
  {
    icon: Users,
    title: "Cultural Adaptation",
    description: "Templates and content suggestions adapted for different regional preferences"
  }
];

const LanguageShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Multi-Language Support
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Create Resumes in 20+ Indian Languages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Break language barriers and reach employers in your preferred language. 
            Our AI understands regional nuances and cultural context.
          </p>
        </div>

        {/* Language Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {languages.map((language) => (
            <Card key={language.name} className="card-feature p-4 text-center cursor-pointer hover:scale-105 transition-transform">
              <div className="text-2xl mb-2">{language.flag}</div>
              <h3 className="font-semibold text-sm mb-1">{language.name}</h3>
              <p className="text-lg font-medium mb-2" style={{
                fontFamily: language.name === 'Hindi' ? 'Devanagari, sans-serif' :
                           language.name === 'Bengali' ? 'Bengali, sans-serif' :
                           language.name === 'Telugu' ? 'Telugu, sans-serif' :
                           language.name === 'Tamil' ? 'Tamil, sans-serif' :
                           language.name === 'Gujarati' ? 'Gujarati, sans-serif' :
                           language.name === 'Kannada' ? 'Kannada, sans-serif' :
                           language.name === 'Malayalam' ? 'Malayalam, sans-serif' :
                           language.name === 'Punjabi' ? 'Punjabi, sans-serif' :
                           language.name === 'Odia' ? 'Odia, sans-serif' :
                           language.name === 'Marathi' ? 'Devanagari, sans-serif' :
                           language.name === 'Urdu' ? 'Urdu, sans-serif' : 'inherit'
              }}>
                {language.native}
              </p>
              <Badge variant="outline" className="text-xs">
                {language.users} speakers
              </Badge>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Demo Section */}
        <Card className="card-neumorphic p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                See Language Magic in Action
              </h3>
              <p className="text-muted-foreground mb-6">
                Watch how our AI creates professional content in multiple languages 
                while maintaining industry standards and cultural appropriateness.
              </p>
              <Button size="lg" className="btn-neumorphic mb-4">
                Try Language Demo
              </Button>
              <p className="text-xs text-muted-foreground">
                Switch between languages instantly • No additional cost
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="text-sm font-medium mb-2">English</div>
                <div className="text-xs text-muted-foreground">
                  "Experienced Software Engineer with 5+ years in full-stack development..."
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="text-sm font-medium mb-2">हिंदी (Hindi)</div>
                <div className="text-xs text-muted-foreground">
                  "5+ वर्षों के अनुभव के साथ अनुभवी सॉफ्टवेयर इंजीनियर, फुल-स्टैक डेवलपमेंट में विशेषज्ञता..."
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="text-sm font-medium mb-2">తెలుగు (Telugu)</div>
                <div className="text-xs text-muted-foreground">
                  "5+ సంవత్సరాల అనుభవంతో అనుభవజ్ఞుడైన సాఫ్ట్‌వేర్ ఇంజనీర్, ఫుల్-స్టాక్ డెవలప్‌మెంట్‌లో నైపుణ్యం..."
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="text-center mt-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Languages Supported</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Translation Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2.5M+</div>
              <div className="text-sm text-muted-foreground">Multi-language Resumes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Language Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageShowcase;