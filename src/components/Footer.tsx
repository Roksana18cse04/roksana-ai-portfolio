import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Zap, Terminal, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Roksana18cse04",
      label: "GitHub",
      color: "cyber-cyan"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/roksana00mymensingh/",
      label: "LinkedIn",
      color: "cyber-blue"
    },
    {
      icon: Mail,
      href: "mailto:roksana18cse04@gmail.com",
      label: "Email",
      color: "cyber-purple"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-cyber-cyan/20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-background to-background" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, hsl(var(--cyber-cyan) / 0.1) 40px, hsl(var(--cyber-cyan) / 0.1) 41px)`
        }} />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyber-cyan via-cyber-blue to-cyber-purple flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                Roksana.dev
              </h3>
            </div>
            <p className="text-muted-foreground font-mono text-sm">
              // AI/ML Engineer passionate about creating intelligent solutions 
              that make a difference in the world.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className={`border-${link.color}/30 bg-${link.color}/10 hover:bg-${link.color}/20 hover:border-${link.color}/50 transition-all hover:shadow-[0_0_15px_rgba(0,245,255,0.2)]`}
                    asChild
                  >
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <link.icon className={`w-4 h-4 text-${link.color}`} />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <span className="text-cyber-purple font-mono">{`>`}</span> Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
                { name: "Home", href: "#home" }
              ].map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-left text-muted-foreground hover:text-cyber-cyan transition-colors text-sm font-mono group flex items-center gap-1"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-cyber-cyan/50 group-hover:text-cyber-cyan transition-colors">//</span>
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <span className="text-cyber-pink font-mono">{`>`}</span> Get In Touch
            </h4>
            <div className="space-y-2 text-sm font-mono">
              <div className="text-muted-foreground flex items-center gap-2">
                <span className="text-cyber-cyan">→</span> roksana18cse04@gmail.com
              </div>
              <div className="text-muted-foreground flex items-center gap-2">
                <span className="text-cyber-purple">→</span> Available for remote work worldwide
              </div>
              <div className="text-muted-foreground flex items-center gap-2">
                <span className="text-cyber-green">→</span> Response time: {"<"} 24 hours
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple text-white font-semibold hover:shadow-[0_0_25px_rgba(0,245,255,0.3)] transition-all duration-300 group"
              >
                <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                Start a Conversation
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div 
            className="text-sm text-muted-foreground font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-cyber-purple">{`// `}</span>
            © {currentYear} Roksana Akter. All rights reserved.
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2 text-sm text-muted-foreground font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>Built with</span>
            <Zap className="w-4 h-4 text-cyber-cyan animate-pulse" />
            <span className="bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent font-semibold">
              React & AI
            </span>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-cyber-cyan hover:text-cyber-cyan hover:bg-cyber-cyan/10 transition-all group"
            >
              <span className="mr-2 font-mono">scroll.toTop()</span>
              <ChevronUp className="w-4 h-4 group-hover:animate-bounce" />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;