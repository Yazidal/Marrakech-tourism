"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

const highlights = [
  {
    id: 1,
    title: "Desert Camel Trek",
    description: "Experience the Sahara on a traditional camel caravan with overnight camping under the stars.",
    image: "/camel-caravan-in-sahara-desert-at-sunset-with-berb.jpg",
    duration: "2 Days",
    groupSize: "2-12 people",
    rating: 4.9,
    price: "€180",
    category: "desert",
    type: "activity", // This will be a desert activity
  },
  {
    id: 2,
    title: "Atlas Mountains Quad",
    description: "Thrilling quad bike adventure through the rugged Atlas Mountains and Berber villages.",
    image: "/quad-biking-in-atlas-mountains-morocco-with-mounta.jpg",
    duration: "Half Day",
    groupSize: "2-8 people",
    rating: 4.8,
    price: "€95",
    category: "adventure",
    type: "activity", // This will be an adventure activity
  },
  {
    id: 3,
    title: "Hot Air Balloon",
    description: "Soar above the Moroccan landscape at sunrise with champagne breakfast included.",
    image: "/hot-air-balloon-over-marrakech-landscape-at-sunris.jpg",
    duration: "4 Hours",
    groupSize: "2-16 people",
    rating: 4.9,
    price: "€220",
    category: "adventure",
    type: "activity", // This will be an adventure activity
  },
  {
    id: 4,
    title: "Medina Cultural Tour",
    description: "Discover the secrets of Marrakech's ancient medina with expert local guides.",
    image: "/marrakech-medina-souks-with-traditional-architectu.jpg",
    duration: "Full Day",
    groupSize: "4-15 people",
    rating: 4.7,
    price: "€65",
    category: "cultural",
    type: "activity", // This will be a cultural activity
  },
]

export default function HighlightsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Popular <span className="text-primary">Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose from our most loved adventures that showcase the best of Morocco's culture, landscapes, and
            traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight) => (
            <Card
              key={highlight.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden"
            >
              <Link href={`/${highlight.type}s/${highlight.id}`}>
                <div className="relative overflow-hidden cursor-pointer">
                  <img
                    src={highlight.image || "/placeholder.svg"}
                    alt={highlight.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {highlight.price}
                  </div>
                  <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs capitalize">
                    {highlight.category}
                  </div>
                </div>
              </Link>

              <CardContent className="p-6">
                <Link href={`/${highlight.type}s/${highlight.id}`}>
                  <div className="cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-primary mr-1" />
                        <span className="text-sm font-medium">{highlight.rating}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {highlight.duration}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{highlight.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        {highlight.groupSize}
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  href={`/booking?type=${highlight.type}&id=${highlight.id}&title=${encodeURIComponent(highlight.title)}&price=${encodeURIComponent(highlight.price)}`}
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    Book Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/excursions">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View All Experiences
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
