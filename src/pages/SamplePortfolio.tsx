import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Code,
  Palette,
  Monitor,
  Star
} from 'lucide-react';

const SamplePortfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-6xl text-white font-bold">
            AK
          </div>
          <h1 className="text-5xl font-bold mb-4">Arjun Kumar</h1>
          <p className="text-xl text-muted-foreground mb-6">Full Stack Developer & UI/UX Designer</p>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Passionate about creating beautiful, functional digital experiences. 
            5+ years of experience in modern web technologies and design.
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button size="lg">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Resume
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="sm">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-muted-foreground mb-6">
                I'm a passionate full-stack developer with a keen eye for design. I love creating 
                digital experiences that are not only functional but also beautiful and intuitive.
              </p>
              <p className="text-muted-foreground mb-6">
                With expertise in modern frameworks like React, Node.js, and cloud technologies, 
                I bring ideas to life through code and design.
              </p>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Mumbai, India
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 98765 43210
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Code className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Frontend Development</h3>
                  <p className="text-sm text-muted-foreground">React, TypeScript, Tailwind CSS</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Monitor className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Backend Development</h3>
                  <p className="text-sm text-muted-foreground">Node.js, Python, PostgreSQL</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Palette className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">UI/UX Design</h3>
                  <p className="text-sm text-muted-foreground">Figma, Adobe Creative Suite</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="card-feature group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <Monitor className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Project Screenshot</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                  </div>
                  
                  <h3 className="font-semibold text-lg">E-Commerce Platform</h3>
                  <p className="text-sm text-muted-foreground">
                    A full-featured e-commerce solution with modern UI/UX and secure payment integration.
                  </p>
                  
                  <div className="flex justify-between items-center pt-2">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>4.8</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground">Technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 text-center">
              <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 text-center">
              <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-4">Design</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Framer'].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg">
              <ExternalLink className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      <div className="py-8 text-center">
        <Link to="/">
          <Button variant="outline">
            Back to Home
          </Button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default SamplePortfolio;