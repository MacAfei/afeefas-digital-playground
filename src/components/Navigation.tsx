import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, User, Folder, Wrench, PenTool, Mail, Zap } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', icon: Code, route: '/' },
    { label: 'About', href: '#about', icon: User, route: '/' },
    { label: 'Projects', href: '#projects', icon: Folder, route: '/' },
    { label: 'Skills', href: '#skills', icon: Wrench, route: '/' },
    { label: 'Blog', href: '#blog', icon: PenTool, route: '/' },
    { label: 'Contact', href: '#contact', icon: Mail, route: '/' },
  ];

  const scrollToSection = (href: string, route: string) => {
    if (location.pathname !== route) {
      navigate(route);
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const goToArena = () => {
    navigate('/arena');
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-card/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-gaming-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-mono font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-lg">Afeefa</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                onClick={() => scrollToSection(item.href, item.route)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </Button>
            ))}
            <Button
              onClick={goToArena}
              className="ml-2 bg-gradient-to-r from-destructive to-primary hover:from-destructive/90 hover:to-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
            >
              <Zap className="w-4 h-4 mr-2" />
              ARENA
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href, item.route)}
                  className="justify-start text-muted-foreground hover:text-foreground"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              ))}
              <Button
                onClick={goToArena}
                className="justify-start bg-gradient-to-r from-destructive to-primary hover:from-destructive/90 hover:to-primary/90 text-primary-foreground"
              >
                <Zap className="w-4 h-4 mr-2" />
                ARENA
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;