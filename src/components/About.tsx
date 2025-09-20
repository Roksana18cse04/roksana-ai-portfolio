import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Lightbulb, Target } from "lucide-react";
import aiTechImage from "@/assets/ai-tech.jpg";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Deep learning, neural networks, and advanced machine learning algorithms"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end development from data pipelines to production systems"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Constantly exploring cutting-edge technologies and methodologies"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Translating complex business challenges into technical solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate AI/ML engineer with a mission to create intelligent systems that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img 
                src={aiTechImage} 
                alt="AI Technology" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 gradient-accent opacity-20" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4">
              <Badge className="gradient-primary text-white text-lg px-4 py-2 shadow-glow">
                AI/ML Expert
              </Badge>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Transforming Ideas into Intelligent Solutions
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a dedicated AI/ML engineer with extensive experience in developing 
                and deploying machine learning models that solve real-world problems. 
                My expertise spans from deep learning and neural networks to MLOps 
                and production-scale AI systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong foundation in both theoretical concepts and practical 
                implementation, I bridge the gap between cutting-edge research and 
                business applications, ensuring that AI solutions deliver measurable value.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-ai-blue">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ai-purple">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-bounce group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;