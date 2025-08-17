import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Languages, 
  Palette, 
  Download, 
  Eye, 
  TrendingUp, 
  Smartphone, 
  Shield,
  Zap,
  Globe2,
  Award,
  FileText
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Builder",
    description: "Smart suggestions and auto-completion help you create professional content effortlessly.",
    color: "text-blue-500"
  },
  {
    icon: Languages,
    title: "Multi-Language Support",
    description: "Create resumes in 20+ Indian languages plus English with native typography support.",
    color: "text-green-500"
  },
  {
    icon: Palette,
    title: "Portfolio Generator",
    description: "Transform your resume into a stunning personal website with one click.",
    color: "text-purple-500"
  },
  {
    icon: Shield,
    title: "ATS-Friendly",
    description: "Optimized templates that pass through Applicant Tracking Systems seamlessly.",
    color: "text-red-500"
  },
  {
    icon: Eye,
    title: "Live Preview",
    description: "See your changes in real-time with instant preview and editing capabilities.",
    color: "text-yellow-500"
  },
  {
    icon: TrendingUp,
    title: "Job Readiness Score",
    description: "Get personalized feedback and improve your chances of landing interviews.",
    color: "text-indigo-500"
  },
  {
    icon: Download,
    title: "One-Click Export",
    description: "Export to PDF, website, LinkedIn, or share directly with employers.",
    color: "text-teal-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Build and edit your resume on any device with our responsive design.",
    color: "text-orange-500"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
            Powerful Features for
            <span className="text-primary"> Modern Professionals</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create professional resumes and portfolios that stand out to employers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-feature group cursor-pointer">
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Stats Section */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">100+</div>
            <div className="text-muted-foreground">Templates</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Globe2 className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">20+</div>
            <div className="text-muted-foreground">Languages</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">98%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;