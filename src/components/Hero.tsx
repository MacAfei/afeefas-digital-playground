import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full float" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full float-delayed" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent rounded-full float" />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-gaming-primary rounded-full float-delayed" />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-sm">
              &lt;hello_world /&gt;
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-in-left">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-gradient">Afeefa Parvin</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-right">
            Fueling ideas with <span className="text-primary font-semibold">code</span>, 
            <span className="text-secondary font-semibold"> creativity</span>, and 
            <span className="text-accent font-semibold"> curiosity</span>
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            B.Tech AI & Data Science student at Ilahiya College of Engineering and Technology. 
            Building AI startups, crafting games, and exploring the infinite possibilities of technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button 
              size="lg" 
              className="btn-gaming glow-primary"
              onClick={scrollToAbout}
            >
              Explore My Journey
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="btn-gaming border-primary/30 hover:bg-primary/10"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <a 
              href="https://github.com/afeefa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/afeefa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://instagram.com/afeefa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gaming-primary transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;