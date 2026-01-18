import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Boxes, Wrench, Sparkles, Zap, Database, Cloud, Cpu, Eye } from "lucide-react";
import Skills3DVisualization from "./Skills3DVisualization";
import SkillsHexGrid from "./SkillsHexGrid";
import { useState } from "react";

const Skills = () => {
  const [setRef, isInView] = useInView(0.1);
  const [activeView, setActiveView] = useState<'3d' | 'hex' | 'bars'>('3d');

  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "cyber-cyan",
      skills: [
        { name: "Deep Learning", level: 95 },
        { name: "Neural Networks", level: 90 },
        { name: "Computer Vision", level: 85 },
        { name: "Natural Language Processing", level: 88 },
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "cyber-purple",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "Dart/Flutter", level: 88 },
        { name: "SQL", level: 90 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Boxes,
      color: "cyber-pink",
      skills: [
        { name: "TensorFlow", level: 92 },
        { name: "PyTorch", level: 88 },
        { name: "Scikit-learn", level: 95 },
        { name: "Keras", level: 90 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "cyber-blue",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Git/GitHub", level: 90 },
        { name: "AWS/GCP", level: 80 },
        { name: "FastAPI", level: 85 },
      ]
    }
  ];

  const expertiseAreas = [
    { icon: Brain, title: "Deep Learning", desc: "Neural architectures & training", color: "cyber-cyan" },
    { icon: Eye, title: "Computer Vision", desc: "Image & video analysis", color: "cyber-purple" },
    { icon: Cpu, title: "NLP Systems", desc: "Language understanding", color: "cyber-pink" },
    { icon: Database, title: "Data Engineering", desc: "Pipeline & processing", color: "cyber-blue" },
    { icon: Cloud, title: "Cloud ML Ops", desc: "Deployment & scaling", color: "cyber-green" },
    { icon: Zap, title: "Edge AI", desc: "Optimized inference", color: "cyber-orange" },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={setRef}>
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--cyber-cyan) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--cyber-cyan) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-pink/5 rounded-full blur-3xl" />
        
        {/* Scan line */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent animate-scan" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-cyber-cyan/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-cyber-cyan animate-pulse" />
            <span className="text-sm font-mono text-cyber-cyan">TECHNICAL ARSENAL</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-light">
            A comprehensive toolkit for building intelligent systems and scalable AI solutions
          </p>
        </motion.div>

        {/* View toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { id: '3d', label: '3D Orbit', icon: '🌐' },
            { id: 'hex', label: 'Hex Grid', icon: '⬡' },
            { id: 'bars', label: 'Progress', icon: '📊' },
          ].map((view) => (
            <motion.button
              key={view.id}
              onClick={() => setActiveView(view.id as '3d' | 'hex' | 'bars')}
              className={`px-6 py-3 rounded-xl font-mono text-sm transition-all ${
                activeView === view.id
                  ? 'bg-gradient-to-r from-cyber-cyan to-cyber-purple text-surface-dark font-bold'
                  : 'glass-effect text-foreground/70 border border-cyber-cyan/30 hover:border-cyber-cyan/60'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{view.icon}</span>
              {view.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-20"
        >
          {activeView === '3d' && <Skills3DVisualization />}
          {activeView === 'hex' && <SkillsHexGrid />}
          {activeView === 'bars' && (
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: categoryIndex * 0.1 + 0.3, duration: 0.6 }}
                >
                  <div className="glass-effect rounded-2xl p-6 border border-cyber-cyan/20 hover:border-cyber-cyan/40 transition-all group">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className={`p-3 rounded-xl bg-${category.color}/20 group-hover:bg-${category.color}/30 transition-colors`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <category.icon className={`w-6 h-6 text-${category.color}`} />
                      </motion.div>
                      <h3 className="text-lg font-bold font-mono">{category.title}</h3>
                    </div>
                    
                    {/* Skills */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5 }}
                        >
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-mono text-foreground/80">{skill.name}</span>
                            <span className={`text-sm font-bold text-${category.color}`}>{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-surface-medium rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full bg-gradient-to-r from-${category.color} to-${category.color}/60`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : {}}
                              transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.6, duration: 1 }}
                            >
                              {/* Shimmer effect */}
                              <div className="h-full w-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Expertise areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 font-mono">
            <span className="text-cyber-cyan">&lt;</span>
            Core Expertise
            <span className="text-cyber-cyan">/&gt;</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="group"
              >
                <motion.div
                  className={`glass-effect rounded-xl p-4 border border-${area.color}/20 hover:border-${area.color}/50 transition-all text-center cursor-pointer`}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-${area.color}/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-${area.color}/30`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <area.icon className={`w-6 h-6 text-${area.color}`} />
                  </motion.div>
                  <h4 className="font-bold text-sm mb-1">{area.title}</h4>
                  <p className="text-xs text-foreground/60">{area.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl font-bold mb-6 font-mono text-foreground/80">
            Technologies & Tools
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
              "OpenCV", "NLTK", "Hugging Face", "Docker", "Kubernetes", "AWS",
              "GCP", "MongoDB", "PostgreSQL", "Redis", "FastAPI", "Flask",
              "Streamlit", "Git", "Linux", "CUDA", "Transformers", "YOLO"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.03, type: "spring" }}
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <Badge 
                  className="px-4 py-2 text-sm font-mono bg-surface-dark/80 border border-cyber-cyan/30 text-cyber-cyan hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all cursor-pointer"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 border border-cyber-purple/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "50+", label: "Technologies Mastered", icon: "🔧" },
                { value: "3+", label: "Years Experience", icon: "📅" },
                { value: "20+", label: "Projects Completed", icon: "🚀" },
                { value: "∞", label: "Learning Never Stops", icon: "📚" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1 + index * 0.1 }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold font-orbitron bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/60 font-mono mt-1">{stat.label}</div>
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
