"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getDict } from "@/lib/i18n";
import { ArrowRight, Clock, Star, Users } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    id: 1,
    titleKey: "desertCamelTrek",
    descriptionKey: "desertCamelTrekDesc",
    image: "/camel-caravan-in-sahara-desert-at-sunset-with-berb.jpg",
    duration: "2 Days",
    groupSize: "2-12 people",
    rating: 4.9,
    price: "€180",
    category: "desert",
    type: "activities",
  },
  {
    id: 2,
    titleKey: "atlasMountainsQuad",
    descriptionKey: "atlasMountainsQuadDesc",
    image: "/quad-biking-in-atlas-mountains-morocco-with-mounta.jpg",
    duration: "Half Day",
    groupSize: "2-8 people",
    rating: 4.8,
    price: "€95",
    category: "adventure",
    type: "activities",
  },
  {
    id: 3,
    titleKey: "hotAirBalloon",
    descriptionKey: "hotAirBalloonDesc",
    image: "/hot-air-balloon-over-marrakech-landscape-at-sunris.jpg",
    duration: "4 Hours",
    groupSize: "2-16 people",
    rating: 4.9,
    price: "€220",
    category: "adventure",
    type: "activities",
  },
  {
    id: 4,
    titleKey: "medinaCulturalTour",
    descriptionKey: "medinaCulturalTourDesc",
    image: "/marrakech-medina-souks-with-traditional-architectu.jpg",
    duration: "Full Day",
    groupSize: "4-15 people",
    rating: 4.7,
    price: "€65",
    category: "cultural",
    type: "activities",
  },
];

interface HighlightsSectionProps {
  locale?: string;
}

export default function HighlightsSection({
  locale = "en",
}: HighlightsSectionProps) {
  const t = getDict(locale);

  return (
    <section className="py-20 bg-background dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-6 text-balance">
            {t.popularExperiences || "Popular"}{" "}
            <span className="text-primary dark:text-orange-400">
              {t.experiences || "Experiences"}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto text-pretty">
            {t.popularExperiencesDesc ||
              "Choose from our most loved adventures that showcase the best of Morocco's culture, landscapes, and traditions."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight) => (
            <Card
              key={highlight.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card dark:bg-gray-800 border-border dark:border-gray-700 overflow-hidden dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40"
            >
              <Link href={`/${locale}/${highlight.type}/${highlight.id}`}>
                <div className="relative overflow-hidden cursor-pointer">
                  <img
                    src={highlight.image || "/placeholder.svg"}
                    alt={t[highlight.titleKey] || highlight.titleKey}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary dark:bg-orange-500 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {highlight.price}
                  </div>
                  <div className="absolute top-4 left-4 bg-black/50 dark:bg-black/70 text-white px-2 py-1 rounded text-xs capitalize">
                    {t[highlight.category] || highlight.category}
                  </div>
                </div>
              </Link>

              <CardContent className="p-6">
                <Link href={`/${locale}/${highlight.type}/${highlight.id}`}>
                  <div className="cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-primary dark:text-orange-400 mr-1" />
                        <span className="text-sm font-medium dark:text-white">
                          {highlight.rating}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {t[
                          `duration_${highlight.duration
                            .replace(/\s+/g, "")
                            .toLowerCase()}`
                        ] || highlight.duration}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-orange-400 transition-colors">
                      {t[highlight.titleKey] || highlight.titleKey}
                    </h3>

                    <p className="text-muted-foreground dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {t[highlight.descriptionKey] || highlight.descriptionKey}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-muted-foreground dark:text-gray-400">
                        <Users className="w-4 h-4 mr-1" />
                        {t.groupSize || "Group size"}: {highlight.groupSize}
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  href={`/${locale}/booking?type=${highlight.type}&id=${
                    highlight.id
                  }&title=${encodeURIComponent(
                    t[highlight.titleKey] || highlight.titleKey
                  )}&price=${encodeURIComponent(highlight.price)}`}
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 dark:bg-orange-500 dark:hover:bg-orange-600 text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground dark:group-hover:bg-orange-600 transition-all">
                    {t.bookNow || "Book Now"}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href={`/${locale}/excursions`}>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-500 dark:hover:text-white bg-transparent"
            >
              {t.viewAllExperiences || "View All Experiences"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
