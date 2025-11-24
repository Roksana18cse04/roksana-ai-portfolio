import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTypingEffect } from "@/hooks/useAnimations";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const typedText = useTypingEffect("AI/ML Engineer & Data Scientist", 100);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background with mouse tracking */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, hsl(340 82% 67% / 0.15), transparent 80%)`
          }}
        />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-tech-cyan/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image with glow effect */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <div className="relative inline-block group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-tech-blue via-tech-cyan to-tech-purple opacity-75 blur-xl group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <img 
                src="/Roksana.png" 
                alt="Roksana Akter" 
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/20 shadow-glow mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-tech-violet" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative inline-block"
              >
                <span className="bg-gradient-to-r from-tech-blue via-tech-cyan to-tech-purple bg-clip-text text-transparent bg-300% animate-gradient">
                  Roksana Akter Nipa
                </span>
              </motion.span>
            </h1>
          </motion.div>

          <motion.div 
            className="text-2xl md:text-3xl mb-6 h-12 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-tech-blue via-tech-cyan to-tech-purple bg-clip-text text-transparent">
              {typedText}
            </span>
            <span className="animate-blink text-tech-cyan">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
          >
            Building intelligent systems that solve real-world problems through 
            cutting-edge machine learning and artificial intelligence
          </motion.p>

          {/* CTA Buttons with enhanced effects */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="relative overflow-hidden group shadow-glow hover:shadow-neon"
              onClick={scrollToContact}
            >
              <span className="relative z-10 flex items-center">
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-tech-purple to-tech-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="relative overflow-hidden group border-2 border-tech-cyan hover:border-tech-purple transition-all hover:shadow-glow"
              asChild
            >
              <a href="/Roksana_Resume.pdf" download="Roksana_Resume.pdf" className="relative z-10">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Social Links with enhanced hover effects */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Button 
              size="icon" 
              variant="ghost" 
              className="relative overflow-hidden group hover:scale-110 transition-all"
              asChild
            >
              <a href="https://github.com/Roksana18cse04" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 group-hover:text-tech-cyan transition-colors relative z-10" />
                <div className="absolute inset-0 bg-tech-cyan/20 scale-0 group-hover:scale-100 transition-transform rounded-full" />
              </a>
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="relative overflow-hidden group hover:scale-110 transition-all"
              asChild
            >
              <a href="https://www.linkedin.com/in/roksana-akter-a79b77232/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 group-hover:text-tech-blue transition-colors relative z-10" />
                <div className="absolute inset-0 bg-tech-blue/20 scale-0 group-hover:scale-100 transition-transform rounded-full" />
              </a>
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="relative overflow-hidden group hover:scale-110 transition-all"
              onClick={scrollToContact}
            >
              <Mail className="h-6 w-6 group-hover:text-tech-purple transition-colors relative z-10" />
              <div className="absolute inset-0 bg-tech-purple/20 scale-0 group-hover:scale-100 transition-transform rounded-full" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-tech-cyan rounded-full flex justify-center p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1 h-3 bg-tech-cyan rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
