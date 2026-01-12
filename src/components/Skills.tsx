import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Boxes, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";

const Skills = () => {
  const [setRef, isInView] = useInView(0.2);

  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: Brain,
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
      skills: [
        { name: "Docker", level: 85 },
        { name: "Git/GitHub", level: 90 },
        { name: "AWS/GCP", level: 80 },
        { name: "FastAPI", level: 85 },
      ]
    }
  ];

  const technologies = [
    "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
    "OpenCV", "NLTK", "Hugging Face", "Docker", "Flutter", "AWS", "GCP",
    "MongoDB", "PostgreSQL", "Redis", "FastAPI", "Streamlit", "Git"
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={setRef}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-rose/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-primary via-pink-rose to-pink-dark bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent systems and scalable AI solutions
          </p>
        </motion.div>

        {/* Skills Progress Bars with enhanced animations */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
            >
              <Card className="shadow-card hover:shadow-glow transition-all duration-500 group relative overflow-hidden border-2 border-transparent hover:border-pink-primary/20 bg-card">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-primary/5 via-pink-rose/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <CardHeader className="relative">
                  <CardTitle className="text-xl font-bold flex items-center gap-3">
                    <motion.div
                      className="p-3 rounded-lg bg-gradient-to-br from-pink-primary/20 to-pink-rose/20 group-hover:from-pink-primary/40 group-hover:to-pink-rose/40 transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <category.icon className="w-6 h-6 text-pink-primary" />
                    </motion.div>
                    <span className="group-hover:text-pink-primary transition-colors">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium group-hover:text-pink-primary transition-colors">{skill.name}</span>
                        <span className="text-sm text-muted-foreground group-hover:text-pink-rose transition-colors font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-pink-light rounded-full h-3 overflow-hidden shadow-inner">
                        <motion.div
                          className="h-full relative overflow-hidden rounded-full"
                          style={{
                            background: 'linear-gradient(90deg, hsl(var(--pink-primary)), hsl(var(--pink-rose)))',
                          }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.2, 
                            duration: 1, 
                            ease: "easeOut" 
                          }}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technologies Cloud with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Card className="shadow-card relative overflow-hidden border-2 border-transparent hover:border-pink-rose/20 transition-all bg-card">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-primary/5 via-transparent to-pink-rose/5" />
            
            <CardHeader className="relative">
              <CardTitle className="text-2xl font-bold text-center">
                <span className="bg-gradient-to-r from-pink-primary via-pink-rose to-pink-dark bg-clip-text text-transparent">
                  Technologies & Tools
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-4 py-2 text-sm font-medium cursor-default transition-all hover:bg-gradient-to-r hover:from-pink-primary/10 hover:to-pink-rose/10 hover:border-pink-primary/30 hover:shadow-glow"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
