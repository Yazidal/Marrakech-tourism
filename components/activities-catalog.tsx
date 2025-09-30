"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { activities } from "@/data/activities";
import { getDict } from "@/lib/i18n";
import { ArrowRight, Clock, Filter, MapPin, Star, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// removed local activities array – now imported from data/activities

const categories = [
  { id: "all", name: "All Activities", count: activities.length },
  {
    id: "adventure",
    name: "Adventure",
    count: activities.filter((a) => a.category === "adventure").length,
  },
  {
    id: "animals",
    name: "Animals",
    count: activities.filter((a) => a.category === "animals").length,
  },
  {
    id: "workshop",
    name: "Workshop",
    count: activities.filter((a) => a.category === "workshop").length,
  },
  {
    id: "culinary",
    name: "Culinary",
    count: activities.filter((a) => a.category === "culinary").length,
  },
  {
    id: "aerial",
    name: "Aerial",
    count: activities.filter((a) => a.category === "aerial").length,
  },
];

export default function ActivitiesCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const locale = ["en", "fr", "es"].includes(segments[0]) ? segments[0] : "en";
  const t = getDict(locale);

  const filteredActivities = activities.filter(
    (activity) =>
      selectedCategory === "all" || activity.category === selectedCategory
  );

  const sortedActivities = [...filteredActivities].sort((a, b) => {
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
            {t.marrakechActivities}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t.activitiesDescription}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Category Filters */}
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <Filter className="w-5 h-5 text-primary mr-2" />
              <span className="font-semibold text-foreground">
                {t.categories}
              </span>
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
              <span className="font-semibold text-foreground">{t.sortBy}</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border border-border rounded-md bg-background text-foreground"
            >
              <option value="popular">{t.mostPopular}</option>
              <option value="rating">{t.highestRated}</option>
              <option value="price-low">{t.priceLowToHigh}</option>
              <option value="price-high">{t.priceHighToLow}</option>
              <option value="duration">{t.duration}</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            {t.showing} {sortedActivities.length}{" "}
            {sortedActivities.length !== 1 ? t.activities : t.activity}
            {selectedCategory !== "all" &&
              ` ${t.in} ${
                categories.find((c) => c.id === selectedCategory)?.name
              }`}
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
                  <Badge
                    variant="secondary"
                    className="bg-black/50 text-white capitalize"
                  >
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
                    <span className="text-sm font-medium">
                      {activity.rating}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {activity.duration}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {activity.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {activity.description}
                </p>

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
                      {t.viewDetails}
                    </Button>
                  </Link>
                  <Link
                    href={`/booking?type=activity&id=${
                      activity.id
                    }&title=${encodeURIComponent(
                      activity.title
                    )}&price=${encodeURIComponent(activity.price)}`}
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
            <p className="text-xl text-muted-foreground mb-4">
              {t.noActivitiesFound}
            </p>
            <Button
              onClick={() => setSelectedCategory("all")}
              variant="outline"
            >
              {t.viewAllActivities}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
