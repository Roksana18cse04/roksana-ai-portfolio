import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Roksana18cse04",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/roksana00mymensingh/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:roksana18cse04@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-pink-soft/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Roksana.dev
            </h3>
            <p className="text-muted-foreground">
              AI/ML Engineer passionate about creating intelligent solutions 
              that make a difference in the world.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="hover:bg-pink-primary hover:text-white hover:border-pink-primary transition-smooth border-pink-soft"
                  asChild
                >
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
                { name: "Home", href: "#home" }
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-left text-muted-foreground hover:text-pink-primary transition-smooth text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground">
                📧 roksana18cse04@gmail.com
              </div>
              <div className="text-muted-foreground">
                🌍 Available for remote work worldwide
              </div>
              <div className="text-muted-foreground">
                ⚡ Usually responds within 24 hours
              </div>
            </div>
            <Button 
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="gradient-primary text-white hover:shadow-glow transition-bounce"
            >
              Start a Conversation
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-pink-soft/30 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Roksana Akter. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-pink-primary fill-pink-primary" />
            <span>using React & AI</span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="hover:text-pink-primary transition-smooth"
          >
            Back to Top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
