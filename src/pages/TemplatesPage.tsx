import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Star, Download, Eye, Search, Filter } from 'lucide-react';

const allTemplates = [
  {
    id: 1,
    name: 'Professional Executive',
    category: 'Executive',
    rating: 4.9,
    downloads: '15.2k',
    preview: '/api/placeholder/300/400',
    colors: ['Blue', 'Black', 'Gray'],
    featured: true,
    description: 'Perfect for senior-level positions and executive roles'
  },
  {
    id: 2,
    name: 'Creative Designer',
    category: 'Creative',
    rating: 4.8,
    downloads: '12.7k',
    preview: '/api/placeholder/300/400',
    colors: ['Purple', 'Teal', 'Pink'],
    featured: true,
    description: 'Ideal for designers, artists, and creative professionals'
  },
  {
    id: 3,
    name: 'Tech Developer',
    category: 'Technology',
    rating: 4.9,
    downloads: '18.5k',
    preview: '/api/placeholder/300/400',
    colors: ['Green', 'Blue', 'Orange'],
    featured: false,
    description: 'Optimized for software developers and IT professionals'
  },
  {
    id: 4,
    name: 'Modern Minimal',
    category: 'Minimal',
    rating: 4.7,
    downloads: '9.3k',
    preview: '/api/placeholder/300/400',
    colors: ['Black', 'White', 'Gray'],
    featured: false,
    description: 'Clean and simple design for any profession'
  },
  {
    id: 5,
    name: 'Indian Professional',
    category: 'India',
    rating: 4.8,
    downloads: '25.1k',
    preview: '/api/placeholder/300/400',
    colors: ['Saffron', 'Blue', 'Green'],
    featured: true,
    description: 'Tailored for Indian job market with local preferences'
  },
  {
    id: 6,
    name: 'Sales Professional',
    category: 'Sales',
    rating: 4.8,
    downloads: '11.9k',
    preview: '/api/placeholder/300/400',
    colors: ['Red', 'Blue', 'Gold'],
    featured: false,
    description: 'Perfect for sales representatives and account managers'
  },
  {
    id: 7,
    name: 'Academic Scholar',
    category: 'Academic',
    rating: 4.6,
    downloads: '7.8k',
    preview: '/api/placeholder/300/400',
    colors: ['Navy', 'Maroon', 'Gray'],
    featured: false,
    description: 'Designed for researchers, professors, and academic roles'
  },
  {
    id: 8,
    name: 'Healthcare Professional',
    category: 'Healthcare',
    rating: 4.7,
    downloads: '13.4k',
    preview: '/api/placeholder/300/400',
    colors: ['Teal', 'Blue', 'White'],
    featured: false,
    description: 'Specialized for doctors, nurses, and healthcare workers'
  },
  {
    id: 9,
    name: 'Finance Expert',
    category: 'Finance',
    rating: 4.8,
    downloads: '16.7k',
    preview: '/api/placeholder/300/400',
    colors: ['Dark Blue', 'Gold', 'Gray'],
    featured: true,
    description: 'Tailored for banking, finance, and accounting professionals'
  }
];

const TemplatesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['All', 'Executive', 'Creative', 'Technology', 'Sales', 'Academic', 'Minimal', 'India', 'Healthcare', 'Finance'];
  
  const filteredTemplates = allTemplates.filter(template => {
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getColorStyle = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: '#3B82F6',
      purple: '#8B5CF6',
      green: '#10B981',
      red: '#EF4444',
      black: '#1F2937',
      gray: '#6B7280',
      white: '#F9FAFB',
      navy: '#1E40AF',
      maroon: '#991B1B',
      gold: '#F59E0B',
      orange: '#F97316',
      pink: '#EC4899',
      teal: '#14B8A6',
      saffron: '#FF9933',
      'dark blue': '#1E3A8A'
    };
    return colorMap[color.toLowerCase()] || '#6B7280';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              50+ Professional Templates
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Choose Your Perfect Resume Template
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All templates are ATS-friendly, professionally designed, and optimized for different industries and career levels.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filter by:</span>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? 'default' : 'outline'}
                className="rounded-full"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredTemplates.map((template) => (
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
                    <p className="text-xs text-muted-foreground mt-1">{template.description}</p>
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
                        style={{ backgroundColor: getColorStyle(color) }}
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

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No templates found matching your criteria.</p>
            </div>
          )}

          <div className="text-center">
            <Link to="/">
              <Button variant="outline">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TemplatesPage;