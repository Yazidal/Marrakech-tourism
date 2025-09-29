// app/[locale]/layout.tsx
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { getDict } from "@/lib/i18n";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const dict = getDict(locale);

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://marrakech-tourism.com";

  // SEO metadata for each language
  const metadata: Record<string, any> = {
    en: {
      title: {
        default:
          "Marrakech Tourism - Desert Tours & Authentic Moroccan Experiences",
        template: "%s | Marrakech Tourism",
      },
      description:
        "Discover authentic Moroccan adventures with our premium excursions in Marrakech. Desert safaris, Atlas Mountains tours, cultural experiences. Book your dream Morocco vacation today!",
      keywords:
        "Marrakech tours, Morocco excursions, desert safari, Atlas Mountains, Moroccan culture, Marrakech activities, camel riding, day trips from Marrakech",
    },
    fr: {
      title: {
        default:
          "Marrakech Tourisme - Tours du Désert & Expériences Marocaines Authentiques",
        template: "%s | Marrakech Tourisme",
      },
      description:
        "Découvrez des aventures marocaines authentiques avec nos excursions premium à Marrakech. Safaris désert, tours Atlas, expériences culturelles. Réservez vos vacances de rêve au Maroc!",
      keywords:
        "tours Marrakech, excursions Maroc, safari désert, montagnes Atlas, culture marocaine, activités Marrakech, balade chameau, excursions Marrakech",
    },
    es: {
      title: {
        default:
          "Turismo Marrakech - Tours del Desierto y Experiencias Marroquíes Auténticas",
        template: "%s | Turismo Marrakech",
      },
      description:
        "Descubre aventuras marroquíes auténticas con nuestras excursiones premium en Marrakech. Safari desierto, tours Atlas, experiencias culturales. ¡Reserva tus vacaciones soñadas en Marruecos!",
      keywords:
        "tours Marrakech, excursiones Marruecos, safari desierto, montañas Atlas, cultura marroquí, actividades Marrakech, paseo camello, excursiones desde Marrakech",
    },
  };

  const currentMetadata = metadata[locale] || metadata.en;

  return {
    metadataBase: new URL(baseUrl),
    title: currentMetadata.title,
    description: currentMetadata.description,
    keywords: currentMetadata.keywords,
    authors: [{ name: "Marrakech Tourism" }],
    creator: "Marrakech Tourism",
    publisher: "Marrakech Tourism",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        fr: `${baseUrl}/fr`,
        es: `${baseUrl}/es`,
        "x-default": `${baseUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : locale === "es" ? "es_ES" : "en_US",
      alternateLocale: ["en_US", "fr_FR", "es_ES"],
      url: `${baseUrl}/${locale}`,
      siteName: "Marrakech Tourism",
      title: currentMetadata.title.default,
      description: currentMetadata.description,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Marrakech Tourism - Discover Morocco",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: currentMetadata.title.default,
      description: currentMetadata.description,
      images: [`${baseUrl}/og-image.jpg`],
      creator: "@marrakech_tourism",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
    },
  };
}

// Generate static params for all locales
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }, { locale: "es" }];
}

export default function LocaleLayout({ children, params }: Props) {
  const locale = params.locale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Add hreflang links for SEO */}
        <link
          rel="alternate"
          hrefLang="en"
          href={`${process.env.NEXT_PUBLIC_BASE_URL || ""}/en`}
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href={`${process.env.NEXT_PUBLIC_BASE_URL || ""}/fr`}
        />
        <link
          rel="alternate"
          hrefLang="es"
          href={`${process.env.NEXT_PUBLIC_BASE_URL || ""}/es`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${process.env.NEXT_PUBLIC_BASE_URL || ""}/en`}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar locale={locale} />
            <main className="flex-1">{children}</main>
            <Footer locale={locale} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
