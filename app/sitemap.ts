import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://marrakech-tourism.com";
  const locales = ["en", "fr", "es"];
  const routes = [
    "", // home
    "/activities",
    "/excursions",
    "/about",
    "/contact",
    "/booking",
  ];

  // Generate URLs for all locales and routes
  const urls: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      urls.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority:
          route === ""
            ? 1
            : route.includes("activities") || route.includes("excursions")
            ? 0.9
            : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            fr: `${baseUrl}/fr${route}`,
            es: `${baseUrl}/es${route}`,
          },
        },
      });
    });
  });

  return urls;
}
