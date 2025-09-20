import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";
import { useInView } from "@/hooks/useAnimations";

const Projects = () => {
  const [setRef, isInView] = useInView(0.1);
  const projects = [
    {
      title: "AI Mock Interview Generator and Preparation",
      description: "AI Mock Interview Generator and Preparation is a platform that allows users to generate mock interviews and prepare for them.",
      image: "🎨",
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
      image: "🤖", 
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
      image: "🔍",
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
        return "bg-ai-green text-white";
      case "Development":
        return "bg-ai-blue text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20" ref={setRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative AI/ML solutions that solve real-world problems and drive business value
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`shadow-card hover:shadow-glow hover:scale-105 hover:-translate-y-2 transition-all duration-500 group h-full flex flex-col ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{project.image}</div>
                  <Badge className={`${getStatusColor(project.status)} animate-pulse`}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-ai-blue transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-ai-blue mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button size="sm" variant="outline" className="flex-1 hover:scale-105 transition-all duration-300 group" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover:animate-spin" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 gradient-primary text-white hover:shadow-glow hover:scale-105 transition-all duration-300 group" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Play className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <Card className="max-w-2xl mx-auto shadow-card hover:shadow-glow hover:scale-105 transition-all duration-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Interested in Collaboration?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, innovative ideas, 
                and opportunities to create impactful AI solutions.
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="gradient-primary text-white hover:shadow-glow hover:scale-110 transition-all duration-300 group" asChild>
                  <a href="https://github.com/Roksana18cse04" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    View All Projects
                  </a>
                </Button>
                <Button variant="outline" className="hover:shadow-glow hover:scale-110 transition-all duration-300 group" asChild>
                  <a href="https://docs.google.com/document/d/1KyowXvngxtBpmJ0JyS6rtfE_BEGegI5PTBRwr15Exp8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    View Documentation
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;