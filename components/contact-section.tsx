"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, ExternalLink, Send, MapPin, Globe } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can integrate with email service or contact form handler
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your creative vision to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Mail className="w-6 h-6 text-accent" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm always excited to work on new creative projects. Whether you need branding, motion graphics, or
                  digital media solutions, I'm here to help bring your ideas to life.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium text-primary">Languages</p>
                      <p className="text-sm text-muted-foreground">English (Proficient) • Bangla (Native)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium text-primary">Location</p>
                      <p className="text-sm text-muted-foreground">Available for remote work worldwide</p>
                    </div>
                  </div>
                </div>

                {/* Portfolio Links */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Portfolio & Profiles</h4>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-accent/20 text-accent hover:bg-accent/10 bg-transparent"
                      onClick={() => window.open("https://behance.net/fihaahmed", "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Behance Portfolio
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-accent/20 text-accent hover:bg-accent/10 bg-transparent"
                      onClick={() => window.open("https://fiverr.com", "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Fiverr Profile
                    </Button>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">Services I Offer</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Logo Design",
                      "Branding",
                      "Motion Graphics",
                      "Video Editing",
                      "3D Animation",
                      "Social Media Design",
                      "Print Design",
                    ].map((service) => (
                      <Badge key={service} variant="secondary" className="bg-accent/10 text-accent">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary">
                <Send className="w-6 h-6 text-accent" />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="border-accent/20 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="border-accent/20 focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                    Project Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's your project about?"
                    required
                    className="border-accent/20 focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project requirements, timeline, and budget..."
                    rows={6}
                    required
                    className="border-accent/20 focus:border-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  I typically respond within 24 hours. Let's create something amazing together!
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-accent/20">
          <p className="text-muted-foreground">
            © 2024 Hare Reduyan Ahmed. Passionate Motion Graphic Designer creating engaging visual experiences.
          </p>
        </div>
      </div>
    </section>
  )
}
