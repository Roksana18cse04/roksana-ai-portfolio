import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles, Zap, Brain, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useTypingEffect } from "@/hooks/useAnimations";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const typedText = useTypingEffect("AI/ML Engineer & Python Developer", 100);

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

  const floatingIcons = [
    { Icon: Brain, delay: 0 },
    { Icon: Code, delay: 0.5 },
    { Icon: Zap, delay: 1 },
    { Icon: Sparkles, delay: 1.5 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dark futuristic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-background to-surface-dark">
        {/* Mouse tracking glow */}
        <div 
          className="absolute inset-0 opacity-50 transition-all duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--cyber-cyan) / 0.15), transparent 80%)`
          }}
        />
        
        {/* Grid pattern */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--cyber-cyan)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--cyber-cyan)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, delay }, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0
            }}
            animate={{
              x: [
                Math.random() * 300 + 100,
                Math.random() * 300 + 200,
                Math.random() * 300 + 100
              ],
              y: [
                Math.random() * 300 + 100,
                Math.random() * 300 + 200,
                Math.random() * 300 + 100
              ],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              delay: delay
            }}
          >
            <Icon className="w-8 h-8 text-cyber-cyan/30" />
          </motion.div>
        ))}
        
        {/* Data particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-cyber-cyan"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: -10,
              opacity: 0
            }}
            animate={{
              y: typeof window !== 'undefined' ? window.innerHeight + 10 : 900,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image with 3D effect */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotateY: -180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="mb-10"
          >
            <div className="relative inline-block group perspective-1000">
              {/* Outer glow ring */}
              <motion.div 
                className="absolute inset-[-20px] rounded-full opacity-60"
                style={{
                  background: 'conic-gradient(from 0deg, hsl(var(--cyber-cyan)), hsl(var(--cyber-blue)), hsl(var(--cyber-purple)), hsl(var(--cyber-cyan)))'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-[-18px] rounded-full bg-surface-dark" />
              
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple opacity-40 blur-xl group-hover:opacity-60 transition-opacity animate-pulse" />
              
              <motion.img 
                src="/Roksana1.jpg" 
                alt="Roksana Akter" 
                className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-cyber-cyan/50 mx-auto object-cover"
                whileHover={{ scale: 1.05 }}
                style={{
                  boxShadow: '0 0 30px hsl(var(--cyber-cyan) / 0.3), inset 0 0 20px hsl(var(--cyber-cyan) / 0.1)'
                }}
              />
              
              {/* Orbiting sparkle */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: '50% calc(50% + 5rem)' }}
              >
                <Sparkles className="w-6 h-6 text-cyber-cyan" />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Glitch Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-orbitron relative">
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.02 }}
              >
                {/* Glitch layers */}
                <span className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-cyber-blue bg-clip-text text-transparent opacity-50 animate-glitch-1" aria-hidden="true">
                  Roksana Akter
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent opacity-50 animate-glitch-2" aria-hidden="true">
                  Roksana Akter
                </span>
                <span className="relative bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-cyan bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Roksana Akter
                </span>
              </motion.span>
            </h1>
          </motion.div>

          {/* Typing effect role */}
          <motion.div 
            className="text-xl md:text-2xl lg:text-3xl mb-8 h-12 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="text-cyber-cyan">
              &lt;
            </span>
            <span className="text-foreground/90">
              {typedText}
            </span>
            <span className="animate-blink text-cyber-cyan">|</span>
            <span className="text-cyber-cyan">
              /&gt;
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg md:text-xl text-foreground/60 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Building intelligent systems that solve real-world problems through 
            cutting-edge machine learning and artificial intelligence
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="relative overflow-hidden group bg-gradient-to-r from-cyber-cyan to-cyber-blue text-surface-dark font-bold hover:shadow-lg hover:shadow-cyber-cyan/30 transition-all"
              onClick={scrollToContact}
            >
              <span className="relative z-10 flex items-center">
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="relative overflow-hidden group border-2 border-cyber-cyan/50 hover:border-cyber-cyan transition-all hover:shadow-lg hover:shadow-cyber-cyan/20 text-cyber-cyan hover:bg-cyber-cyan/10"
              asChild
            >
              <a href="/Roksana_Resume.pdf" download="Roksana_Resume.pdf" className="relative z-10">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {[
              { icon: Github, href: "https://github.com/Roksana18cse04", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/roksana00mymensingh/", label: "LinkedIn" },
              { icon: Mail, onClick: scrollToContact, label: "Email" }
            ].map(({ icon: Icon, href, onClick, label }) => (
              <motion.div key={label} whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }}>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="relative overflow-hidden group w-12 h-12 rounded-xl glass-effect border border-cyber-cyan/20 hover:border-cyber-cyan/60"
                  asChild={!!href}
                  onClick={onClick}
                >
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-5 w-5 text-cyber-cyan group-hover:text-white transition-colors relative z-10" />
                      <div className="absolute inset-0 bg-cyber-cyan/20 scale-0 group-hover:scale-100 transition-transform rounded-xl" />
                    </a>
                  ) : (
                    <>
                      <Icon className="h-5 w-5 text-cyber-cyan group-hover:text-white transition-colors relative z-10" />
                      <div className="absolute inset-0 bg-cyber-cyan/20 scale-0 group-hover:scale-100 transition-transform rounded-xl" />
                    </>
                  )}
                </Button>
              </motion.div>
            ))}
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
          className="w-6 h-10 border-2 border-cyber-cyan/50 rounded-full flex justify-center p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-3 bg-cyber-cyan rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
