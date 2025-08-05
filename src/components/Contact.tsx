import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/afeefa",
      color: "hover:text-foreground"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://linkedin.com/in/afeefa",
      color: "hover:text-secondary"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/afeefa",
      color: "hover:text-gaming-primary"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "afeefa.parvin@gmail.com",
      action: "mailto:afeefa.parvin@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kerala, India",
      action: null
    },
    {
      icon: MessageCircle,
      label: "Available for",
      value: "Collaborations & Opportunities",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate, discuss ideas, or just say hello? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">{info.label}</div>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pixel-border p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-4">Follow My Journey</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 text-muted-foreground ${social.color} transition-colors group`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Collaboration Invite */}
              <div className="bg-gradient-card border border-border/50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">Open to Collaborate</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Whether it's building AI solutions, creating games, contributing to open source, 
                  or discussing the latest in tech - I'm always excited to connect with fellow creators and innovators.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <h3 className="text-2xl font-bold">Send a Message</h3>
                  <p className="text-muted-foreground">
                    Have a project in mind or just want to chat? Drop me a line!
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What would you like to discuss?"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, idea, or just say hello!"
                        rows={6}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary/50 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full md:w-auto btn-gaming glow-primary"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;