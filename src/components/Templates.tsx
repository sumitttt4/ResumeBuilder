import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Eye } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Professional Executive",
    category: "Executive",
    rating: 4.9,
    downloads: "15.2k",
    preview: "/api/placeholder/300/400",
    colors: ["Blue", "Black", "Gray"],
    featured: true
  },
  {
    id: 2,
    name: "Creative Designer",
    category: "Creative",
    rating: 4.8,
    downloads: "12.7k",
    preview: "/api/placeholder/300/400",
    colors: ["Purple", "Teal", "Pink"],
    featured: true
  },
  {
    id: 3,
    name: "Tech Developer",
    category: "Technology",
    rating: 4.9,
    downloads: "18.5k",
    preview: "/api/placeholder/300/400",
    colors: ["Green", "Blue", "Orange"],
    featured: false
  },
  {
    id: 4,
    name: "Modern Minimal",
    category: "Minimal",
    rating: 4.7,
    downloads: "9.3k",
    preview: "/api/placeholder/300/400",
    colors: ["Black", "White", "Gray"],
    featured: false
  },
  {
    id: 5,
    name: "Sales Professional",
    category: "Sales",
    rating: 4.8,
    downloads: "11.9k",
    preview: "/api/placeholder/300/400",
    colors: ["Red", "Blue", "Gold"],
    featured: false
  },
  {
    id: 6,
    name: "Academic Scholar",
    category: "Academic",
    rating: 4.6,
    downloads: "7.8k",
    preview: "/api/placeholder/300/400",
    colors: ["Navy", "Maroon", "Gray"],
    featured: false
  },
  {
    id: 7,
    name: "Indian Professional",
    category: "India",
    rating: 4.8,
    downloads: "25.1k",
    preview: "/api/placeholder/300/400",
    colors: ["Saffron", "Blue", "Green"],
    featured: true
  }
];

const Templates = () => {
  return (
    <section id="templates" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            ATS-Optimized Templates
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Professional Resume Templates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from 50+ professionally designed, ATS-friendly templates. 
            Each template is optimized for different industries and career levels.
          </p>
        </div>

        {/* Template Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Executive", "Creative", "Technology", "Sales", "Academic", "Minimal", "India"].map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {templates.map((template) => (
            <Card key={template.id} className="card-feature group cursor-pointer">
              <div className="relative mb-4">
                <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg mb-2 mx-auto flex items-center justify-center">
                      <Eye className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Preview</p>
                  </div>
                </div>
                {template.featured && (
                  <Badge className="absolute top-3 left-3">Featured</Badge>
                )}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-all duration-300" />
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">{template.category}</p>
                </div>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{template.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span>{template.downloads}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {template.colors.map((color) => (
                    <div
                      key={color}
                      className="w-6 h-6 rounded-full border-2 border-background"
                      style={{
                        backgroundColor: color.toLowerCase() === 'blue' ? '#3B82F6' :
                                       color.toLowerCase() === 'purple' ? '#8B5CF6' :
                                       color.toLowerCase() === 'green' ? '#10B981' :
                                       color.toLowerCase() === 'red' ? '#EF4444' :
                                       color.toLowerCase() === 'black' ? '#1F2937' :
                                       color.toLowerCase() === 'gray' ? '#6B7280' :
                                       color.toLowerCase() === 'white' ? '#F9FAFB' :
                                       color.toLowerCase() === 'navy' ? '#1E40AF' :
                                       color.toLowerCase() === 'maroon' ? '#991B1B' :
                                       color.toLowerCase() === 'gold' ? '#F59E0B' :
                        color.toLowerCase() === 'orange' ? '#F97316' :
                                        color.toLowerCase() === 'pink' ? '#EC4899' :
                                        color.toLowerCase() === 'teal' ? '#14B8A6' :
                                        color.toLowerCase() === 'saffron' ? '#FF9933' : '#6B7280'
                      }}
                    />
                  ))}
                </div>
                
                <Link to={`/resume/sample?template=${template.id}&name=${encodeURIComponent(template.name)}`}>
                  <Button className="w-full" variant="outline">
                    Use This Template
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/templates">
            <Button size="lg" className="btn-neumorphic">
              View All 50+ Templates
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Templates;