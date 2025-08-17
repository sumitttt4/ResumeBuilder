import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-neumorphic max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground">
                Ready to Land Your 
                <span className="text-primary"> Dream Job?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join thousands of professionals who've successfully created standout resumes 
                and portfolios with our AI-powered platform.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 py-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-500"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-500"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-pink-500"></div>
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold">4.9/5</span>
                  </div>
                  <div className="text-muted-foreground">from 2,500+ reviews</div>
                </div>
              </div>
              
              <div className="h-8 w-px bg-border"></div>
              
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <div className="text-sm">
                  <div className="font-semibold">50,000+</div>
                  <div className="text-muted-foreground">active users</div>
                </div>
              </div>
              
              <div className="h-8 w-px bg-border"></div>
              
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <div className="text-sm">
                  <div className="font-semibold">98%</div>
                  <div className="text-muted-foreground">success rate</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold">
                Start Building Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold btn-neumorphic">
                View Sample Resumes
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              No credit card required • Free forever plan available • Export in seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;