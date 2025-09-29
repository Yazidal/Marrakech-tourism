export const excursionData = {
  "1": {
    id: 1,
    title: "3-Day Sahara Desert Adventure",
    description:
      "Embark on an epic journey through the Sahara Desert, experiencing the magic of Morocco's most iconic landscape. This comprehensive adventure combines camel trekking, traditional Berber culture, and unforgettable nights under the star-filled desert sky.",
    longDescription:
      "This extraordinary 3-day desert adventure takes you deep into the heart of the Sahara, where golden dunes stretch endlessly toward the horizon. You'll experience authentic Berber hospitality, ride camels across ancient caravan routes, and sleep under some of the clearest night skies on Earth. Our expert local guides will share stories of desert life while ensuring your comfort and safety throughout this once-in-a-lifetime journey.",
    images: [
      "/camel-caravan-in-sahara-desert-at-sunset-with-berb.jpg",
      "/placeholder.svg?key=desert2",
      "/placeholder.svg?key=desert3",
      "/placeholder.svg?key=desert4",
    ],
    duration: "3 Days / 2 Nights",
    groupSize: "2-12 people",
    rating: 4.9,
    reviewCount: 127,
    price: "€320",
    category: "desert",
    location: "Merzouga Desert",
    highlights: [
      "Camel trekking across golden dunes",
      "Traditional Berber camp experience",
      "Sunrise and sunset viewing",
      "Desert camping under stars",
      "Local cuisine and mint tea",
      "Professional desert guides",
    ],
    included: [
      "Transportation from/to Marrakech",
      "Professional guide",
      "Camel trekking",
      "Desert camp accommodation",
      "All meals (breakfast, lunch, dinner)",
      "Traditional music entertainment",
      "Bottled water",
    ],
    notIncluded: [
      "Personal expenses",
      "Tips for guides",
      "Travel insurance",
      "Alcoholic beverages",
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech to Dades Valley",
        description:
          "Depart Marrakech early morning, cross the High Atlas Mountains via Tizi n'Tichka pass, visit Ait Benhaddou kasbah, continue to Ouarzazate and overnight in Dades Valley.",
        highlights: [
          "Atlas Mountains crossing",
          "Ait Benhaddou UNESCO site",
          "Dades Gorge",
        ],
      },
      {
        day: 2,
        title: "Dades to Merzouga Desert",
        description:
          "Journey through Todra Gorge, arrive in Merzouga, begin camel trek into the Sahara, watch sunset over dunes, enjoy traditional dinner and Berber music at desert camp.",
        highlights: [
          "Todra Gorge",
          "Camel trekking",
          "Desert sunset",
          "Berber camp",
        ],
      },
      {
        day: 3,
        title: "Sunrise & Return to Marrakech",
        description:
          "Wake early for spectacular sunrise over dunes, camel trek back to Merzouga, journey back to Marrakech via different scenic route, arrive evening.",
        highlights: ["Desert sunrise", "Return journey", "Scenic landscapes"],
      },
    ],
    meetingPoint: "Hotel pickup in Marrakech",
    cancellation: "Free cancellation up to 24 hours before start time",
    difficulty: "Easy to Moderate",
    bestTime: "October to April",
  },
} as const;

export type ExcursionDetail = (typeof excursionData)["1"];
