import { Brain, Gamepad2, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const traits = [
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Passionate about artificial intelligence and machine learning, working on innovative AI receptionist projects and exploring the frontiers of technology."
    },
    {
      icon: Gamepad2,
      title: "Game Developer",
      description: "Creating immersive gaming experiences with Scratch 2D games like 'Echoes of Light'. Dreams of publishing original games and interactive comics."
    },
    {
      icon: Lightbulb,
      title: "Creative Innovator",
      description: "Combines technical skills with creative vision to build unique solutions. Always exploring new ideas and pushing the boundaries of what's possible."
    },
    {
      icon: Users,
      title: "Community Builder",
      description: "Active in TinkerHub with the UCS Project, believes in collaborative problem-solving and empowering others through technology."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A story of curiosity, creativity, and the endless pursuit of innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Personal Story */}
            <div className="space-y-6">
              <div className="pixel-border p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-foreground">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a B.Tech student in Artificial Intelligence and Data Science at Ilahiya College of Engineering and Technology, 
                    driven by an insatiable curiosity about the intersection of technology and creativity.
                  </p>
                  <p>
                    My world revolves around building intelligent systems, crafting engaging games, and exploring how AI can solve 
                    real-world problems. From developing AI receptionist systems to creating 2D games that tell compelling stories, 
                    I'm constantly pushing the boundaries of what's possible.
                  </p>
                  <p>
                    When I'm not coding, you'll find me strategizing in MOBA games, sketching ideas for my next comic, or 
                    analyzing market trends. I believe that the best innovations come from understanding both technology and 
                    human nature.
                  </p>
                  <p className="text-primary font-medium">
                    My goal? To build AI startups that make a meaningful impact, publish games that inspire, 
                    and contribute to research that pushes humanity forward.
                  </p>
                </div>
              </div>
            </div>

            {/* Traits Grid */}
            <div className="grid gap-6">
              {traits.map((trait, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <trait.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{trait.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {trait.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">5+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1+</div>
              <div className="text-muted-foreground">Years Learning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gaming-primary mb-2">∞</div>
              <div className="text-muted-foreground">Ideas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;