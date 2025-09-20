import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Neural Style Transfer App",
      description: "Real-time artistic style transfer using deep neural networks. Allows users to transform photos into artwork using famous painting styles.",
      image: "🎨",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "React"],
      features: [
        "Real-time style transfer processing",
        "Multiple artistic styles available", 
        "High-resolution output support",
        "User-friendly web interface"
      ],
      github: "#",
      demo: "#",
      status: "Production"
    },
    {
      title: "Intelligent Document Analyzer",
      description: "AI-powered system for extracting and analyzing information from documents using OCR and NLP techniques.",
      image: "📄", 
      technologies: ["Python", "PyTorch", "NLTK", "Tesseract", "FastAPI"],
      features: [
        "Multi-language OCR support",
        "Entity recognition and extraction",
        "Document classification",
        "Confidence scoring system"
      ],
      github: "#",
      demo: "#",
      status: "Development"
    },
    {
      title: "Predictive Sales Analytics",
      description: "Machine learning platform for sales forecasting and customer behavior analysis with interactive dashboards.",
      image: "📊",
      technologies: ["Python", "Scikit-learn", "Plotly", "PostgreSQL", "Docker"],
      features: [
        "Time series forecasting",
        "Customer segmentation",
        "Interactive visualizations",
        "Automated reporting"
      ],
      github: "#",
      demo: "#",
      status: "Production"
    },
    {
      title: "Computer Vision Quality Control",
      description: "Automated quality inspection system for manufacturing using computer vision and deep learning models.",
      image: "🔍",
      technologies: ["Python", "OpenCV", "YOLOv8", "TensorRT", "ROS"],
      features: [
        "Real-time defect detection",
        "High accuracy classification",
        "Edge deployment ready",
        "Production line integration"
      ],
      github: "#",
      demo: "#",
      status: "Production"
    },
    {
      title: "Chatbot with NLP",
      description: "Intelligent conversational AI system with context understanding and multi-turn dialogue capabilities.",
      image: "🤖",
      technologies: ["Python", "Transformers", "BERT", "Django", "WebSocket"],
      features: [
        "Context-aware responses",
        "Multi-language support",
        "Sentiment analysis",
        "Integration APIs"
      ],
      github: "#",
      demo: "#",
      status: "Production"
    },
    {
      title: "Anomaly Detection System",
      description: "Real-time anomaly detection for IoT sensor data using unsupervised learning and statistical methods.",
      image: "⚠️",
      technologies: ["Python", "TensorFlow", "Apache Kafka", "InfluxDB", "Grafana"],
      features: [
        "Real-time monitoring",
        "Adaptive thresholds",
        "Alert notifications",
        "Historical analysis"
      ],
      github: "#",
      demo: "#",
      status: "Development"
    }
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative AI/ML solutions that solve real-world problems and drive business value
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-bounce group h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-ai-blue transition-smooth">
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
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 gradient-primary text-white" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Play className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Interested in Collaboration?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, innovative ideas, 
                and opportunities to create impactful AI solutions.
              </p>
              <Button className="gradient-primary text-white hover:shadow-glow transition-bounce">
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Projects
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;