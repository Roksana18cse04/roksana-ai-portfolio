import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "roksana.tech.2000@gmail.com",
      link: "mailto:roksana.tech.2000@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+8801975300123",
      link: "tel:+8801975300123"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Remote / Global",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/Roksana18cse04",
      color: "hover:text-ai-blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      link: "https://linkedin.com/in/roksana00mymensingh/",
      color: "hover:text-ai-blue"
    },
    {
      icon: Mail,
      label: "Email",
      link: "mailto:roksana.tech.2000@gmail.com",
      color: "hover:text-ai-purple"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next AI/ML project? Let's connect and explore how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="transition-smooth focus:shadow-glow"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="transition-smooth focus:shadow-glow"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="transition-smooth focus:shadow-glow"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="transition-smooth focus:shadow-glow"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full gradient-primary text-white hover:shadow-glow transition-bounce"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{info.label}</div>
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-ai-blue transition-smooth"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className={`transition-smooth ${social.color}`}
                      asChild
                    >
                      <a 
                        href={social.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-ai-green animate-pulse"></div>
                  <div>
                    <div className="font-semibold text-foreground">Available for Projects</div>
                    <div className="text-sm text-muted-foreground">
                      Currently accepting new AI/ML consulting opportunities
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold text-foreground mb-1">Quick Response</div>
                <div className="text-sm text-muted-foreground">
                  I typically respond within 24 hours
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;