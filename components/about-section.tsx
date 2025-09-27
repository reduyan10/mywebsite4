"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Globe, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating visual stories that connect with audiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl flex items-center justify-center animate-float">
              <img
                src="/professional-motion-graphics-designer-portrait.jpg"
                alt="Hare Reduyan Ahmed - Motion Graphics Designer"
                className="w-80 h-80 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-primary mb-4">Creative Motion Graphics Designer</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 4 years of professional experience, I specialize in creating compelling visual narratives
                through motion graphics, branding, and digital media. My passion lies in transforming ideas into
                engaging visual experiences that resonate with audiences and strengthen brand identities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I've successfully delivered 50+ branding packages and enhanced 100+ images for diverse clients, always
                focusing on quality, creativity, and client satisfaction.
              </p>
            </div>

            {/* Education & Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-accent/20 hover:border-accent/40 transition-colors duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-primary">Education</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Professional Motion Graphic Design</p>
                  <p className="text-xs text-muted-foreground">Creative IT Institute (4 Years)</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/40 transition-colors duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-primary">Achievement</span>
                  </div>
                  <p className="text-sm text-muted-foreground">50+ Successful Projects</p>
                  <p className="text-xs text-muted-foreground">High Client Satisfaction</p>
                </CardContent>
              </Card>
            </div>

            {/* Languages */}
            <div>
              <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-accent" />
                Languages
              </h4>
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  English - Proficient
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  Bangla - Native
                </Badge>
              </div>
            </div>

            {/* Passion Statement */}
            <div className="bg-accent/5 p-6 rounded-xl border border-accent/20">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-accent mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-2">My Passion</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I'm passionate about continuous learning and providing top-quality creative solutions. Every project
                    is an opportunity to push creative boundaries and deliver exceptional results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
