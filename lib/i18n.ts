// lib/i18n.ts
export type Locale = "en" | "fr" | "es";

export const dictionaries: Record<Locale, Record<string, string>> = {
  en: {
    // Site branding
    siteName: "Marrakech Adventures",

    // Navigation
    home: "Home",
    excursions: "Excursions",
    activities: "Activities",
    about: "About",
    contact: "Contact",
    bookNow: "Book Now",
    booking: "Book Now",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",

    // Hero Section
    heroTitle: "Discover the Magic of",
    heroSubtitle: "Marrakech",
    heroDescription:
      "Experience authentic Moroccan adventures with our premium excursions. From desert safaris to cultural tours, create memories that last a lifetime.",
    heroImageAlt: "Marrakech desert landscape with Atlas mountains",
    bookAdventure: "Book Your Adventure",
    exploreActivities: "Explore Activities",
    exploreExcursions: "Explore Excursions",
    customerRating: "Customer Rating",
    customerRatingLabel: "Customer rating statistics",
    happyTravelers: "Happy Travelers",
    happyTravelersLabel: "Happy travelers count",
    uniqueExperiences: "Unique Experiences",
    uniqueExperiencesLabel: "Unique experiences available",

    // Footer
    footerDescription:
      "Your gateway to authentic Moroccan experiences. Discover the magic of Morocco with our expert local guides.",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    address: "Medina, Marrakech 40000, Morocco",
    phone: "+212 524 123 456",
    email: "info@marrakech-adventures.com",
    supportHours: "24/7 Customer Support",
    stayUpdated: "Stay Updated",
    newsletterDescription:
      "Subscribe to get special offers and travel tips for Morocco.",
    emailPlaceholder: "Your email address",
    emailInputLabel: "Email address for newsletter",
    subscribe: "Subscribe",
    newsletterThankYou: "Thank you for subscribing!",
    copyright: "© {year} Marrakech Adventures. All rights reserved.",
    craftedWith: "Crafted with",
    inMorocco: "in Morocco",
    facebookLabel: "Follow us on Facebook",
    instagramLabel: "Follow us on Instagram",
    twitterLabel: "Follow us on Twitter",

    // Activities
    marrakechActivities: "Marrakech Activities",
    activitiesDescription:
      "Discover authentic Moroccan experiences with our curated selection of day activities. From cultural immersion to thrilling adventures, find your perfect Marrakech moment.",
    categories: "Categories",
    sortBy: "Sort by",
    mostPopular: "Most Popular",
    highestRated: "Highest Rated",
    priceLowToHigh: "Price: Low to High",
    priceHighToLow: "Price: High to Low",
    duration: "Duration",
    showing: "Showing",
    activity: "activity",
    // activities: "activities",
    in: "in",
    noActivitiesFound: "No activities found for the selected category.",
    viewAllActivities: "View All Activities",
    viewDetails: "View Details",

    // Excursions
    marrakechExcursions: "Marrakech Excursions",
    excursionsDescription:
      "Embark on unforgettable multi-day adventures that showcase the diverse landscapes, rich culture, and authentic experiences Morocco has to offer.",
    excursion: "excursion",
    // excursions: "excursions",
    noExcursionsFound: "No excursions found for the selected category.",
    viewAllExcursions: "View All Excursions",
  },
  fr: {
    // Site branding
    siteName: "Aventures Marrakech",

    // Navigation
    home: "Accueil",
    excursions: "Excursions",
    activities: "Activités",
    about: "À propos",
    contact: "Contact",
    bookNow: "Réserver",
    booking: "Réserver",
    openMenu: "Ouvrir le menu de navigation",
    closeMenu: "Fermer le menu de navigation",

    // Hero Section
    heroTitle: "Découvrez la Magie de",
    heroSubtitle: "Marrakech",
    heroDescription:
      "Vivez des aventures marocaines authentiques avec nos excursions premium. Des safaris dans le désert aux visites culturelles, créez des souvenirs inoubliables.",
    heroImageAlt:
      "Paysage désertique de Marrakech avec les montagnes de l'Atlas",
    bookAdventure: "Réservez Votre Aventure",
    exploreActivities: "Explorer les Activités",
    exploreExcursions: "Explorer les Excursions",
    customerRating: "Note Clients",
    customerRatingLabel: "Statistiques de notation client",
    happyTravelers: "Voyageurs Heureux",
    happyTravelersLabel: "Nombre de voyageurs heureux",
    uniqueExperiences: "Expériences Uniques",
    uniqueExperiencesLabel: "Expériences uniques disponibles",

    // Footer
    footerDescription:
      "Votre porte d'entrée vers des expériences marocaines authentiques. Découvrez la magie du Maroc avec nos guides locaux experts.",
    quickLinks: "Liens Rapides",
    contactUs: "Nous Contacter",
    address: "Médina, Marrakech 40000, Maroc",
    phone: "+212 524 123 456",
    email: "info@marrakech-adventures.com",
    supportHours: "Support Client 24/7",
    stayUpdated: "Restez Informé",
    newsletterDescription:
      "Abonnez-vous pour recevoir des offres spéciales et des conseils de voyage pour le Maroc.",
    emailPlaceholder: "Votre adresse email",
    emailInputLabel: "Adresse email pour la newsletter",
    subscribe: "S'abonner",
    newsletterThankYou: "Merci pour votre abonnement !",
    copyright: "© {year} Aventures Marrakech. Tous droits réservés.",
    craftedWith: "Conçu avec",
    inMorocco: "au Maroc",
    facebookLabel: "Suivez-nous sur Facebook",
    instagramLabel: "Suivez-nous sur Instagram",
    twitterLabel: "Suivez-nous sur Twitter",

    // Activities
    marrakechActivities: "Activités de Marrakech",
    activitiesDescription:
      "Découvrez des expériences marocaines authentiques avec notre sélection d'activités d'une journée. De l'immersion culturelle aux aventures palpitantes, trouvez votre moment parfait à Marrakech.",
    categories: "Catégories",
    sortBy: "Trier par",
    mostPopular: "Plus Populaire",
    highestRated: "Mieux Noté",
    priceLowToHigh: "Prix: Croissant",
    priceHighToLow: "Prix: Décroissant",
    duration: "Durée",
    showing: "Affichage de",
    activity: "activité",
    // activities: "activités",
    in: "dans",
    noActivitiesFound:
      "Aucune activité trouvée pour la catégorie sélectionnée.",
    viewAllActivities: "Voir Toutes les Activités",
    viewDetails: "Voir les Détails",

    // Excursions
    marrakechExcursions: "Excursions de Marrakech",
    excursionsDescription:
      "Partez pour des aventures inoubliables de plusieurs jours qui mettent en valeur les paysages diversifiés, la culture riche et les expériences authentiques que le Maroc a à offrir.",
    excursion: "excursion",
    // excursions: "excursions",
    noExcursionsFound:
      "Aucune excursion trouvée pour la catégorie sélectionnée.",
    viewAllExcursions: "Voir Toutes les Excursions",
  },
  es: {
    // Site branding
    siteName: "Aventuras Marrakech",

    // Navigation
    home: "Inicio",
    excursions: "Excursiones",
    activities: "Actividades",
    about: "Acerca de",
    contact: "Contacto",
    bookNow: "Reservar",
    booking: "Reservar",
    openMenu: "Abrir menú de navegación",
    closeMenu: "Cerrar menú de navegación",

    // Hero Section
    heroTitle: "Descubre la Magia de",
    heroSubtitle: "Marrakech",
    heroDescription:
      "Experimenta aventuras marroquíes auténticas con nuestras excursiones premium. Desde safaris en el desierto hasta tours culturales, crea recuerdos que duran toda la vida.",
    heroImageAlt: "Paisaje desértico de Marrakech con las montañas del Atlas",
    bookAdventure: "Reserva Tu Aventura",
    exploreActivities: "Explorar Actividades",
    exploreExcursions: "Explorar Excursiones",
    customerRating: "Calificación de Clientes",
    customerRatingLabel: "Estadísticas de calificación de clientes",
    happyTravelers: "Viajeros Felices",
    happyTravelersLabel: "Número de viajeros felices",
    uniqueExperiences: "Experiencias Únicas",
    uniqueExperiencesLabel: "Experiencias únicas disponibles",

    // Footer
    footerDescription:
      "Tu puerta de entrada a experiencias marroquíes auténticas. Descubre la magia de Marruecos con nuestros guías locales expertos.",
    quickLinks: "Enlaces Rápidos",
    contactUs: "Contáctanos",
    address: "Medina, Marrakech 40000, Marruecos",
    phone: "+212 524 123 456",
    email: "info@marrakech-adventures.com",
    supportHours: "Soporte al Cliente 24/7",
    stayUpdated: "Mantente Actualizado",
    newsletterDescription:
      "Suscríbete para recibir ofertas especiales y consejos de viaje para Marruecos.",
    emailPlaceholder: "Tu dirección de email",
    emailInputLabel: "Dirección de email para newsletter",
    subscribe: "Suscribirse",
    newsletterThankYou: "¡Gracias por suscribirte!",
    copyright: "© {year} Aventuras Marrakech. Todos los derechos reservados.",
    craftedWith: "Hecho con",
    inMorocco: "en Marruecos",
    facebookLabel: "Síguenos en Facebook",
    instagramLabel: "Síguenos en Instagram",
    twitterLabel: "Síguenos en Twitter",

    // Activities
    marrakechActivities: "Actividades de Marrakech",
    activitiesDescription:
      "Descubre experiencias marroquíes auténticas con nuestra selección curada de actividades de día. Desde inmersión cultural hasta aventuras emocionantes, encuentra tu momento perfecto en Marrakech.",
    categories: "Categorías",
    sortBy: "Ordenar por",
    mostPopular: "Más Popular",
    highestRated: "Mejor Valorado",
    priceLowToHigh: "Precio: Menor a Mayor",
    priceHighToLow: "Precio: Mayor a Menor",
    duration: "Duración",
    showing: "Mostrando",
    activity: "actividad",
    // activities: "actividades",
    in: "en",
    noActivitiesFound:
      "No se encontraron actividades para la categoría seleccionada.",
    viewAllActivities: "Ver Todas las Actividades",
    viewDetails: "Ver Detalles",

    // Excursions
    marrakechExcursions: "Excursiones de Marrakech",
    excursionsDescription:
      "Embárcate en aventuras inolvidables de varios días que muestran los diversos paisajes, la rica cultura y las experiencias auténticas que Marruecos tiene para ofrecer.",
    excursion: "excursión",
    // excursions: "excursiones",
    noExcursionsFound:
      "No se encontraron excursiones para la categoría seleccionada.",
    viewAllExcursions: "Ver Todas las Excursiones",
  },
};

export function getDict(locale: string) {
  const key = (locale as Locale) ?? "en";
  return dictionaries[key] ?? dictionaries.en;
}
