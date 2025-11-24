import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";

const Projects = () => {
  const [setRef, isInView] = useInView(0.1);
  
  const projects = [
    {
      title: "AI Mock Interview Generator and Preparation",
      description: "AI Mock Interview Generator and Preparation is a platform that allows users to generate mock interviews and prepare for them.",
      emoji: "🎨",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "React", "Mediapipe"],
      features: [
        "Automated AI-driven mock interview generation with customizable difficulty levels",
        "Real-time body language detection using computer vision with actionable feedback",
        "Tone of voice and speech delivery analysis with AI-generated improvement tips",
        "Personalized interview feedback with scoring metrics and progress tracking",
        "User-friendly web interface built with React for seamless interaction",
        "Scalable Flask-based backend with TensorFlow models for NLP & CV tasks"
      ],
      github: "https://github.com/Roksana18cse04/Inprep-AI",
      demo: "https://www.inprep.ai/signup",
      status: "Production"
    },
    {
      title: "MultiAgent Chatbot",
      description: "MultiAgent Chatbot is a platform that allows users to chat with multiple agents.",
      emoji: "🤖", 
      technologies: ["Python", "PyTorch", "NLTK", "Tesseract", "FastAPI", "RAG", "LLM"],
      features: [
        "Multi-agent conversational AI system with role-based expertise",
        "Integrated image editing and generation powered by LLM + vision models",
        "E-commerce & media integration: add, manage, and sell products directly",
        "Advanced Q&A system leveraging retrieval-augmented generation (RAG)",
        "Automatic captioning, content summarization, and post generation for social platforms",
        "FastAPI backend with scalable LLM orchestration pipeline"
      ],
      github: "https://github.com/Roksana18cse04/HarmoniAI",
      demo: "",
      status: "Development"
    },
    {
      title: "Hair Color Shade Matching",
      description: "Hair Color shade matching is a platform that allows users to match hair color shade.",
      emoji: "🔍",
      technologies: ["Python", "OpenCV", "YOLOv8", "TensorRT", "ROS", "ResNet", "K-Means"],
      features: [
        "AI-powered hair shade detection and closest product match using ΔE LAB color distance",
        "Dynamic real-time shade matching with YOLOv8 and OpenCV pipelines",
        "ResNet-based feature extraction for fine-grained color classification",
        "K-Means clustering to segment and map dominant hair colors",
        "Optimized inference with TensorRT for low-latency edge deployment",
        "ROS-based modular integration for robotics and real-time applications"
      ],
      github: "https://github.com/Roksana18cse04/Hair_Extension",
      demo: "https://advancewhite.netlify.app/uploadphoto",
      status: "Production"
    },
  ];    

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "bg-pink-soft/20 text-pink-accent border-pink-accent/50";
      case "Development":
        return "bg-pink-rose/20 text-pink-rose border-pink-rose/50";
      default:
        return "bg-muted/20 text-muted-foreground border-muted";
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-secondary/30" ref={setRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-light/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-pink-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-light via-pink-rose to-pink-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative AI/ML solutions that solve real-world problems and drive business value
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
              <Card className="h-full shadow-card hover:shadow-neon transition-all duration-500 hover:-translate-y-4 relative overflow-hidden border-2 border-transparent hover:border-pink-light/50 group-hover:scale-[1.02]">
                {/* Animated gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-rose via-pink-accent to-pink-light opacity-0 group-hover:opacity-10 transition-opacity blur-2xl" />
                
                {/* Sparkle effect on hover */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-pink-light" />
                </motion.div>

                <CardHeader className="relative">
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
                  <CardTitle className="text-xl font-bold group-hover:text-pink-light transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-xs font-medium hover:bg-gradient-to-r hover:from-pink-rose/20 hover:to-pink-accent/20 hover:border-pink-light/50 transition-all cursor-default"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      asChild 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-pink-light/50 hover:border-pink-light hover:bg-pink-light/10 transition-all group/btn"
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
                        className="flex-1 bg-gradient-to-r from-pink-light to-pink-rose hover:from-pink-rose hover:to-pink-accent transition-all shadow-glow group/btn"
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
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-pink-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
