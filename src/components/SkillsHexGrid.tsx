import { motion } from "framer-motion";
import { useState } from "react";

interface HexSkill {
  name: string;
  icon: string;
  color: string;
  category: string;
  level: number;
}

const hexSkills: HexSkill[] = [
  { name: "TensorFlow", icon: "🧠", color: "#00D4FF", category: "AI/ML", level: 92 },
  { name: "PyTorch", icon: "🔥", color: "#0099FF", category: "AI/ML", level: 88 },
  { name: "Python", icon: "🐍", color: "#00BFFF", category: "Language", level: 95 },
  { name: "React", icon: "⚛️", color: "#61DAFB", category: "Frontend", level: 85 },
  { name: "OpenCV", icon: "👁️", color: "#00CED1", category: "Vision", level: 90 },
  { name: "Docker", icon: "🐳", color: "#2496ED", category: "DevOps", level: 85 },
  { name: "AWS", icon: "☁️", color: "#00A8E8", category: "Cloud", level: 80 },
  { name: "Keras", icon: "🔴", color: "#00B4D8", category: "AI/ML", level: 90 },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1", category: "Database", level: 90 },
  { name: "FastAPI", icon: "⚡", color: "#00E5FF", category: "Backend", level: 85 },
  { name: "Git", icon: "📦", color: "#00D9FF", category: "Tools", level: 90 },
  { name: "Flutter", icon: "💙", color: "#02569B", category: "Mobile", level: 82 },
  { name: "NLP", icon: "📝", color: "#00BCD4", category: "AI/ML", level: 88 },
  { name: "Pandas", icon: "🐼", color: "#0077B6", category: "Data", level: 92 },
  { name: "NumPy", icon: "🔢", color: "#0096C7", category: "Data", level: 90 },
  { name: "MongoDB", icon: "🍃", color: "#00B7EB", category: "Database", level: 85 },
  { name: "Streamlit", icon: "📊", color: "#00A3E0", category: "Tools", level: 87 },
  { name: "Hugging Face", icon: "🤗", color: "#00CFFF", category: "AI/ML", level: 85 },
];

