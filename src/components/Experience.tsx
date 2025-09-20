import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior AI/ML Engineer",
      company: "TechCorp Solutions",
      location: "Remote",
      period: "2022 - Present",
      description: [
        "Led development of computer vision models for automated quality control, improving accuracy by 35%",
        "Implemented MLOps pipelines using Kubernetes and Docker for seamless model deployment",
        "Collaborated with cross-functional teams to deliver AI solutions serving 1M+ users daily",
        "Mentored junior engineers and conducted technical workshops on deep learning"
      ],
      technologies: ["Python", "TensorFlow", "Kubernetes", "AWS", "Docker"]
    },
    {
      title: "Machine Learning Engineer",
      company: "DataVision AI",
      location: "New York, NY",
      period: "2020 - 2022",
      description: [
        "Developed NLP models for sentiment analysis and text classification with 92% accuracy",
        "Built recommendation systems using collaborative filtering and deep learning",
        "Optimized model inference time by 40% through quantization and pruning techniques",
        "Created data preprocessing pipelines handling 10TB+ of daily data"
      ],
      technologies: ["PyTorch", "Scikit-learn", "Apache Spark", "MongoDB", "GCP"]
    },
    {
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "San Francisco, CA",
      period: "2019 - 2020",
      description: [
        "Analyzed large datasets to identify business insights and growth opportunities",
        "Developed predictive models for customer churn reduction, saving $2M annually",
        "Created interactive dashboards and visualizations for stakeholder reporting",
        "Conducted A/B testing and statistical analysis for product optimization"
      ],
      technologies: ["Python", "R", "SQL", "Tableau", "Pandas"]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      specialization: "Machine Learning & AI",
      institution: "Stanford University",
      period: "2017 - 2019",
      achievements: ["Thesis on Deep Reinforcement Learning", "GPA: 3.9/4.0"]
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      specialization: "Software Development",
      institution: "MIT",
      period: "2013 - 2017",
      achievements: ["Magna Cum Laude", "President, AI Club"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">Experience & Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of continuous learning and impactful contributions to the AI/ML field
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-6 h-6 rounded-full gradient-primary mr-3"></span>
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">{exp.title}</CardTitle>
                    <div className="space-y-2">
                      <div className="text-lg font-semibold text-ai-blue">{exp.company}</div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 rounded-full bg-ai-blue mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-6 h-6 rounded-full gradient-primary mr-3"></span>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-smooth">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                      <div className="text-ai-purple font-semibold">{edu.specialization}</div>
                      <div className="text-lg font-semibold text-foreground">{edu.institution}</div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start">
                            <span className="w-2 h-2 rounded-full bg-ai-purple mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Certifications */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground">Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">AWS Certified Machine Learning</span>
                      <Badge variant="outline">2023</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">TensorFlow Developer Certificate</span>
                      <Badge variant="outline">2022</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Google Cloud ML Engineer</span>
                      <Badge variant="outline">2022</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;