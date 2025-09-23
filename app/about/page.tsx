import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, Heart, Star, MapPin, Shield } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Happy Travelers", value: "10,000+" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Globe, label: "Destinations", value: "50+" },
    { icon: Heart, label: "Customer Rating", value: "4.9/5" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Your safety is our top priority. All our guides are certified and our equipment is regularly inspected.",
    },
    {
      icon: Heart,
      title: "Authentic Experiences",
      description: "We connect you with local communities and traditions for genuine Moroccan cultural immersion.",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for perfection in every detail, from planning to execution of your adventure.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "We are committed to responsible tourism that benefits local communities and preserves nature.",
    },
  ]

  const team = [
    {
      name: "Ahmed Benali",
      role: "Founder & Lead Guide",
      image: "/moroccan-tour-guide-in-traditional-dress.jpg",
      bio: "Born in Marrakech, Ahmed has been sharing the magic of Morocco with travelers for over 15 years.",
    },
    {
      name: "Fatima Zahra",
      role: "Cultural Experience Director",
      image: "/moroccan-woman-in-traditional-attire.jpg",
      bio: "Fatima specializes in connecting visitors with authentic Berber traditions and local artisans.",
    },
    {
      name: "Youssef Amrani",
      role: "Adventure Specialist",
      image: "/moroccan-adventure-guide-with-mountains.jpg",
      bio: "Expert in desert expeditions and Atlas Mountain treks, ensuring safe and thrilling adventures.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-amber-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Established 2009</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Your Gateway to
                <span className="text-orange-600"> Authentic Morocco</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty max-w-3xl mx-auto">
                We are passionate local experts dedicated to sharing the magic, culture, and natural beauty of Morocco
                through unforgettable experiences that connect you with our homeland.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/excursions">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                    Explore Our Tours
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                    <stat.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2009 by Ahmed Benali, a native of Marrakech with an insatiable passion for his homeland,
                    our company began as a dream to share the authentic beauty of Morocco with the world.
                  </p>
                  <p>
                    What started as small group tours through the medina has grown into a comprehensive travel
                    experience company, but our core mission remains unchanged: to provide genuine, respectful, and
                    transformative encounters with Moroccan culture, landscapes, and people.
                  </p>
                  <p>
                    Today, we work exclusively with local communities, ensuring that tourism benefits everyone involved
                    while preserving the traditions and natural environments that make Morocco so special.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/moroccan-marketplace-with-traditional-architecture.jpg"
                  alt="Traditional Moroccan marketplace"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    <span className="font-semibold">Marrakech, Morocco</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do, from planning your journey to the memories you take home.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                      <value.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our passionate local experts are here to make your Moroccan adventure unforgettable.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready for Your Moroccan Adventure?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let us create a personalized experience that will leave you with memories to last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/excursions">
                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                  Browse Experiences
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
