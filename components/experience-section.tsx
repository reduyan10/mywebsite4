"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, TrendingUp, Users, Star } from "lucide-react"

export function ExperienceSection() {
  const achievements = [
    {
      icon: Briefcase,
      number: "50+",
      title: "Branding Packages",
      description:
        "Complete branding solutions for startups and businesses including logos, business cards, and brochures",
    },
    {
      icon: TrendingUp,
      number: "100+",
      title: "Images Enhanced",
      description: "Professional retouching and enhancement for e-commerce and personal branding projects",
    },
    {
      icon: Users,
      number: "4+",
      title: "Years Experience",
      description: "Professional motion graphic design experience with continuous learning and skill development",
    },
    {
      icon: Star,
      number: "High",
      title: "Client Satisfaction",
      description: "Consistent positive feedback and repeat clients on freelance platforms like Fiverr",
    },
  ]

  const projects = [
    {
      title: "Animated Promotional Videos",
      description:
        "Created engaging animated promotional videos for social media campaigns, achieving higher engagement rates for clients",
      skills: ["After Effects", "Motion Graphics", "Social Media Marketing"],
      impact: "Increased engagement rates",
    },
    {
      title: "3D Character Animations",
      description: "Designed and animated 3D characters and motion intros for YouTube channels and online shows",
      skills: ["Blender", "3D Animation", "Character Design"],
      impact: "Enhanced brand identity",
    },
    {
      title: "Brand Identity Systems",
      description: "Developed comprehensive branding packages including logos, color schemes, and brand guidelines",
      skills: ["Logo Design", "Branding", "Brand Strategy"],
      impact: "Strengthened brand recognition",
    },
    {
      title: "E-commerce Visual Content",
      description: "Enhanced product images and created marketing materials for online businesses",
      skills: ["Photoshop", "Product Photography", "Digital Marketing"],
      impact: "Improved sales conversion",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Experience & Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proven track record of delivering high-quality creative solutions
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={achievement.title}
              className="text-center border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <achievement.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">{achievement.number}</div>
                  <h3 className="font-semibold text-primary mb-2">{achievement.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Projects */}
        <div>
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-primary">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">Skills Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-accent/10 text-accent">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/50 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-primary">Impact:</span>
                      <span className="text-sm text-accent">{project.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Education & Training</h3>
          <div className="max-w-2xl mx-auto">
            <Card className="border-accent/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">Professional Motion Graphic Design</h4>
                      <p className="text-accent font-medium">Creative IT Institute</p>
                      <p className="text-sm text-muted-foreground">
                        4 Years • Comprehensive training in motion graphics, animation, and digital design
                      </p>
                    </div>
                  </div>

                  <div className="border-l-2 border-accent/20 ml-6 pl-6 space-y-3">
                    <div>
                      <h5 className="font-medium text-primary">Higher Secondary Certificate (HSC)</h5>
                      <p className="text-sm text-muted-foreground">B.M Union School & College • 2024</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-primary">Secondary School Certificate (SSC)</h5>
                      <p className="text-sm text-muted-foreground">Hazi Siraj Uddin Memorial High School • 2021</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