const SkillsHexGrid = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(hexSkills.map(s => s.category))];

  const filteredSkills = hexSkills.filter(skill => !selectedCategory || skill.category === selectedCategory);

  const getHexPosition = (index: number, total: number) => {
    const cols = Math.min(6, Math.ceil(Math.sqrt(total * 1.5)));
    const row = Math.floor(index / cols);
    const col = index % cols;
    const hexWidth = 100;
    const hexHeight = 90;
    const offsetX = row % 2 === 1 ? hexWidth / 2 : 0;
    
    return {
      x: col * hexWidth + offsetX,
      y: row * hexHeight * 0.78
    };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const hexVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotateY: -90
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <div className="w-full">
      {/* Category filters */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.button
          className={`px-5 py-2.5 rounded-full font-mono text-sm transition-all duration-300 ${
            selectedCategory === null
              ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-surface-dark font-bold shadow-lg shadow-cyber-cyan/30'
              : 'glass-effect text-cyber-cyan border border-cyber-cyan/30 hover:border-cyber-cyan/60 hover:shadow-lg hover:shadow-cyber-cyan/20'
          }`}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedCategory(null)}
        >
          All Skills
        </motion.button>
        {categories.map((category, idx) => (
          <motion.button
            key={category}
            className={`px-5 py-2.5 rounded-full font-mono text-sm transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-bold shadow-lg shadow-cyber-blue/30'
                : 'glass-effect text-cyber-blue border border-cyber-blue/30 hover:border-cyber-blue/60 hover:shadow-lg hover:shadow-cyber-blue/20'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 + 0.3 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Hex grid container */}
      <motion.div 
        className="relative mx-auto flex justify-center"
        style={{ minHeight: '400px' }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div 
          className="relative"
          style={{ 
            width: `${Math.min(6, Math.ceil(Math.sqrt(filteredSkills.length * 1.5))) * 100 + 50}px`,
            height: `${Math.ceil(filteredSkills.length / Math.min(6, Math.ceil(Math.sqrt(filteredSkills.length * 1.5)))) * 70 + 120}px`
          }}
        >
          {filteredSkills.map((skill, index) => {
            const pos = getHexPosition(index, filteredSkills.length);
            const isHovered = hoveredSkill === skill.name;
            
            return (
              <motion.div
                key={skill.name}
                className="absolute cursor-pointer"
                style={{ left: pos.x, top: pos.y }}
                variants={hexVariants}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ 
                  scale: 1.15, 
                  zIndex: 50,
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                {/* Hexagon shape */}
                <div className="relative group">
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute inset-[-8px] rounded-full blur-xl transition-all duration-500"
                    style={{ 
                      backgroundColor: skill.color,
                    }}
                    animate={{
                      opacity: isHovered ? 0.6 : 0,
                      scale: isHovered ? 1.2 : 1
                    }}
                  />
                  
                  {/* Outer hexagon border */}
                  <motion.div 
                    className="relative w-[88px] h-[96px] flex items-center justify-center transition-all duration-500"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      background: isHovered 
                        ? `linear-gradient(135deg, ${skill.color}, ${skill.color}80)` 
                        : 'linear-gradient(135deg, hsl(200 100% 50% / 0.3), hsl(185 100% 50% / 0.1))',
                    }}
                    animate={{
                      boxShadow: isHovered 
                        ? `0 0 30px ${skill.color}60, inset 0 0 20px ${skill.color}30`
                        : 'none'
                    }}
                  >
                    {/* Inner hexagon */}
                    <div 
                      className="absolute inset-[2px] flex flex-col items-center justify-center transition-all duration-500 overflow-hidden"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        background: isHovered 
                          ? `linear-gradient(135deg, hsl(220 25% 8%), hsl(220 20% 12%))`
                          : 'linear-gradient(135deg, hsl(220 25% 6%), hsl(220 20% 10%))',
                      }}
                    >
                      {/* Scan line effect */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `linear-gradient(transparent, ${skill.color}20, transparent)`,
                          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        }}
                        animate={{
                          y: isHovered ? ['0%', '200%'] : '0%'
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: isHovered ? Infinity : 0,
                          ease: "linear"
                        }}
                      />
                      
                      {/* Grid pattern overlay */}
                      <div 
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `
                            linear-gradient(${skill.color}10 1px, transparent 1px),
                            linear-gradient(90deg, ${skill.color}10 1px, transparent 1px)
                          `,
                          backgroundSize: '8px 8px'
                        }}
                      />
                      
                      {/* Content */}
                      <motion.span 
                        className="text-2xl z-10 mb-1"
                        animate={{ 
                          scale: isHovered ? 1.2 : 1,
                          rotate: isHovered ? [0, -10, 10, 0] : 0
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {skill.icon}
                      </motion.span>
                      <motion.span 
                        className="text-[10px] font-mono font-bold text-center px-1 transition-colors z-10"
                        style={{ color: isHovered ? skill.color : 'hsl(185 100% 60%)' }}
                      >
                        {skill.name}
                      </motion.span>
                      
                      {/* Level indicator */}
                      <motion.div
                        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-14"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                      >
                        <div className="h-1 bg-surface-medium/50 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            animate={{ width: isHovered ? `${skill.level}%` : 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Floating label on hover */}
                  <motion.div
                    className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-50"
                    initial={{ opacity: 0, y: -10, scale: 0.8 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : -10,
                      scale: isHovered ? 1 : 0.8
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div 
                      className="glass-effect px-4 py-2 rounded-xl border backdrop-blur-xl"
                      style={{ borderColor: `${skill.color}50` }}
                    >
                      <div className="font-mono text-sm font-bold" style={{ color: skill.color }}>
                        {skill.level}% Proficiency
                      </div>
                      <div className="text-xs text-foreground/60 text-center">
                        {skill.category}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Corner particles */}
                  {isHovered && (
                    <>
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ 
                            x: 44, 
                            y: 48, 
                            opacity: 0,
                            scale: 0 
                          }}
                          animate={{ 
                            x: [44, 44 + Math.cos(i * 90 * Math.PI / 180) * 50],
                            y: [48, 48 + Math.sin(i * 90 * Math.PI / 180) * 50],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0]
                          }}
                          transition={{
                            duration: 0.8,
                            delay: i * 0.1,
                            repeat: Infinity,
                            repeatDelay: 0.5
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Animated connection lines background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(185 100% 50%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(200 100% 50%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(185 100% 50%)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default SkillsHexGrid;
