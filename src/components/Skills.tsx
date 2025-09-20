import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/useAnimations";

const Skills = () => {
  const [setRef, isInView] = useInView(0.2);
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({});

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedSkills({
          "Deep Learning": 95,
          "Neural Networks": 90,
          "Computer Vision": 85,
          "Natural Language Processing": 88,
          "Python": 95,
          "JavaScript/TypeScript": 85,
          "R": 80,
          "SQL": 90,
          "TensorFlow": 92,
          "PyTorch": 88,
          "Scikit-learn": 95,
          "Keras": 90,
          "Docker": 85,
          "Kubernetes": 75,
          "AWS/GCP": 80,
          "MLOps": 82,
        });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Deep Learning", level: 95 },
        { name: "Neural Networks", level: 90 },
        { name: "Computer Vision", level: 85 },
        { name: "Natural Language Processing", level: 88 },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "R", level: 80 },
        { name: "SQL", level: 90 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "TensorFlow", level: 92 },
        { name: "PyTorch", level: 88 },
        { name: "Scikit-learn", level: 95 },
        { name: "Keras", level: 90 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 75 },
        { name: "AWS/GCP", level: 80 },
        { name: "MLOps", level: 82 },
      ]
    }
  ];

  const technologies = [
    "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
    "OpenCV", "NLTK", "Hugging Face", "Docker", "Kubernetes", "AWS", "GCP",
    "MongoDB", "PostgreSQL", "Redis", "Apache Spark", "Jupyter", "Git"
  ];

  return (
    <section id="skills" className="py-20" ref={setRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent systems and scalable AI solutions
          </p>
        </div>

        {/* Skills Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className={`shadow-card hover:shadow-glow hover:scale-105 transition-all duration-500 ${
                isInView ? `animate-fade-in-left` : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center">
                  <span className="w-3 h-3 rounded-full gradient-primary mr-3 animate-pulse"></span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {isInView ? (animatedSkills[skill.name] || 0) : 0}%
                      </span>
                    </div>
                    <Progress 
                      value={isInView ? (animatedSkills[skill.name] || 0) : 0} 
                      className="h-2 overflow-hidden"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies Badge Cloud */}
        <Card className={`shadow-card hover:shadow-glow transition-all duration-500 ${isInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-foreground">
              Technologies & Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className={`px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 cursor-default ${
                    isInView ? 'animate-bounce-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${1000 + index * 50}ms` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Expertise Areas */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { emoji: "🧠", title: "Deep Learning", description: "Advanced neural architectures, CNNs, RNNs, and Transformers" },
            { emoji: "📊", title: "Data Science", description: "Statistical analysis, data mining, and predictive modeling" },
            { emoji: "⚙️", title: "MLOps", description: "Model deployment, monitoring, and production pipelines" }
          ].map((item, index) => (
            <Card 
              key={index} 
              className={`text-center shadow-card hover:shadow-glow hover:scale-105 hover:-translate-y-2 transition-all duration-500 group ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${1500 + index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:animate-bounce transition-all duration-300">
                  <span className="text-2xl">{item.emoji}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-ai-blue transition-colors duration-300">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;