import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-gaming-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-mono font-bold text-sm">A</span>
                </div>
                <span className="font-bold text-lg">Afeefa Parvin</span>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                Building the future with AI, creativity, and endless curiosity. 
                One line of code at a time.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Blog', href: '#blog' },
                  { label: 'Contact', href: '#contact' }
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Current Focus */}
            <div className="space-y-4">
              <h4 className="font-semibold">Currently</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Building AI solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span>Learning advanced ML</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  <span>Crafting new games</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>© {currentYear} Afeefa Parvin Ashruf.</span>
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>and</span>
                <Code className="w-4 h-4 text-primary" />
              </div>
              
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span>Made with React, TypeScript & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;