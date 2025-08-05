import { Code, Database, Smartphone, Brain, Globe, GamepadIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 85, color: "primary" },
        { name: "C", level: 75, color: "secondary" },
        { name: "JavaScript", level: 70, color: "accent" },
        { name: "HTML/CSS", level: 80, color: "gaming-primary" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "TensorFlow", level: 65, color: "primary" },
        { name: "Data Science", level: 70, color: "secondary" },
        { name: "Neural Networks", level: 60, color: "accent" },
        { name: "NLP", level: 55, color: "gaming-primary" }
      ]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React", level: 75, color: "primary" },
        { name: "Tailwind CSS", level: 80, color: "secondary" },
        { name: "TypeScript", level: 65, color: "accent" },
        { name: "UI/UX Design", level: 70, color: "gaming-primary" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Database,
      skills: [
        { name: "Git/GitHub", level: 80, color: "primary" },
        { name: "VS Code", level: 90, color: "secondary" },
        { name: "Linux", level: 65, color: "accent" },
        { name: "IoT Basics", level: 55, color: "gaming-primary" }
      ]
    },
    {
      title: "Game Development",
      icon: GamepadIcon,
      skills: [
        { name: "Scratch", level: 85, color: "primary" },
        { name: "Game Design", level: 75, color: "secondary" },
        { name: "Pixel Art", level: 60, color: "accent" },
        { name: "Storytelling", level: 80, color: "gaming-primary" }
      ]
    },
    {
      title: "Soft Skills",
      icon: Smartphone,
      skills: [
        { name: "Problem Solving", level: 90, color: "primary" },
        { name: "Team Collaboration", level: 85, color: "secondary" },
        { name: "Research", level: 75, color: "accent" },
        { name: "Communication", level: 80, color: "gaming-primary" }
      ]
    }
  ];

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      primary: "bg-primary",
      secondary: "bg-secondary", 
      accent: "bg-accent",
      "gaming-primary": "bg-gaming-primary"
    };
    return colorMap[color] || "bg-primary";
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="text-gradient">Tools</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My growing toolkit for building the future
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">{category.title}</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2" 
                        />
                        <div 
                          className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ${getColorClass(skill.color)}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Learning Journey */}
          <div className="mt-16 pixel-border p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              Always <span className="text-gradient">Learning</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. Currently exploring advanced deep learning, 
              cloud computing, and the latest in game development frameworks.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["PyTorch", "AWS", "Unity", "Blender", "React Native", "Blockchain"].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-muted/20 border border-border/30 rounded-full text-sm font-medium hover:border-primary/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;