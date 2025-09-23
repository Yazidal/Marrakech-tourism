import { GeistMono, GeistSans } from "geist/font";
import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "Marrakech Adventures - Discover Morocco",
  description:
    "Experience the magic of Marrakech with our premium excursions and activities. Camel rides, quad biking, hot air balloons, and authentic Moroccan adventures.",
  keywords:
    "Marrakech, Morocco, excursions, activities, camel ride, quad biking, hot air balloon, desert tours, medina tours",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
