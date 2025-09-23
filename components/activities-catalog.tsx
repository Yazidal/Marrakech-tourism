"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, ArrowRight, Filter, MapPin } from "lucide-react"
import Link from "next/link"

const activities = [
  {
    id: 1,
    title: "Quad Biking Adventure",
    description: "Thrilling quad bike ride through the Atlas Mountains and traditional Berber villages.",
    image: "/quad-biking-in-atlas-mountains-morocco-with-mounta.jpg",
    duration: "4 Hours",
    groupSize: "2-8 people",
    rating: 4.8,
    price: "€95",
    category: "adventure",
    location: "Atlas Mountains",
    highlights: ["Mountain trails", "Village visits", "Professional guide", "Safety equipment"],
  },
  {
    id: 2,
    title: "Hot Air Balloon Flight",
    description: "Magical sunrise balloon flight over Marrakech with champagne breakfast included.",
    image: "/hot-air-balloon-over-marrakech-landscape-at-sunris.jpg",
    duration: "4 Hours",
    groupSize: "2-16 people",
    rating: 4.9,
    price: "€220",
    category: "adventure",
    location: "Marrakech Outskirts",
    highlights: ["Sunrise flight", "Champagne breakfast", "Aerial photography", "Certificate"],
  },
  {
    id: 3,
    title: "Medina Walking Tour",
    description: "Guided exploration of Marrakech's ancient medina, souks, and historical landmarks.",
    image: "/marrakech-medina-souks-with-traditional-architectu.jpg",
    duration: "3 Hours",
    groupSize: "4-15 people",
    rating: 4.7,
    price: "€35",
    category: "cultural",
    location: "Marrakech Medina",
    highlights: ["Historical sites", "Local markets", "Traditional crafts", "Mint tea tasting"],
  },
  {
    id: 4,
    title: "Cooking Class Experience",
    description: "Learn to prepare authentic Moroccan dishes with a local chef in a traditional riad.",
    image: "/placeholder.svg?key=cooking1",
    duration: "5 Hours",
    groupSize: "4-12 people",
    rating: 4.9,
    price: "€75",
    category: "cultural",
    location: "Traditional Riad",
    highlights: ["Market visit", "Hands-on cooking", "Recipe booklet", "Full meal included"],
  },
  {
    id: 5,
    title: "Hammam & Spa Treatment",
    description: "Relaxing traditional Moroccan spa experience with hammam, massage, and argan oil treatments.",
    image: "/placeholder.svg?key=spa1",
    duration: "2 Hours",
    groupSize: "1-4 people",
    rating: 4.6,
    price: "€60",
    category: "wellness",
    location: "Luxury Spa",
    highlights: ["Traditional hammam", "Argan oil massage", "Relaxation area", "Mint tea service"],
  },
  {
    id: 6,
    title: "Horseback Riding",
    description: "Scenic horseback ride through palm groves and traditional villages around Marrakech.",
    image: "/placeholder.svg?key=horse1",
    duration: "2 Hours",
    groupSize: "2-8 people",
    rating: 4.5,
    price: "€55",
    category: "adventure",
    location: "Palmeraie",
    highlights: ["Palm grove trails", "Village encounters", "Professional instruction", "Photo opportunities"],
  },
  {
    id: 7,
    title: "Garden Tours",
    description: "Visit Marrakech's most beautiful gardens including Majorelle, Menara, and secret gardens.",
    image: "/placeholder.svg?key=garden1",
    duration: "4 Hours",
    groupSize: "4-20 people",
    rating: 4.4,
    price: "€45",
    category: "cultural",
    location: "Various Gardens",
    highlights: ["Majorelle Garden", "Botanical diversity", "Photography", "Historical insights"],
  },
  {
    id: 8,
    title: "Desert Sunset Camel Ride",
    description: "Short camel trek to watch the sunset over the desert dunes with traditional tea ceremony.",
    image: "/camel-caravan-in-sahara-desert-at-sunset-with-berb.jpg",
    duration: "3 Hours",
    groupSize: "2-12 people",
    rating: 4.8,
    price: "€65",
    category: "desert",
    location: "Agafay Desert",
    highlights: ["Camel trekking", "Sunset viewing", "Tea ceremony", "Desert photography"],
  },
]

const categories = [
  { id: "all", name: "All Activities", count: activities.length },
  { id: "adventure", name: "Adventure", count: activities.filter((a) => a.category === "adventure").length },
  { id: "cultural", name: "Cultural", count: activities.filter((a) => a.category === "cultural").length },
  { id: "desert", name: "Desert", count: activities.filter((a) => a.category === "desert").length },
  { id: "wellness", name: "Wellness", count: activities.filter((a) => a.category === "wellness").length },
]

export default function ActivitiesCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  const filteredActivities = activities.filter(
    (activity) => selectedCategory === "all" || activity.category === selectedCategory,
  )

  const sortedActivities = [...filteredActivities].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return Number.parseInt(a.price.replace("€", "")) - Number.parseInt(b.price.replace("€", ""))
      case "price-high":
        return Number.parseInt(b.price.replace("€", "")) - Number.parseInt(a.price.replace("€", ""))
      case "rating":
        return b.rating - a.rating
      case "duration":
        return Number.parseInt(a.duration) - Number.parseInt(b.duration)
      default:
        return b.rating - a.rating
    }
  })

  return (
    <section className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Marrakech <span className="text-primary">Activities</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover authentic Moroccan experiences with our curated selection of day activities. From cultural
            immersion to thrilling adventures, find your perfect Marrakech moment.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Category Filters */}
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <Filter className="w-5 h-5 text-primary mr-2" />
              <span className="font-semibold text-foreground">Categories</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="lg:w-64">
            <div className="flex items-center mb-4">
              <span className="font-semibold text-foreground">Sort by</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border border-border rounded-md bg-background text-foreground"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration">Duration</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {sortedActivities.length} activit{sortedActivities.length !== 1 ? "ies" : "y"}
            {selectedCategory !== "all" && ` in ${categories.find((c) => c.id === selectedCategory)?.name}`}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedActivities.map((activity) => (
            <Card
              key={activity.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-lg font-bold">
                  {activity.price}
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-black/50 text-white capitalize">
                    {activity.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{activity.location}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-primary mr-1" />
                    <span className="text-sm font-medium">{activity.rating}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {activity.duration}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {activity.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{activity.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    {activity.groupSize}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {activity.highlights.slice(0, 3).map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {activity.highlights.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{activity.highlights.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/activities/${activity.id}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      View Details
                    </Button>
                  </Link>
                  <Link
                    href={`/booking?type=activity&id=${activity.id}&title=${encodeURIComponent(activity.title)}&price=${encodeURIComponent(activity.price)}`}
                    className="flex-1"
                  >
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Book Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {sortedActivities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">No activities found for the selected category.</p>
            <Button onClick={() => setSelectedCategory("all")} variant="outline">
              View All Activities
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
