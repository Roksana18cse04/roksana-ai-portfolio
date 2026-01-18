import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import { Badge } from "@/components/ui/badge";
import { Brain, Sparkles, Zap, Database, Cloud, Cpu, Eye, Code } from "lucide-react";
import SkillsHexGrid from "./SkillsHexGrid";

const Skills = () => {
  const [setRef, isInView] = useInView(0.1);

  const expertiseAreas = [
    { icon: Brain, title: "Deep Learning", desc: "Neural architectures", color: "cyber-cyan" },
    { icon: Eye, title: "Computer Vision", desc: "Image analysis", color: "cyber-blue" },
    { icon: Cpu, title: "NLP Systems", desc: "Language AI", color: "cyber-cyan" },
    { icon: Database, title: "Data Engineering", desc: "Pipeline design", color: "cyber-blue" },
    { icon: Cloud, title: "Cloud ML Ops", desc: "Deployment", color: "cyber-cyan" },
    { icon: Code, title: "Full Stack", desc: "End-to-end dev", color: "cyber-blue" },
  ];

  const technologies = [
    "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
    "OpenCV", "NLTK", "Hugging Face", "Docker", "Kubernetes", "AWS",
    "GCP", "MongoDB", "PostgreSQL", "Redis", "FastAPI", "Flask",
    "Streamlit", "Git", "Linux", "CUDA", "Transformers", "YOLO"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={setRef}>
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--cyber-cyan)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--cyber-cyan)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-cyber-blue/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Scan line */}
        <motion.div 
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent"
          animate={{
            y: ['-100vh', '100vh']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Vertical data streams */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-cyber-blue/20 to-transparent"
            style={{
              left: `${15 + i * 20}%`,
              height: '100%'
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleY: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-effect border border-cyber-cyan/30 mb-8"
            whileHover={{ scale: 1.05, borderColor: 'hsl(var(--cyber-cyan))' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-cyber-cyan animate-pulse" />
            <span className="text-sm font-mono text-cyber-cyan tracking-wider">TECHNICAL ARSENAL</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-orbitron"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-cyan bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Skills & Expertise
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            A comprehensive toolkit for building intelligent systems and scalable AI solutions
          </motion.p>
        </motion.div>

        {/* Hex Grid - Main visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <SkillsHexGrid />
        </motion.div>

        {/* Expertise areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-center mb-12 font-mono"
            variants={itemVariants}
          >
            <span className="text-cyber-cyan">&lt;</span>
            <span className="text-foreground">Core Expertise</span>
            <span className="text-cyber-cyan">/&gt;</span>
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="glass-effect rounded-2xl p-5 border border-cyber-cyan/10 hover:border-cyber-cyan/40 transition-all duration-500 text-center cursor-pointer h-full"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    boxShadow: '0 20px 40px -20px hsl(var(--cyber-cyan) / 0.3)'
                  }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyber-cyan/20 to-cyber-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:from-cyber-cyan/30 group-hover:to-cyber-blue/20 transition-all"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <area.icon className="w-7 h-7 text-cyber-cyan" />
                  </motion.div>
                  <h4 className="font-bold text-sm mb-1 text-foreground group-hover:text-cyber-cyan transition-colors">{area.title}</h4>
                  <p className="text-xs text-foreground/50">{area.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies cloud */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-xl font-bold mb-8 font-mono text-foreground/70">
            Technologies & Tools
          </h3>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                variants={{
                  hidden: { opacity: 0, scale: 0, rotate: -180 },
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: index * 0.03
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <Badge 
                  className="px-4 py-2 text-sm font-mono bg-surface-dark/80 border border-cyber-cyan/20 text-cyber-cyan hover:border-cyber-cyan hover:bg-cyber-cyan/10 hover:shadow-lg hover:shadow-cyber-cyan/20 transition-all cursor-pointer"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-10 border border-cyber-blue/20 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/5 via-transparent to-cyber-blue/5" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {[
                { value: "50+", label: "Technologies", icon: <Zap className="w-6 h-6" /> },
                { value: "3+", label: "Years Experience", icon: <Sparkles className="w-6 h-6" /> },
                { value: "20+", label: "Projects", icon: <Cpu className="w-6 h-6" /> },
                { value: "∞", label: "Always Learning", icon: <Brain className="w-6 h-6" /> },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyber-cyan/10 text-cyber-cyan mb-3 group-hover:bg-cyber-cyan/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold font-orbitron bg-gradient-to-r from-cyber-cyan to-cyber-blue bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-foreground/50 font-mono mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
