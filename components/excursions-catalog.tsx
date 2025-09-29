"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { excursions } from "@/data/excursions";
import { ArrowRight, Clock, Filter, MapPin, Star, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { id: "all", name: "All Excursions", count: excursions.length },
  {
    id: "desert",
    name: "Desert",
    count: excursions.filter((e) => e.category === "desert").length,
  },
  {
    id: "adventure",
    name: "Adventure",
    count: excursions.filter((e) => e.category === "adventure").length,
  },
  {
    id: "cultural",
    name: "Cultural",
    count: excursions.filter((e) => e.category === "cultural").length,
  },
  {
    id: "coastal",
    name: "Coastal",
    count: excursions.filter((e) => e.category === "coastal").length,
  },
  {
    id: "nature",
    name: "Nature",
    count: excursions.filter((e) => e.category === "nature").length,
  },
];

export default function ExcursionsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const filteredExcursions = excursions.filter(
    (excursion) =>
      selectedCategory === "all" || excursion.category === selectedCategory
  );

  const sortedExcursions = [...filteredExcursions].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return (
          Number.parseInt(a.price.replace("€", "")) -
          Number.parseInt(b.price.replace("€", ""))
        );
      case "price-high":
        return (
          Number.parseInt(b.price.replace("€", "")) -
          Number.parseInt(a.price.replace("€", ""))
        );
      case "rating":
        return b.rating - a.rating;
      case "duration":
        return Number.parseInt(a.duration) - Number.parseInt(b.duration);
      default:
        return b.rating - a.rating;
    }
  });

  return (
    <section className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Marrakech <span className="text-primary">Excursions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Embark on unforgettable multi-day adventures that showcase the
            diverse landscapes, rich culture, and authentic experiences Morocco
            has to offer.
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
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
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
            Showing {sortedExcursions.length} excursion
            {sortedExcursions.length !== 1 ? "s" : ""}
            {selectedCategory !== "all" &&
              ` in ${categories.find((c) => c.id === selectedCategory)?.name}`}
          </p>
        </div>

        {/* Excursions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedExcursions.map((excursion) => (
            <Card
              key={excursion.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={excursion.image || "/placeholder.svg"}
                  alt={excursion.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-lg font-bold">
                  {excursion.price}
                </div>
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-black/50 text-white capitalize"
                  >
                    {excursion.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{excursion.location}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-primary mr-1" />
                    <span className="text-sm font-medium">
                      {excursion.rating}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {excursion.duration}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {excursion.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {excursion.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    {excursion.groupSize}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {excursion.highlights
                      .slice(0, 3)
                      .map((highlight, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    {excursion.highlights.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{excursion.highlights.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/excursions/${excursion.id}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      View Details
                    </Button>
                  </Link>
                  <Link
                    href={`/booking?type=excursion&id=${
                      excursion.id
                    }&title=${encodeURIComponent(
                      excursion.title
                    )}&price=${encodeURIComponent(excursion.price)}`}
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
        {sortedExcursions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">
              No excursions found for the selected category.
            </p>
            <Button
              onClick={() => setSelectedCategory("all")}
              variant="outline"
            >
              View All Excursions
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
