import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, GraduationCap, Briefcase, Zap, Terminal, Cpu } from "lucide-react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Cyberpunk Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-background to-surface-dark" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, hsl(var(--cyber-cyan) / 0.1) 50px, hsl(var(--cyber-cyan) / 0.1) 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, hsl(var(--cyber-cyan) / 0.1) 50px, hsl(var(--cyber-cyan) / 0.1) 51px)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 mb-6">
            <Terminal className="w-4 h-4 text-cyber-purple" />
            <span className="text-cyber-purple text-sm font-mono">career.timeline()</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of continuous learning and impactful contributions to the AI/ML field
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Experience Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 flex items-center text-foreground">
              <div className="w-10 h-10 rounded-lg bg-cyber-cyan/20 border border-cyber-cyan/30 flex items-center justify-center mr-3">
                <Briefcase className="w-5 h-5 text-cyber-cyan" />
              </div>
              <span className="bg-gradient-to-r from-cyber-cyan to-cyber-blue bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="glass-effect border-cyber-cyan/20 hover:border-cyber-cyan/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,245,255,0.15)] group overflow-hidden">
                    {/* Animated top border */}
                    <div className="h-1 w-full bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple" />
                    
                    <CardHeader className="relative">
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-cyber-cyan/10 flex items-center justify-center group-hover:animate-pulse">
                        <Cpu className="w-6 h-6 text-cyber-cyan" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">{exp.title}</CardTitle>
                      <div className="space-y-2">
                        <div className="text-lg font-semibold text-cyber-cyan">{exp.company}</div>
                        {exp.note && (
                          <div className="text-sm text-cyber-purple font-medium italic font-mono">
                            // {exp.note}
                          </div>
                        )}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20">
                            <Calendar className="w-4 h-4 mr-2 text-cyber-cyan" />
                            {exp.period}
                          </div>
                          <div className="flex items-center px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20">
                            <MapPin className="w-4 h-4 mr-2 text-cyber-blue" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start group/item">
                            <Zap className="w-4 h-4 text-cyber-cyan mt-1 mr-3 flex-shrink-0 group-hover/item:animate-pulse" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="text-xs border-cyber-cyan/50 text-cyber-cyan bg-cyber-cyan/10 hover:bg-cyber-cyan/20 transition-colors font-mono"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 flex items-center text-foreground">
              <div className="w-10 h-10 rounded-lg bg-cyber-purple/20 border border-cyber-purple/30 flex items-center justify-center mr-3">
                <GraduationCap className="w-5 h-5 text-cyber-purple" />
              </div>
              <span className="bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">
                Education
              </span>
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="glass-effect border-cyber-purple/20 hover:border-cyber-purple/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                    <div className="h-1 w-full bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-orange" />
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/30">
                          <span className="text-cyber-purple font-semibold text-sm">{edu.specialization}</span>
                        </div>
                        <div className="text-lg font-semibold text-foreground">{edu.institution}</div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <div className="px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20">
                            <Calendar className="w-4 h-4 mr-2 inline text-cyber-blue" />
                            {edu.period}
                          </div>
                        </div>
                        <ul className="space-y-2 pt-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-muted-foreground flex items-start">
                              <Award className="w-4 h-4 text-cyber-pink mt-1 mr-3 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Certifications */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="glass-effect border-cyber-green/20 hover:border-cyber-green/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                  <div className="h-1 w-full bg-gradient-to-r from-cyber-green via-cyber-cyan to-cyber-blue" />
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-cyber-green/20 border border-cyber-green/30 flex items-center justify-center mr-3">
                        <Award className="w-4 h-4 text-cyber-green" />
                      </div>
                      <span className="bg-gradient-to-r from-cyber-green to-cyber-cyan bg-clip-text text-transparent">
                        Certifications
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-foreground font-medium">Data Analysis with Python</span>
                          <div className="text-sm text-muted-foreground">EDGE Digital Skills for Students</div>
                          <div className="text-xs text-cyber-green font-mono">// BSMRSTU_EDGE</div>
                        </div>
                        <Badge className="bg-cyber-green/20 text-cyber-green border-cyber-green/30 hover:bg-cyber-green/30">
                          2024
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;