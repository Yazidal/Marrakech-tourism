// components/hero-section.tsx
"use client";

import { Button } from "@/components/ui/button";
import { getDict } from "@/lib/i18n";
import { ArrowRight, MapPin, Star } from "lucide-react";
import Link from "next/link";

// Floating Camel Component
const FloatingCamel = ({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => (
  <div
    className={`absolute ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg
      width="80"
      height="60"
      viewBox="0 0 80 60"
      className="animate-float opacity-40"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={`camelGradient-${delay}`}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#daa520" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#b8860b" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      {/* Camel body */}
      <ellipse
        cx="40"
        cy="35"
        rx="25"
        ry="12"
        fill={`url(#camelGradient-${delay})`}
      />
      {/* Camel humps */}
      <ellipse
        cx="35"
        cy="25"
        rx="8"
        ry="10"
        fill={`url(#camelGradient-${delay})`}
      />
      <ellipse
        cx="45"
        cy="23"
        rx="6"
        ry="8"
        fill={`url(#camelGradient-${delay})`}
      />
      {/* Camel neck */}
      <ellipse
        cx="15"
        cy="30"
        rx="6"
        ry="15"
        fill={`url(#camelGradient-${delay})`}
      />
      {/* Camel head */}
      <ellipse
        cx="10"
        cy="20"
        rx="5"
        ry="6"
        fill={`url(#camelGradient-${delay})`}
      />
      {/* Legs */}
      <rect
        x="25"
        y="45"
        width="3"
        height="12"
        fill={`url(#camelGradient-${delay})`}
      />
      <rect
        x="35"
        y="45"
        width="3"
        height="12"
        fill={`url(#camelGradient-${delay})`}
      />
      <rect
        x="45"
        y="45"
        width="3"
        height="12"
        fill={`url(#camelGradient-${delay})`}
      />
      <rect
        x="55"
        y="45"
        width="3"
        height="12"
        fill={`url(#camelGradient-${delay})`}
      />
    </svg>
  </div>
);

// Floating Palm Tree Component
const FloatingPalm = ({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => (
  <div
    className={`absolute ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg
      width="60"
      height="80"
      viewBox="0 0 60 80"
      className="animate-float opacity-35"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={`trunkGradient-${delay}`}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#8b4513" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#654321" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient
          id={`leafGradient-${delay}`}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#228b22" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#006400" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {/* Palm trunk */}
      <path
        d="M30 80 Q25 60 30 40 Q35 20 30 0"
        stroke={`url(#trunkGradient-${delay})`}
        strokeWidth="6"
        fill="none"
      />
      {/* Palm leaves */}
      <path
        d="M30 10 Q10 5 5 15 Q15 20 30 10"
        fill={`url(#leafGradient-${delay})`}
      />
      <path
        d="M30 10 Q50 5 55 15 Q45 20 30 10"
        fill={`url(#leafGradient-${delay})`}
      />
      <path
        d="M30 10 Q25 -5 15 0 Q25 15 30 10"
        fill={`url(#leafGradient-${delay})`}
      />
      <path
        d="M30 10 Q35 -5 45 0 Q35 15 30 10"
        fill={`url(#leafGradient-${delay})`}
      />
      <path
        d="M30 10 Q20 25 10 30 Q30 25 30 10"
        fill={`url(#leafGradient-${delay})`}
      />
      <path
        d="M30 10 Q40 25 50 30 Q30 25 30 10"
        fill={`url(#leafGradient-${delay})`}
      />
    </svg>
  </div>
);

// Floating Berber Tent Component
const FloatingTent = ({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => (
  <div
    className={`absolute ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg
      width="70"
      height="50"
      viewBox="0 0 70 50"
      className="animate-float opacity-30"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={`tentGradient-${delay}`}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#8b4513" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#654321" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {/* Tent shape */}
      <path d="M10 45 L35 15 L60 45 Z" fill={`url(#tentGradient-${delay})`} />
      {/* Tent details */}
      <path d="M15 40 L55 40" stroke="#654321" strokeWidth="2" opacity="0.6" />
      <path
        d="M20 35 L50 35"
        stroke="#654321"
        strokeWidth="1.5"
        opacity="0.5"
      />
    </svg>
  </div>
);

// Floating Star/Geometric Pattern Component
const FloatingStar = ({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => (
  <div
    className={`absolute ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className="animate-float opacity-25"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={`starGradient-${delay}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ffd700" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffb347" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <path
        d="M20 5 L24 16 L35 16 L26 24 L30 35 L20 28 L10 35 L14 24 L5 16 L16 16 Z"
        fill={`url(#starGradient-${delay})`}
      />
    </svg>
  </div>
);

interface HeroSectionProps {
  locale?: string;
}

export default function HeroSection({ locale = "en" }: HeroSectionProps) {
  const t = getDict(locale);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Custom CSS for animations - moved to global CSS would be better */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(1deg);
          }
          66% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(0.5deg);
          }
        }

        @keyframes drift {
          0% {
            transform: translateX(0px) translateY(0px);
          }
          25% {
            transform: translateX(10px) translateY(-5px);
          }
          50% {
            transform: translateX(-5px) translateY(-10px);
          }
          75% {
            transform: translateX(-10px) translateY(-5px);
          }
          100% {
            transform: translateX(0px) translateY(0px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-drift {
          animation: drift 12s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(255, 165, 0, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 165, 0, 0.8);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        /* Moroccan Pattern CSS - Theme-aware */
        .moroccan-pattern {
          background-image: radial-gradient(
              circle at 25% 25%,
              rgba(218, 165, 32, 0.1) 2%,
              transparent 2%
            ),
            radial-gradient(
              circle at 75% 75%,
              rgba(218, 165, 32, 0.1) 2%,
              transparent 2%
            );
          background-size: 40px 40px;
        }

        .dark .moroccan-pattern {
          background-image: radial-gradient(
              circle at 25% 25%,
              rgba(218, 165, 32, 0.05) 2%,
              transparent 2%
            ),
            radial-gradient(
              circle at 75% 75%,
              rgba(218, 165, 32, 0.05) 2%,
              transparent 2%
            );
        }

        /* Dark mode glow effect */
        .dark .animate-pulse-glow {
          animation: pulse-glow-dark 2s ease-in-out infinite;
        }

        @keyframes pulse-glow-dark {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(255, 165, 0, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 165, 0, 0.6);
          }
        }
      `}</style>

      {/* Background Image with better optimization */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/marrakech-desert-landscape-with-atlas-mountains-at.jpg')`,
        }}
        role="img"
        aria-label={
          t.heroImageAlt || "Marrakech desert landscape with Atlas mountains"
        }
      >
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
      </div>

      {/* Moroccan Pattern Overlay */}
      <div
        className="absolute inset-0 moroccan-pattern opacity-30 dark:opacity-20"
        aria-hidden="true"
      ></div>

      {/* Floating Elements - Hidden from screen readers */}
      <div aria-hidden="true">
        {/* Camels */}
        <FloatingCamel
          className="top-20 right-10 animate-float-slow hidden sm:block"
          delay={2}
        />
        <FloatingCamel
          className="bottom-32 left-16 animate-drift hidden md:block"
          delay={4}
        />

        {/* Palm Trees */}
        <FloatingPalm
          className="top-32 left-20 animate-float hidden sm:block"
          delay={1.5}
        />
        <FloatingPalm
          className="bottom-40 right-24 animate-float-slow hidden lg:block"
          delay={3.5}
        />
        <FloatingPalm
          className="top-1/2 left-8 animate-drift hidden md:block"
          delay={6}
        />

        {/* Berber Tents */}
        <FloatingTent
          className="top-40 right-40 animate-float hidden lg:block"
          delay={2.5}
        />
        <FloatingTent
          className="bottom-28 left-32 animate-float-slow hidden md:block"
          delay={4.5}
        />

        {/* Moroccan Stars */}
        <FloatingStar
          className="top-24 left-1/3 animate-float hidden sm:block"
          delay={1}
        />
        <FloatingStar
          className="bottom-36 right-1/3 animate-drift hidden md:block"
          delay={3}
        />
        <FloatingStar
          className="top-1/2 right-12 animate-float-slow hidden lg:block"
          delay={5}
        />
        <FloatingStar
          className="top-60 left-1/4 animate-float hidden sm:block"
          delay={2}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          <MapPin
            className="w-6 h-6 text-primary dark:text-primary mr-2"
            aria-hidden="true"
          />
          <span className="text-lg text-white/90 dark:text-white/80 font-medium">
            Marrakech, Morocco
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white mb-6 text-balance leading-tight">
          {t.heroTitle}
          <span className="text-primary dark:text-primary block mt-2">
            {t.heroSubtitle}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 dark:text-white/80 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
          {t.heroDescription}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href={`/${locale}/booking`} className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/80 text-primary-foreground text-lg px-8 py-4 animate-pulse-glow transition-all duration-300 hover:scale-105"
            >
              {t.bookAdventure}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href={`/${locale}/activities`} className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900 text-lg px-8 py-4 bg-transparent transition-all duration-300 hover:scale-105"
            >
              {t.exploreActivities}
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-white dark:text-white">
          <div
            className="text-center"
            role="group"
            aria-label={t.customerRatingLabel}
          >
            <div className="flex items-center justify-center mb-2">
              <Star
                className="w-5 h-5 text-primary dark:text-primary mr-1"
                aria-hidden="true"
              />
              <span className="text-2xl font-bold">4.9</span>
            </div>
            <p className="text-sm text-white/80 dark:text-white/70">
              {t.customerRating}
            </p>
          </div>
          <div
            className="text-center"
            role="group"
            aria-label={t.happyTravelersLabel}
          >
            <div className="text-2xl font-bold mb-2">500+</div>
            <p className="text-sm text-white/80 dark:text-white/70">
              {t.happyTravelers}
            </p>
          </div>
          <div
            className="text-center"
            role="group"
            aria-label={t.uniqueExperiencesLabel}
          >
            <div className="text-2xl font-bold mb-2">15+</div>
            <p className="text-sm text-white/80 dark:text-white/70">
              {t.uniqueExperiences}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-white/50 dark:border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 dark:bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
