import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { useTypingEffect, useScrollAnimation } from "@/hooks/useAnimations";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollY = useScrollAnimation();
  const typedText = useTypingEffect("AI/ML Engineer", 100);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className={`mb-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="relative inline-block">
              <img 
                src="/Roksana.png" 
                alt="Roksana Akter" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/20 shadow-glow mx-auto mb-6 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-pulse"></div>
            </div>
          </div>
          
          <div className={`mb-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-primary bg-clip-text text-transparent inline-block">
                <span className="inline-block border-r-2 border-primary animate-blink">
                  {typedText}
                </span>
              </span>
              <br />
              <span className={`text-foreground ${isLoaded ? 'animate-fade-in delay-1000' : 'opacity-0'}`}>
                & Innovator
              </span>
            </h1>
            <p className={`text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed ${isLoaded ? 'animate-fade-in delay-1500' : 'opacity-0'}`}>
              Building intelligent systems that solve real-world problems through 
              cutting-edge machine learning and artificial intelligence
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${isLoaded ? 'animate-bounce-in delay-2000' : 'opacity-0'}`}>
            <Button 
              size="lg" 
              className="gradient-primary text-white hover:shadow-glow hover:scale-105 transition-all duration-300 group"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 group"
              asChild
            >
              <a href="/Roksana_Akter_RESUME.pdf" download="Roksana_Akter_RESUME.pdf">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className={`flex justify-center space-x-6 ${isLoaded ? 'animate-slide-up delay-2500' : 'opacity-0'}`}>
            <Button 
              variant="ghost" 
              size="lg"
              className="hover:text-ai-blue hover:scale-110 transition-all duration-300 group animate-float"
              asChild
            >
              <a href="https://github.com/Roksana18cse04" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 group-hover:animate-pulse" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="hover:text-ai-blue hover:scale-110 transition-all duration-300 group animate-float"
              style={{ animationDelay: '0.5s' }}
              asChild
            >
              <a href="https://linkedin.com/in/roksana00mymensingh/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 group-hover:animate-pulse" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="hover:text-ai-blue hover:scale-110 transition-all duration-300 group animate-float"
              style={{ animationDelay: '1s' }}
              asChild
            >
              <a href="mailto:roksana.tech.2000@gmail.com">
                <Mail className="h-6 w-6 group-hover:animate-pulse" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-ai-blue rounded-full animate-pulse animate-float" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-ai-purple rounded-full animate-pulse animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-ai-cyan rounded-full animate-pulse animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-ai-green/30 rounded-full animate-glow animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-ai-purple/50 rounded-full animate-pulse animate-float" style={{ animationDelay: '1.5s' }} />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-ai-blue/20 to-ai-purple/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-ai-purple/10 to-ai-cyan/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default Hero;