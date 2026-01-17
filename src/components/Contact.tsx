import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Zap, Terminal, Radio, Cpu } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, validateEmail, type ContactFormData } from "@/utils/emailService";
import { motion } from "framer-motion";

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
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await sendContactEmail(formData as ContactFormData);
      
      if (success) {
        toast({
          title: "Message Transmitted! ⚡",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Transmission Failed",
        description: "Something went wrong. Please try again or contact me directly at roksana18cse04@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "roksana18cse04@gmail.com",
      link: "mailto:roksana18cse04@gmail.com",
      color: "cyber-cyan"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+8801975300123",
      link: "tel:+8801975300123",
      color: "cyber-purple"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Remote / Global",
      link: "#",
      color: "cyber-pink"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/Roksana18cse04",
      color: "cyber-cyan"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      link: "https://linkedin.com/in/roksana00mymensingh/",
      color: "cyber-blue"
    },
    {
      icon: Mail,
      label: "Email",
      link: "mailto:roksana18cse04@gmail.com",
      color: "cyber-purple"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-dark to-background" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--cyber-purple) / 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, hsl(var(--cyber-cyan) / 0.3) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 mb-6">
            <Terminal className="w-4 h-4 text-cyber-cyan" />
            <span className="text-cyber-cyan text-sm font-mono">initiate.connection()</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next AI/ML project? Let's connect and explore how we can work together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-effect border-cyber-cyan/20 hover:border-cyber-cyan/40 transition-all duration-500 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple" />
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyber-cyan/20 border border-cyber-cyan/30 flex items-center justify-center">
                    <Send className="w-5 h-5 text-cyber-cyan" />
                  </div>
                  <span className="bg-gradient-to-r from-cyber-cyan to-cyber-blue bg-clip-text text-transparent">
                    Send a Message
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-cyber-cyan font-mono text-sm">// Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-surface-dark/50 border-cyber-cyan/30 text-foreground placeholder:text-muted-foreground focus:border-cyber-cyan focus:ring-cyber-cyan/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-cyber-cyan font-mono text-sm">// Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-surface-dark/50 border-cyber-cyan/30 text-foreground placeholder:text-muted-foreground focus:border-cyber-cyan focus:ring-cyber-cyan/20 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-cyber-purple font-mono text-sm">// Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-surface-dark/50 border-cyber-purple/30 text-foreground placeholder:text-muted-foreground focus:border-cyber-purple focus:ring-cyber-purple/20 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-cyber-pink font-mono text-sm">// Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or idea..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-surface-dark/50 border-cyber-pink/30 text-foreground placeholder:text-muted-foreground focus:border-cyber-pink focus:ring-cyber-pink/20 transition-all resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple text-white font-semibold py-6 hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] transition-all duration-300 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Zap className="w-4 h-4 group-hover:animate-pulse" />
                        Transmit Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Details */}
            <Card className="glass-effect border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-500 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-orange" />
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyber-purple/20 border border-cyber-purple/30 flex items-center justify-center">
                    <Radio className="w-5 h-5 text-cyber-purple" />
                  </div>
                  <span className="bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">
                    Contact Information
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-4 p-3 rounded-lg bg-surface-dark/50 border border-white/5 hover:border-white/10 transition-all group"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-${info.color}/20 border border-${info.color}/30 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,245,255,0.2)] transition-all`}>
                      <info.icon className={`w-5 h-5 text-${info.color}`} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{info.label}</div>
                      <a 
                        href={info.link}
                        className={`text-muted-foreground hover:text-${info.color} transition-colors font-mono text-sm`}
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-effect border-cyber-blue/20 hover:border-cyber-blue/40 transition-all duration-500 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-green" />
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyber-blue/20 border border-cyber-blue/30 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-cyber-blue" />
                  </div>
                  <span className="bg-gradient-to-r from-cyber-blue to-cyber-cyan bg-clip-text text-transparent">
                    Connect With Me
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        className={`border-${social.color}/30 bg-${social.color}/10 hover:bg-${social.color}/20 hover:border-${social.color}/50 transition-all hover:shadow-[0_0_20px_rgba(0,245,255,0.2)]`}
                        asChild
                      >
                        <a 
                          href={social.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={social.label}
                        >
                          <social.icon className={`w-5 h-5 text-${social.color}`} />
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="glass-effect border-cyber-green/20 hover:border-cyber-green/40 transition-all duration-500 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-cyber-green to-cyber-cyan" />
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-cyber-green animate-pulse" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-cyber-green animate-ping opacity-50" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground flex items-center gap-2">
                      <span className="text-cyber-green">●</span> Available for Projects
                    </div>
                    <div className="text-sm text-muted-foreground font-mono">
                      // Currently accepting new AI/ML opportunities
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="glass-effect border-cyber-orange/20 hover:border-cyber-orange/40 transition-all duration-500 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-cyber-orange to-cyber-pink" />
              <CardContent className="p-6 text-center">
                <Zap className="w-8 h-8 text-cyber-orange mx-auto mb-3 animate-pulse" />
                <div className="font-semibold text-foreground mb-1">Quick Response</div>
                <div className="text-sm text-muted-foreground font-mono">
                  // Average response time: {"<"} 24 hours
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;