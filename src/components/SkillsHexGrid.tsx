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
  { name: "TensorFlow", icon: "🧠", color: "#FF6F00", category: "AI/ML", level: 92 },
  { name: "PyTorch", icon: "🔥", color: "#EE4C2C", category: "AI/ML", level: 88 },
  { name: "Python", icon: "🐍", color: "#3776AB", category: "Language", level: 95 },
  { name: "React", icon: "⚛️", color: "#61DAFB", category: "Frontend", level: 85 },
  { name: "OpenCV", icon: "👁️", color: "#5C3EE8", category: "Vision", level: 90 },
  { name: "Docker", icon: "🐳", color: "#2496ED", category: "DevOps", level: 85 },
  { name: "AWS", icon: "☁️", color: "#FF9900", category: "Cloud", level: 80 },
  { name: "Keras", icon: "🔴", color: "#D00000", category: "AI/ML", level: 90 },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1", category: "Database", level: 90 },
  { name: "FastAPI", icon: "⚡", color: "#009688", category: "Backend", level: 85 },
  { name: "Git", icon: "📦", color: "#F05032", category: "Tools", level: 90 },
  { name: "Flutter", icon: "💙", color: "#02569B", category: "Mobile", level: 82 },
  { name: "NLP", icon: "📝", color: "#00BCD4", category: "AI/ML", level: 88 },
  { name: "Pandas", icon: "🐼", color: "#150458", category: "Data", level: 92 },
  { name: "NumPy", icon: "🔢", color: "#013243", category: "Data", level: 90 },
  { name: "MongoDB", icon: "🍃", color: "#47A248", category: "Database", level: 85 },
  { name: "Streamlit", icon: "📊", color: "#FF4B4B", category: "Tools", level: 87 },
  { name: "Hugging Face", icon: "🤗", color: "#FFD21E", category: "AI/ML", level: 85 },
  { name: "Scikit-learn", icon: "📈", color: "#F89939", category: "AI/ML", level: 95 },
];

const SkillsHexGrid = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(hexSkills.map(s => s.category))];

  const getHexPosition = (index: number) => {
    const cols = 5;
    const row = Math.floor(index / cols);
    const col = index % cols;
    const hexWidth = 110;
    const hexHeight = 95;
    const offsetX = row % 2 === 1 ? hexWidth / 2 : 0;
    
    return {
      x: col * hexWidth + offsetX,
      y: row * hexHeight * 0.85
    };
  };

  return (
    <div className="w-full">
      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <motion.button
          className={`px-4 py-2 rounded-full font-mono text-sm transition-all ${
            selectedCategory === null
              ? 'bg-cyber-cyan text-surface-dark'
              : 'glass-effect text-cyber-cyan border border-cyber-cyan/30 hover:border-cyber-cyan/60'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedCategory(null)}
        >
          All Skills
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`px-4 py-2 rounded-full font-mono text-sm transition-all ${
              selectedCategory === category
                ? 'bg-cyber-purple text-white'
                : 'glass-effect text-cyber-purple border border-cyber-purple/30 hover:border-cyber-purple/60'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Hex grid */}
      <div className="relative mx-auto" style={{ width: '550px', height: '400px' }}>
        {hexSkills
          .filter(skill => !selectedCategory || skill.category === selectedCategory)
          .map((skill, index) => {
            const pos = getHexPosition(index);
            const isHovered = hoveredSkill === skill.name;
            
            return (
              <motion.div
                key={skill.name}
                className="absolute cursor-pointer"
                style={{ left: pos.x, top: pos.y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: isHovered ? 0 : 0,
                  y: isHovered ? -5 : 0
                }}
                transition={{ 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ scale: 1.1, zIndex: 50 }}
              >
                {/* Hexagon shape */}
                <div className="relative">
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 blur-xl transition-opacity duration-300"
                    style={{ 
                      backgroundColor: skill.color,
                      opacity: isHovered ? 0.6 : 0,
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                    }}
                  />
                  
                  {/* Hexagon */}
                  <div 
                    className="relative w-24 h-[104px] flex items-center justify-center transition-all duration-300"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      background: isHovered 
                        ? `linear-gradient(135deg, ${skill.color}40, ${skill.color}20)` 
                        : 'linear-gradient(135deg, hsl(var(--surface-dark)), hsl(var(--surface-medium)))',
                    }}
                  >
                    {/* Border overlay */}
                    <div 
                      className="absolute inset-[2px] flex flex-col items-center justify-center transition-all duration-300"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        background: 'hsl(var(--surface-dark))',
                        border: `1px solid ${isHovered ? skill.color : 'hsl(var(--cyber-cyan) / 0.3)'}`,
                      }}
                    >
                      {/* Content */}
                      <span className="text-2xl mb-1">{skill.icon}</span>
                      <span 
                        className="text-xs font-mono font-bold text-center px-1 transition-colors"
                        style={{ color: isHovered ? skill.color : 'hsl(var(--cyber-cyan))' }}
                      >
                        {skill.name}
                      </span>
                      
                      {/* Level indicator */}
                      <motion.div
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                      >
                        <div className="h-1 bg-surface-medium rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            animate={{ width: isHovered ? `${skill.level}%` : 0 }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                        <span className="text-[10px] font-mono" style={{ color: skill.color }}>
                          {skill.level}%
                        </span>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Scan line effect on hover */}
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    >
                      <div 
                        className="absolute inset-0 animate-scan"
                        style={{
                          background: `linear-gradient(transparent, ${skill.color}40, transparent)`,
                          height: '200%'
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default SkillsHexGrid;
