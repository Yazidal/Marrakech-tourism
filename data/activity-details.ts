export const activityData = {
  "1": {
    id: 1,
    title: "Quad Biking Adventure",
    description:
      "Experience the thrill of quad biking through the stunning Atlas Mountains and traditional Berber villages. This adrenaline-pumping adventure combines spectacular scenery with cultural encounters.",
    longDescription:
      "Get ready for an unforgettable quad biking adventure that takes you off the beaten path into the heart of Morocco's Atlas Mountains. Navigate rugged terrain, cross mountain streams, and discover hidden Berber villages where time seems to stand still. Our experienced guides will lead you through diverse landscapes, from rocky mountain trails to lush valleys, while ensuring your safety and providing insights into local culture and traditions.",
    images: [
      "/quad-biking-in-atlas-mountains-morocco-with-mounta.jpg",
      "/placeholder.svg?key=quad2",
      "/placeholder.svg?key=quad3",
      "/placeholder.svg?key=quad4",
    ],
    duration: "4 Hours",
    groupSize: "2-8 people",
    rating: 4.8,
    reviewCount: 89,
    price: "€95",
    category: "adventure",
    location: "Atlas Mountains",
    highlights: [
      "Professional quad bike instruction",
      "Mountain trail exploration",
      "Traditional Berber village visits",
      "Scenic photo opportunities",
      "Safety equipment provided",
      "Refreshments included",
    ],
    included: [
      "Quad bike rental",
      "Professional guide",
      "Safety equipment (helmet, goggles)",
      "Hotel pickup and drop-off",
      "Refreshments and snacks",
      "Insurance coverage",
    ],
    notIncluded: [
      "Personal expenses",
      "Tips for guide",
      "Lunch (optional)",
      "Additional activities",
    ],
    schedule: [
      {
        time: "09:00",
        activity: "Hotel Pickup",
        description:
          "Comfortable transport from your accommodation in Marrakech",
      },
      {
        time: "10:00",
        activity: "Safety Briefing & Training",
        description:
          "Professional instruction on quad bike operation and safety procedures",
      },
      {
        time: "10:30",
        activity: "Mountain Trail Adventure",
        description:
          "Guided quad biking through Atlas Mountain trails and valleys",
      },
      {
        time: "12:00",
        activity: "Village Visit",
        description:
          "Stop at traditional Berber village for cultural interaction and refreshments",
      },
      {
        time: "13:00",
        activity: "Return Journey",
        description: "Scenic ride back with photo stops at viewpoints",
      },
      {
        time: "14:00",
        activity: "Return to Marrakech",
        description: "Drop-off at your accommodation",
      },
    ],
    meetingPoint: "Hotel pickup available",
    cancellation: "Free cancellation up to 24 hours before start time",
    difficulty: "Beginner to Intermediate",
    minAge: "16 years",
    requirements: "Valid driving license required",
  },
} as const;

export type ActivityDetail = (typeof activityData)["1"];
