"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Star } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/marrakech-desert-landscape-with-atlas-mountains-at.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Moroccan Pattern Overlay */}
      <div className="absolute inset-0 moroccan-pattern opacity-30"></div>

      {/* 3D Elements Placeholders */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <span className="text-2xl">🐪</span>
        </div>
      </div>

      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <span className="text-xl">🌴</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "4s" }}>
        <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <span className="text-xl">🏍️</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          <MapPin className="w-6 h-6 text-primary mr-2" />
          <span className="text-lg text-white/90 font-medium">Marrakech, Morocco</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
          Discover the Magic of
          <span className="text-primary block mt-2">Marrakech</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
          Experience authentic Moroccan adventures with our premium excursions. From desert safaris to cultural tours,
          create memories that last a lifetime.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/booking">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 animate-pulse-glow"
            >
              Book Your Adventure
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/activities">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 bg-transparent"
            >
              Explore Activities
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-white">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-5 h-5 text-primary mr-1" />
              <span className="text-2xl font-bold">4.9</span>
            </div>
            <p className="text-sm text-white/80">Customer Rating</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">500+</div>
            <p className="text-sm text-white/80">Happy Travelers</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">15+</div>
            <p className="text-sm text-white/80">Unique Experiences</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
