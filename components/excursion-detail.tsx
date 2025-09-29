"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { excursionData } from "@/data/excursion-details";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Heart,
  MapPin,
  Share2,
  Shield,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// data moved to data/excursion-details

export default function ExcursionDetail({ id }: { id: string }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const excursion = excursionData[id as keyof typeof excursionData];

  if (!excursion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Excursion Not Found
          </h1>
          <Link href="/excursions">
            <Button>Back to Excursions</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-8 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6">
          <Link
            href="/excursions"
            className="flex items-center text-primary hover:text-primary/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Excursions
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative mb-4">
                <img
                  src={excursion.images[selectedImage] || "/placeholder.svg"}
                  alt={excursion.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-black/50 text-white capitalize"
                  >
                    {excursion.category}
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {excursion.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-md ${
                      selectedImage === index ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt=""
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Title and Basic Info */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {excursion.title}
                  </h1>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {excursion.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {excursion.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {excursion.groupSize}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsLiked(!isLiked)}
                    className={isLiked ? "text-red-500" : ""}
                  >
                    <Heart
                      className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`}
                    />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-primary mr-1" />
                  <span className="font-semibold">{excursion.rating}</span>
                  <span className="text-muted-foreground ml-1">
                    ({excursion.reviewCount} reviews)
                  </span>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">Best Seller</Badge>
                  <Badge variant="outline">Free Cancellation</Badge>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {excursion.description}
              </p>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="included">What's Included</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      About This Experience
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {excursion.longDescription}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {excursion.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="itinerary" className="mt-6">
                <div className="space-y-6">
                  {excursion.itinerary.map((day, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                            {day.day}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-2">
                              {day.title}
                            </h4>
                            <p className="text-muted-foreground mb-3">
                              {day.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {day.highlights.map((highlight, idx) => (
                                <Badge
                                  key={idx}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="included" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-green-600">
                      ✓ What's Included
                    </h3>
                    <ul className="space-y-2">
                      {excursion.included.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-red-600">
                      ✗ What's Not Included
                    </h3>
                    <ul className="space-y-2">
                      {excursion.notIncluded.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="details" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <span className="font-semibold">Meeting Point:</span>
                        <p className="text-muted-foreground">
                          {excursion.meetingPoint}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <div>
                        <span className="font-semibold">Difficulty:</span>
                        <p className="text-muted-foreground">
                          {excursion.difficulty}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <span className="font-semibold">Best Time:</span>
                        <p className="text-muted-foreground">
                          {excursion.bestTime}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <span className="font-semibold">
                          Cancellation Policy:
                        </span>
                        <p className="text-muted-foreground">
                          {excursion.cancellation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {excursion.price}
                  </div>
                  <div className="text-muted-foreground">per person</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Select Date
                    </label>
                    <input
                      type="date"
                      className="w-full p-3 border border-border rounded-md bg-background"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Number of Travelers
                    </label>
                    <select className="w-full p-3 border border-border rounded-md bg-background">
                      <option>1 person</option>
                      <option>2 people</option>
                      <option>3 people</option>
                      <option>4 people</option>
                      <option>5+ people</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 mb-4">
                  Book Now
                </Button>

                <div className="text-center text-sm text-muted-foreground mb-4">
                  Free cancellation up to 24 hours before
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>Instant confirmation</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>Mobile ticket</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>English guide</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
