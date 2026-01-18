import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface SkillNode {
  name: string;
  icon: string;
  color: string;
  level: number;
}

const skills: SkillNode[] = [
  { name: "Python", icon: "🐍", color: "#3776AB", level: 95 },
  { name: "TensorFlow", icon: "🧠", color: "#FF6F00", level: 92 },
  { name: "PyTorch", icon: "🔥", color: "#EE4C2C", level: 88 },
  { name: "React", icon: "⚛️", color: "#61DAFB", level: 85 },
  { name: "Docker", icon: "🐳", color: "#2496ED", level: 85 },
  { name: "OpenCV", icon: "👁️", color: "#5C3EE8", level: 90 },
  { name: "AWS", icon: "☁️", color: "#FF9900", level: 80 },
  { name: "MongoDB", icon: "🍃", color: "#47A248", level: 85 },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1", level: 90 },
  { name: "Git", icon: "📦", color: "#F05032", level: 90 },
  { name: "FastAPI", icon: "⚡", color: "#009688", level: 85 },
  { name: "Flutter", icon: "💙", color: "#02569B", level: 82 },
];

const Skills3DVisualization = () => {
  const [rotation, setRotation] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  const radius = 180;
  const centerX = 200;
  const centerY = 200;

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink opacity-20 blur-3xl animate-pulse" />
      
      {/* Main container */}
      <div 
        className="relative w-[400px] h-[400px] mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Central core */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            className="relative"
            animate={{ 
              scale: hoveredSkill ? 1.1 : 1,
              rotateY: rotation * 0.5 
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Core glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink rounded-full blur-xl opacity-60 animate-pulse" />
            
            {/* Core sphere */}
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-surface-dark via-surface-medium to-surface-dark border-2 border-cyber-cyan/50 flex items-center justify-center overflow-hidden">
              {/* Holographic effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent animate-shimmer" />
              
              {/* Core icon */}
              <div className="text-center z-10">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent font-orbitron">
                  AI
                </span>
                <div className="text-xs text-cyber-cyan/80 font-mono">SKILLS</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Orbital rings */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          {/* Outer ring */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth="1"
            strokeDasharray="8 4"
            className="animate-spin"
            style={{ animationDuration: '60s' }}
          />
          
          {/* Middle ring */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius - 40}
            fill="none"
            stroke="url(#ringGradient2)"
            strokeWidth="1"
            strokeDasharray="4 8"
            className="animate-spin"
            style={{ animationDuration: '45s', animationDirection: 'reverse' }}
          />
          
          {/* Inner ring */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius - 80}
            fill="none"
            stroke="url(#ringGradient3)"
            strokeWidth="1"
            opacity="0.5"
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--cyber-cyan))" stopOpacity="0.6" />
              <stop offset="50%" stopColor="hsl(var(--cyber-purple))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--cyber-pink))" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="ringGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--cyber-purple))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--cyber-cyan))" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="ringGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--cyber-pink))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--cyber-blue))" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Skill nodes */}
        {skills.map((skill, index) => {
          const angle = (index * (360 / skills.length) + rotation) * (Math.PI / 180);
          const x = centerX + radius * Math.cos(angle) - 30;
          const y = centerY + radius * Math.sin(angle) - 30;
          const zIndex = Math.sin(angle) > 0 ? 30 : 10;
          const scale = 0.7 + (Math.sin(angle) + 1) * 0.15;
          const opacity = 0.6 + (Math.sin(angle) + 1) * 0.2;
          
          return (
            <motion.div
              key={skill.name}
              className="absolute cursor-pointer"
              style={{ 
                left: x, 
                top: y, 
                zIndex: hoveredSkill === skill.name ? 50 : zIndex 
              }}
              animate={{ 
                scale: hoveredSkill === skill.name ? 1.3 : scale,
                opacity: hoveredSkill && hoveredSkill !== skill.name ? 0.4 : opacity
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.3 }}
            >
              {/* Node container */}
              <div className="relative group">
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-full blur-md transition-all duration-300"
                  style={{ 
                    backgroundColor: skill.color,
                    opacity: hoveredSkill === skill.name ? 0.8 : 0.3
                  }}
                />
                
                {/* Node */}
                <div 
                  className="relative w-[60px] h-[60px] rounded-full bg-surface-dark border-2 flex items-center justify-center overflow-hidden transition-all duration-300"
                  style={{ 
                    borderColor: hoveredSkill === skill.name ? skill.color : 'rgba(0,255,255,0.3)',
                    boxShadow: hoveredSkill === skill.name 
                      ? `0 0 20px ${skill.color}, inset 0 0 10px ${skill.color}20`
                      : 'none'
                  }}
                >
                  {/* Holographic shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  
                  {/* Icon */}
                  <span className="text-2xl z-10">{skill.icon}</span>
                </div>
                
                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredSkill === skill.name ? 1 : 0,
                    y: hoveredSkill === skill.name ? 0 : 10
                  }}
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                >
                  <div className="glass-effect px-3 py-1.5 rounded-lg border border-cyber-cyan/30">
                    <div className="font-mono text-sm font-bold" style={{ color: skill.color }}>
                      {skill.name}
                    </div>
                    <div className="text-xs text-cyber-cyan/80">
                      {skill.level}% Proficiency
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
          {skills.map((skill, index) => {
            const angle = (index * (360 / skills.length) + rotation) * (Math.PI / 180);
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            const opacity = 0.1 + (Math.sin(angle) + 1) * 0.1;
            
            return (
              <line
                key={`line-${skill.name}`}
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                opacity={hoveredSkill === skill.name ? 0.8 : opacity}
                className="transition-opacity duration-300"
              />
            );
          })}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--cyber-cyan))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--cyber-purple))" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Data particles */}
        {[...Array(8)].map((_, i) => {
          const particleAngle = (i * 45 + rotation * 2) * (Math.PI / 180);
          const particleRadius = radius - 20;
          const px = centerX + particleRadius * Math.cos(particleAngle);
          const py = centerY + particleRadius * Math.sin(particleAngle);
          
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-cyber-cyan"
              style={{ 
                left: px - 3, 
                top: py - 3,
                boxShadow: '0 0 10px hsl(var(--cyber-cyan)), 0 0 20px hsl(var(--cyber-cyan))'
              }}
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.25
              }}
            />
          );
        })}
      </div>

      {/* Instructions */}
      <motion.div 
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-sm text-cyber-cyan/60 font-mono">
          <span className="inline-block w-2 h-2 rounded-full bg-cyber-cyan animate-pulse mr-2" />
          Hover to explore • Click for details
        </p>
      </motion.div>
    </div>
  );
};

export default Skills3DVisualization;
