import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
            <Card key={categoryIndex} className="shadow-card hover:shadow-glow transition-smooth">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center">
                  <span className="w-3 h-3 rounded-full gradient-primary mr-3"></span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies Badge Cloud */}
        <Card className="shadow-card">
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
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Expertise Areas */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card className="text-center shadow-card hover:shadow-glow transition-bounce group">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-bounce">
                <span className="text-2xl text-white">🧠</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Deep Learning</h3>
              <p className="text-muted-foreground">Advanced neural architectures, CNNs, RNNs, and Transformers</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-glow transition-bounce group">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-bounce">
                <span className="text-2xl text-white">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Data Science</h3>
              <p className="text-muted-foreground">Statistical analysis, data mining, and predictive modeling</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-glow transition-bounce group">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-bounce">
                <span className="text-2xl text-white">⚙️</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">MLOps</h3>
              <p className="text-muted-foreground">Model deployment, monitoring, and production pipelines</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;