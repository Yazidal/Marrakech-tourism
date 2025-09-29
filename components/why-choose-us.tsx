import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Heart, MapPin, Shield, Users } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Licensed guides, insured vehicles, and comprehensive safety protocols for your peace of mind.",
    },
    {
      icon: Users,
      title: "Local Expertise",
      description:
        "Born and raised in Morocco, our guides share authentic stories and hidden gems.",
    },
    {
      icon: Award,
      title: "15+ Years Experience",
      description:
        "Over a decade of creating unforgettable experiences for travelers from around the world.",
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description:
        "Tailored experiences that match your interests, pace, and travel style.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock assistance before, during, and after your Moroccan adventure.",
    },
    {
      icon: MapPin,
      title: "Authentic Experiences",
      description:
        "Connect with local communities and experience the real Morocco beyond tourist spots.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
            Why Choose{" "}
            <span className="text-orange-600 dark:text-orange-400">
              Marrakech Adventures
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            We're not just tour operators – we're your local friends who happen
            to know Morocco like the back of our hands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:bg-gray-800 dark:shadow-gray-900/20 dark:hover:shadow-gray-900/30"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6">
                  <reason.icon className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
