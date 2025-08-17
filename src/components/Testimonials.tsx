import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "Google",
    location: "Bangalore",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "The AI suggestions were incredible! Got 3x more interview calls after using this platform. The multi-language support helped me create resumes in Hindi and English.",
    achievement: "Got job at Google",
    beforeAfter: "Went from 2 to 8 interview calls per month"
  },
  {
    name: "Rahul Gupta",
    role: "Marketing Manager",
    company: "Flipkart",
    location: "Mumbai",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "The portfolio website feature is a game-changer! Recruiters loved my professional site. The ATS optimization really works - my resume now passes all screening systems.",
    achievement: "40% salary increase",
    beforeAfter: "From 6 LPA to 10 LPA package"
  },
  {
    name: "Sneha Patel",
    role: "Data Scientist",
    company: "Microsoft",
    location: "Hyderabad",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "As a fresher, I was struggling to showcase my projects. This platform created a stunning portfolio that highlighted my work perfectly. Landed my dream job in 3 weeks!",
    achievement: "Fresher to Microsoft",
    beforeAfter: "From 0 offers to dream job"
  },
  {
    name: "Amit Kumar",
    role: "Product Manager",
    company: "Zomato",
    location: "Delhi",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "The job readiness score feature helped me identify weak areas in my profile. After optimization, my LinkedIn profile views increased by 300%. Highly recommend!",
    achievement: "Senior PM role",
    beforeAfter: "300% more profile views"
  },
  {
    name: "Kavya Reddy",
    role: "UX Designer",
    company: "Paytm",
    location: "Noida",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "The design templates are gorgeous! As a designer, I'm very picky about aesthetics. This tool creates professional resumes that actually look good. Love the customization options.",
    achievement: "Design lead position",
    beforeAfter: "From junior to lead role"
  },
  {
    name: "Ravi Singh",
    role: "Sales Director",
    company: "Byju's",
    location: "Pune",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "Used this for my team of 15 sales executives. The bulk processing and analytics features saved us hours. Everyone saw improvement in their interview conversion rates.",
    achievement: "Team success",
    beforeAfter: "85% of team got better offers"
  }
];

const stats = [
  { value: "50,000+", label: "Success Stories" },
  { value: "2.5x", label: "More Interviews" },
  { value: "90%", label: "ATS Pass Rate" },
  { value: "4.9/5", label: "User Rating" }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Success Stories
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Loved by 50,000+ Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands who transformed their careers with AI-powered resumes 
            and portfolios. Real stories from real professionals across India.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="card-feature p-6 h-full">
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-sm mb-6 leading-relaxed">"{testimonial.text}"</p>
                
                {/* Achievement Badge */}
                <div className="mb-4">
                  <Badge variant="outline" className="text-xs">
                    ✨ {testimonial.achievement}
                  </Badge>
                </div>
                
                {/* Before/After */}
                <div className="bg-muted/50 rounded-lg p-3 mb-6">
                  <div className="text-xs font-medium text-primary mb-1">Result:</div>
                  <div className="text-xs text-muted-foreground">{testimonial.beforeAfter}</div>
                </div>
                
                {/* User Info */}
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <div className="bg-background/80 backdrop-blur rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">+50,000 more</div>
            </div>
            <p className="font-medium mb-2">Join the success community</p>
            <p className="text-sm text-muted-foreground">
              New success story added every day across all major companies in India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;