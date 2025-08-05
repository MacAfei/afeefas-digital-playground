import { ExternalLink, Github, Play, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "AI Receptionist System",
      description: "An intelligent virtual receptionist powered by natural language processing and machine learning algorithms. Handles customer inquiries, appointment scheduling, and provides personalized assistance.",
      tags: ["Python", "NLP", "TensorFlow", "AI"],
      type: "AI/ML",
      status: "In Development",
      icon: Zap,
      gradient: "from-primary to-gaming-primary"
    },
    {
      title: "UCS Project - TinkerHub",
      description: "A collaborative community-driven project focused on solving real-world problems through innovative technology solutions. Building tools that empower developers and creators.",
      tags: ["Community", "Open Source", "Innovation", "Collaboration"],
      type: "Community",
      status: "Active",
      icon: Play,
      gradient: "from-secondary to-gaming-secondary"
    },
    {
      title: "Echoes of Light",
      description: "An immersive 2D adventure game built with Scratch, featuring compelling storytelling, pixel art graphics, and engaging gameplay mechanics. A journey through light and shadow.",
      tags: ["Scratch", "Game Design", "Storytelling", "Pixel Art"],
      type: "Game",
      status: "Published",
      icon: Play,
      gradient: "from-accent to-gaming-accent"
    }
  ];

  const experiments = [
    "Neural Network Visualizer",
    "IoT Home Automation",
    "Trading Algorithm Prototype",
    "Comic Creation Tool",
    "Voice Assistant Plugin"
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Projects & <span className="text-gradient">Experiments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building the future, one line of code at a time
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant="outline" className="w-fit text-xs">
                    {project.type}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experiments Section */}
          <div className="pixel-border p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Current <span className="text-gradient">Experiments</span>
            </h3>
            <p className="text-muted-foreground text-center mb-8">
              Side projects and prototypes I'm tinkering with
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {experiments.map((experiment, index) => (
                <div 
                  key={index} 
                  className="bg-muted/20 p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-pulse" />
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">
                      {experiment}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to collaborate on something amazing?
            </p>
            <Button 
              size="lg" 
              className="btn-gaming glow-primary"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Build Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;