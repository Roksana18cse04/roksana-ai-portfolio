import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, GraduationCap, Briefcase, Heart } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "Betopia Group",
      location: "Mohakhali, Dhaka",
      period: "March 2025 - Present",
      description: [
        "Working on cutting-edge AI/ML projects as part of the innovative team",
        "Developing intelligent solutions for business automation and optimization",
        "Collaborating with cross-functional teams to deliver impactful AI solutions",
        "Contributing to the advancement of AI technologies in real-world applications"
      ],
      technologies: ["Python", "Machine Learning", "AI", "Data Science", "Deep Learning"],
      note: "Sister concern of Softvence Agency"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      specialization: "Machine Learning & AI",
      institution: "Gopalganj Science and Technology University",
      period: "2019-2024",
      achievements: ["Project Title: Mock Test AI FeedBack Generator", "GPA: 3.25/4.0"]
    },
 
  ];

  return (
    <section id="experience" className="py-20 bg-pink-light/30">
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
              <Briefcase className="w-6 h-6 mr-3 text-pink-primary" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-smooth bg-card border-pink-soft/30">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">{exp.title}</CardTitle>
                    <div className="space-y-2">
                      <div className="text-lg font-semibold text-pink-primary">{exp.company}</div>
                      {exp.note && (
                        <div className="text-sm text-pink-rose font-medium italic">
                          {exp.note}
                        </div>
                      )}
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
                          <span className="w-2 h-2 rounded-full bg-pink-primary mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-pink-soft text-pink-primary">
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
              <GraduationCap className="w-6 h-6 mr-3 text-pink-rose" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-smooth bg-card border-pink-soft/30">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                      <div className="text-pink-rose font-semibold">{edu.specialization}</div>
                      <div className="text-lg font-semibold text-foreground">{edu.institution}</div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start">
                            <Award className="w-4 h-4 text-pink-rose mt-1 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Certifications */}
              <Card className="shadow-card bg-card border-pink-soft/30">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-pink-primary fill-pink-primary/30" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-foreground font-medium">Data Analysis with Python</span>
                        <div className="text-sm text-muted-foreground">EDGE Digital Skills for Students</div>
                        <div className="text-xs text-pink-rose">BSMRSTU_EDGE</div>
                      </div>
                      <Badge variant="outline" className="border-pink-primary text-pink-primary">2024</Badge>
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
