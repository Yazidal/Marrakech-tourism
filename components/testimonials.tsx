import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United States",
      rating: 5,
      text: "The 3-day Sahara desert trip was absolutely magical! Ahmed was an incredible guide who shared so many fascinating stories about Berber culture. Sleeping under the stars was unforgettable.",
      experience: "Sahara Desert Adventure",
    },
    {
      name: "Marco Rossi",
      country: "Italy",
      rating: 5,
      text: "Perfect organization from start to finish. The Atlas Mountains trek exceeded all expectations. The local villages we visited were authentic and the hospitality was amazing.",
      experience: "Atlas Mountains Trek",
    },
    {
      name: "Emma Thompson",
      country: "United Kingdom",
      rating: 5,
      text: "I've traveled extensively, but this Marrakech experience was special. The team's attention to detail and genuine care for their guests really shows. Highly recommended!",
      experience: "Imperial Cities Tour",
    },
    {
      name: "Hans Mueller",
      country: "Germany",
      rating: 5,
      text: "As a solo traveler, I felt completely safe and welcomed. The small group size made it feel personal, and I made friends for life. The quad biking was thrilling!",
      experience: "Adventure Activities",
    },
    {
      name: "Yuki Tanaka",
      country: "Japan",
      rating: 5,
      text: "The cultural immersion was incredible. Learning to cook tagine with a local family and exploring the medina with insider knowledge made this trip truly authentic.",
      experience: "Cultural Experience",
    },
    {
      name: "Sophie Dubois",
      country: "France",
      rating: 5,
      text: "Exceptional service and unforgettable memories. The hot air balloon ride over Marrakech at sunrise was breathtaking. Every detail was perfectly planned.",
      experience: "Hot Air Balloon",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            What Our <span className="text-orange-600">Travelers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Don't just take our word for it – hear from the amazing people who've experienced the magic of Morocco with
            us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 text-orange-200">
                  <Quote className="w-8 h-8" />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 mb-2">{testimonial.country}</div>
                  <div className="text-sm text-orange-600 font-medium">{testimonial.experience}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
            <Star className="w-6 h-6 text-orange-400 fill-current mr-2" />
            <span className="text-2xl font-bold text-gray-900 mr-2">4.9/5</span>
            <span className="text-gray-600">from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
