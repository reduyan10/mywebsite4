"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Play, Eye } from "lucide-react"

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const portfolioItems = [
    {
      id: 1,
      title: "Brand Identity Package",
      category: "Branding",
      description: "Complete branding solution including logo, business cards, and brand guidelines",
      image: "/modern-logo-design-branding-package.jpg",
      tags: ["Logo Design", "Branding", "Print Design"],
      type: "image",
    },
    {
      id: 2,
      title: "Animated Logo Reveal",
      category: "Animation",
      description: "Dynamic logo animation with kinetic typography and smooth transitions",
      image: "/animated-logo-motion-graphics.jpg",
      tags: ["Logo Animation", "Motion Graphics", "After Effects"],
      type: "video",
    },
    {
      id: 3,
      title: "Social Media Campaign",
      category: "Digital Media",
      description: "Engaging social media graphics and animated posts for brand promotion",
      image: "/social-media-graphics-design.jpg",
      tags: ["Social Media", "Digital Design", "Marketing"],
      type: "image",
    },
    {
      id: 4,
      title: "3D Character Animation",
      category: "Animation",
      description: "Custom 3D character design and animation for YouTube channel intro",
      image: "/3d-character-animation-blender.jpg",
      tags: ["3D Animation", "Character Design", "Blender"],
      type: "video",
    },
    {
      id: 5,
      title: "Product Packaging Design",
      category: "Branding",
      description: "Eye-catching packaging design that enhances product appeal",
      image: "/product-packaging-design-modern.jpg",
      tags: ["Packaging", "Product Design", "Print"],
      type: "image",
    },
    {
      id: 6,
      title: "Kinetic Typography Video",
      category: "Animation",
      description: "Engaging kinetic typography animation for promotional content",
      image: "/kinetic-typography-motion-graphics.jpg",
      tags: ["Typography", "Motion Graphics", "Video"],
      type: "video",
    },
  ]

  const categories = ["All", "Branding", "Animation", "Digital Media"]

  const filteredItems =
    activeFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Showcasing my best work in motion graphics, branding, and digital media
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`${
                  activeFilter === category
                    ? "bg-accent text-accent-foreground"
                    : "border-accent/20 text-accent hover:bg-accent/10"
                } transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="group border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                    >
                      {item.type === "video" ? <Play className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                    {item.category}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-accent/20 text-muted-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Links */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => window.open("https://behance.net/fihaahmed", "_blank")}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Full Portfolio on Behance
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              onClick={() => window.open("https://fiverr.com", "_blank")}
            >
              Hire Me on Fiverr
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
