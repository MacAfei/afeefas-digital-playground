import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building My First AI Receptionist: Lessons Learned",
      excerpt: "Diving deep into natural language processing and the challenges of creating truly conversational AI. What I discovered about human-computer interaction along the way.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Tech",
      featured: true
    },
    {
      title: "The Art of Pixel Perfect: Game Design Insights",
      excerpt: "How 'Echoes of Light' taught me about storytelling through game mechanics and the importance of every pixel in creating immersive experiences.",
      date: "2024-01-10",
      readTime: "4 min read",
      category: "Game Dev",
      featured: false
    },
    {
      title: "From MOBA Strategies to Real-World Problem Solving",
      excerpt: "What competitive gaming taught me about teamwork, strategic thinking, and applying game theory to technology challenges.",
      date: "2024-01-05",
      readTime: "3 min read",
      category: "Thoughts",
      featured: false
    },
    {
      title: "Community-Driven Innovation: My TinkerHub Journey",
      excerpt: "Reflections on collaborative development and how community projects like UCS are shaping the future of open-source innovation.",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Community",
      featured: true
    }
  ];

  const topics = [
    "AI & Machine Learning",
    "Game Development", 
    "Creative Coding",
    "Trading Insights",
    "Tech Trends",
    "Student Life"
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Creative <span className="text-gradient">Corner</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thoughts, insights, and discoveries from my journey through code and creativity
            </p>
          </div>

          {/* Featured & Recent Posts */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Featured Post */}
            <div className="lg:col-span-2">
              <div className="pixel-border p-8 rounded-xl h-full">
                <Badge className="mb-4">Featured Post</Badge>
                <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                  {blogPosts[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Recent Posts Sidebar */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg mb-4">Recent Posts</h4>
              {blogPosts.slice(1).map((post, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {post.category}
                    </Badge>
                    <h5 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h5>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Topics & Newsletter */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Topics I Write About */}
            <div className="bg-gradient-card border border-border/50 rounded-xl p-6">
              <h4 className="font-bold text-lg mb-4">Topics I Explore</h4>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-muted/30 border border-border/30 rounded-full text-sm hover:border-primary/30 transition-colors cursor-pointer"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-card border border-border/50 rounded-xl p-6">
              <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Get notified when I publish new insights about AI, game development, and the intersection of technology and creativity.
              </p>
              <Button className="w-full btn-gaming">
                Subscribe to Updates
              </Button>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Have a topic you'd like me to explore or discuss?
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="btn-gaming border-primary/30 hover:bg-primary/10"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Suggest a Topic
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;