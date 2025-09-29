import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import HighlightsSection from "@/components/highlights-section";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";
import { getDict } from "@/lib/i18n";
import { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://marrakech-tourism.com";

  const titles = {
    en: "Home - Marrakech Tourism | Desert Tours & Moroccan Adventures",
    fr: "Accueil - Marrakech Tourisme | Tours du Désert & Aventures Marocaines",
    es: "Inicio - Turismo Marrakech | Tours del Desierto y Aventuras Marroquíes",
  };

  const descriptions = {
    en: "Book unforgettable Marrakech tours and excursions. Experience authentic Morocco with desert safaris, Atlas Mountains adventures, and cultural experiences. Best prices guaranteed!",
    fr: "Réservez des tours et excursions inoubliables à Marrakech. Vivez le Maroc authentique avec safaris désert, aventures Atlas et expériences culturelles. Meilleurs prix garantis!",
    es: "Reserve tours y excursiones inolvidables en Marrakech. Viva el Marruecos auténtico con safaris desierto, aventuras Atlas y experiencias culturales. ¡Mejores precios garantizados!",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
    },
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description:
        descriptions[locale as keyof typeof descriptions] || descriptions.en,
      url: `${baseUrl}/${locale}`,
      type: "website",
    },
  };
}

export default function HomePage({ params }: Props) {
  const dict = getDict(params.locale);

  // Schema.org structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Marrakech Tourism",
    description:
      dict.heroDescription || "Premium Marrakech tours and excursions",
    url: `${process.env.NEXT_PUBLIC_BASE_URL || ""}/${params.locale}`,
    logo: `${process.env.NEXT_PUBLIC_BASE_URL || ""}/logo.png`,
    image: `${process.env.NEXT_PUBLIC_BASE_URL || ""}/og-image.jpg`,
    telephone: "+212-XXX-XXXXXX", // Add your phone number
    email: "info@marrakech-tourism.com", // Add your email
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address", // Add your address
      addressLocality: "Marrakech",
      addressRegion: "Marrakech-Safi",
      postalCode: "40000",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "31.6295",
      longitude: "-7.9811",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "$$",
    availableLanguage: ["English", "French", "Spanish"],
    paymentAccepted: ["Cash", "Credit Card", "PayPal"],
    currenciesAccepted: "MAD,EUR,USD",
    openingHours: "Mo-Su 08:00-20:00",
    sameAs: [
      "https://www.facebook.com/marrakech-tourism", // Add your social links
      "https://www.instagram.com/marrakech_tourism",
      "https://twitter.com/marrakech_tourism",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Desert Safari Tours",
          description:
            "Experience the Sahara Desert with camel rides and overnight camping",
        },
        priceRange: "€50-€200",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Atlas Mountains Tours",
          description:
            "Explore the beautiful Atlas Mountains and Berber villages",
        },
        priceRange: "€30-€150",
        availability: "https://schema.org/InStock",
      },
    ],
  };

  return (
    <>
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <HeroSection locale={params.locale} />

      <HighlightsSection locale={params.locale} />
      <WhyChooseUs locale={params.locale} />
      <Testimonials locale={params.locale} />
      <ContactSection locale={params.locale} />
    </>
  );
}
