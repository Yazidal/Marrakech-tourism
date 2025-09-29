import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
            Ready to Start Your{" "}
            <span className="text-orange-600 dark:text-orange-400">
              Adventure?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            Get in touch with our travel experts to plan your perfect Moroccan
            experience. We're here to help make your dreams come true.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/20">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
                    <Phone className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Call Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +212 524 123 456
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/20">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
                    <Mail className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Email Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    info@marrakech-adventures.com
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/20">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
                    <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Visit Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Medina, Marrakech, Morocco
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/20">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
                    <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Available
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    24/7 Support
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Have questions? Want to customize your experience? Our local
                experts are standing by to help you plan the perfect Moroccan
                adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600"
                  >
                    Contact Us Now
                  </Button>
                </Link>
                <Link href="/booking">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-500 dark:hover:text-white"
                  >
                    Book Your Experience
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <Card className="border-0 shadow-xl dark:bg-gray-800 dark:shadow-gray-900/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Quick Inquiry
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                />
                <textarea
                  placeholder="Tell us about your dream Moroccan experience..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 resize-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                ></textarea>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white py-3">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
