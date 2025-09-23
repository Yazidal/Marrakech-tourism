import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Marrakech Adventures</h3>
            <p className="text-gray-300 mb-4">
              Your gateway to authentic Moroccan experiences. Discover the magic of Morocco with our expert local
              guides.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-orange-400 p-2">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-orange-400 p-2">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-orange-400 p-2">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/excursions" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Excursions
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Medina, Marrakech 40000, Morocco</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+212 524 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@marrakech-adventures.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">24/7 Customer Support</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">Subscribe to get special offers and travel tips for Morocco.</p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
              />
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Marrakech Adventures. All rights reserved. | Crafted with ❤️ in Morocco
          </p>
        </div>
      </div>
    </footer>
  )
}
