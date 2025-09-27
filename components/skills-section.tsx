"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Video, Layers, Code } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Palette,
      title: "Graphic Design",
      skills: ["Logo Design", "Branding", "Flyers", "Brochures", "Social Media Design", "T-Shirts", "Packaging"],
      color: "text-blue-500",
    },
    {
      icon: Video,
      title: "Motion Graphics & Video",
      skills: [
        "Logo Animation",
        "Lower Thirds",
        "Character Animation",
        "Social Media Promos",
        "Kinetic Typography",
        "3D Animations",
        "Broadcast Intros",
      ],
      color: "text-purple-500",
    },
    {
      icon: Layers,
      title: "Software Expertise",
      skills: ["Adobe After Effects", "Adobe Premiere Pro", "Photoshop", "Illustrator", "InDesign", "Blender", "Figma"],
      color: "text-green-500",
    },
    {
      icon: Code,
      title: "Additional Tools",
      skills: ["MS Office Suite", "Creative Problem Solving", "Project Management", "Client Communication"],
      color: "text-orange-500",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set in design, animation, and digital media production
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300`}
                  >
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <span className="text-primary">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted hover:bg-accent/10 hover:text-accent transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { software: "Adobe After Effects", level: 95 },
              { software: "Adobe Photoshop", level: 90 },
              { software: "Adobe Illustrator", level: 88 },
              { software: "Adobe Premiere Pro", level: 85 },
              { software: "Blender", level: 80 },
              { software: "Figma", level: 75 },
            ].map((item) => (
              <div key={item.software} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-primary">{item.software}</span>
                  <span className="text-accent">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-accent to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
