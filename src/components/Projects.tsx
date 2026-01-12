import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles, Star, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";

const Projects = () => {
  const [setRef, isInView] = useInView(0.1);
  
  const projects = [
    {
      title: "InPrep AI - Smart Interview Coach",
      description: "An AI-powered interview preparation platform that provides real-time feedback on body language, speech delivery, and answers using computer vision and NLP.",
      emoji: "🎯",
      icon: Star,
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "React", "Mediapipe"],
      features: [
        "AI-driven mock interviews with adaptive difficulty",
        "Real-time posture & gesture analysis via computer vision",
        "Speech tone analysis with personalized improvement tips",
        "Smart scoring system with progress tracking dashboard",
        "Intuitive React interface for seamless experience"
      ],
      github: "https://github.com/Roksana18cse04/Inprep-AI",
      demo: "https://www.inprep.ai/signup",
      status: "Live",
      featured: true
    },
    {
      title: "HarmoniAI - Multi-Agent System",
      description: "A sophisticated multi-agent chatbot platform enabling seamless collaboration between AI agents for diverse tasks including content creation and e-commerce.",
      emoji: "🤖",
      icon: Rocket,
      technologies: ["Python", "PyTorch", "FastAPI", "RAG", "LLM", "Vector DB"],
      features: [
        "Multi-agent orchestration with role-based expertise",
        "Advanced RAG system for contextual Q&A",
        "Integrated image generation & editing capabilities",
        "E-commerce product management automation",
        "Social media content generation pipeline"
      ],
      github: "https://github.com/Roksana18cse04/HarmoniAI",
      demo: "",
      status: "In Progress",
      featured: true
    },
    {
      title: "Hair Shade Matcher",
      description: "Computer vision solution for precise hair color matching using advanced color science algorithms and deep learning for real-time shade recommendations.",
      emoji: "💇‍♀️",
      technologies: ["Python", "OpenCV", "YOLOv8", "TensorRT", "ResNet", "K-Means"],
      features: [
        "ΔE LAB color distance for precise matching",
        "Real-time shade detection with YOLOv8",
        "ResNet-based fine-grained classification",
        "K-Means clustering for dominant colors",
        "TensorRT optimized for edge deployment"
      ],
      github: "https://github.com/Roksana18cse04/Hair_Extension",
      demo: "https://advancewhite.netlify.app/uploadphoto",
      status: "Live"
    },
  ];    

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-700 border-green-300";
      case "In Progress":
        return "bg-pink-light text-pink-primary border-pink-soft";
      default:
        return "bg-muted/20 text-muted-foreground border-muted";
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-pink-light/30" ref={setRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-pink-rose/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative AI/ML solutions crafted with passion to solve real-world challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group perspective-1000"
            >
              <Card className={`h-full shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-4 relative overflow-hidden border-2 ${project.featured ? 'border-pink-primary/30' : 'border-transparent'} hover:border-pink-primary/50 group-hover:scale-[1.02] bg-card`}>
                {/* Featured ribbon */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-pink-primary to-pink-rose text-white border-0 shadow-lg">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Featured
                    </Badge>
                  </div>
                )}
                
                {/* Animated gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-primary via-pink-rose to-pink-blush opacity-0 group-hover:opacity-5 transition-opacity blur-2xl" />
                
                {/* Sparkle effect on hover */}
                <motion.div
                  className="absolute top-4 left-4 opacity-0 group-hover:opacity-100"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 text-pink-primary" />
                </motion.div>

                <CardHeader className="relative pt-12">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className="text-5xl filter drop-shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.emoji}
                    </motion.div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs font-semibold border-2 ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-pink-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Key features preview */}
                  <div className="space-y-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-primary mt-1.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-xs font-medium hover:bg-gradient-to-r hover:from-pink-primary/10 hover:to-pink-rose/10 hover:border-pink-primary/30 transition-all cursor-default"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button 
                      asChild 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-pink-primary/50 hover:border-pink-primary hover:bg-pink-primary/5 transition-all group/btn text-pink-primary"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button 
                        asChild 
                        size="sm" 
                        className="flex-1 bg-gradient-to-r from-pink-primary to-pink-rose hover:from-pink-rose hover:to-pink-dark transition-all shadow-glow group/btn text-white"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>

                {/* Animated corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-pink-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
