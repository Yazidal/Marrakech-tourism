"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calendar, Users, MapPin, Clock, Download, Share2 } from "lucide-react"
import Link from "next/link"

export default function BookingConfirmationPage() {
  const bookingDetails = {
    confirmationNumber: "MRK-2024-001234",
    experience: "3-Day Sahara Desert Tour",
    date: "March 15, 2024",
    guests: 2,
    total: 598,
    customerName: "John Smith",
    email: "john.smith@email.com",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600 text-lg">Your Moroccan adventure awaits</p>
        </div>

        <Card className="shadow-lg border-0 mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Confirmation Details</CardTitle>
            <CardDescription>
              Confirmation Number: <span className="font-mono font-semibold">{bookingDetails.confirmationNumber}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">Experience Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="font-medium">{bookingDetails.experience}</p>
                      <p className="text-sm text-gray-600">Merzouga Desert, Morocco</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="font-medium">{bookingDetails.date}</p>
                      <p className="text-sm text-gray-600">3 days, 2 nights</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="font-medium">{bookingDetails.guests} Guests</p>
                      <p className="text-sm text-gray-600">Adults</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">Customer Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">{bookingDetails.customerName}</p>
                    <p className="text-sm text-gray-600">Primary contact</p>
                  </div>
                  <div>
                    <p className="font-medium">{bookingDetails.email}</p>
                    <p className="text-sm text-gray-600">Confirmation sent to this email</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="font-semibold text-orange-800">Total Paid: ${bookingDetails.total}</p>
                    <p className="text-sm text-orange-600">Payment confirmed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold text-lg mb-4">What's Next?</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600 mb-2" />
                  <h4 className="font-medium mb-1">24 Hours Before</h4>
                  <p className="text-sm text-gray-600">
                    You'll receive detailed pickup instructions and contact information
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                  <h4 className="font-medium mb-1">Day of Experience</h4>
                  <p className="text-sm text-gray-600">Meet your guide at the designated pickup location</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <Share2 className="w-6 h-6 text-purple-600 mb-2" />
                  <h4 className="font-medium mb-1">After Your Trip</h4>
                  <p className="text-sm text-gray-600">Share your experience and leave a review</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
              <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                <Download className="w-4 h-4 mr-2" />
                Download Voucher
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                <Share2 className="w-4 h-4 mr-2" />
                Share Booking
              </Button>
              <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle>Important Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Cancellation Policy</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Free cancellation up to 24 hours before</li>
                  <li>• 50% refund for cancellations within 24 hours</li>
                  <li>• No refund for no-shows</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">What to Bring</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Comfortable walking shoes</li>
                  <li>• Sun protection (hat, sunscreen)</li>
                  <li>• Camera for memories</li>
                  <li>• Light jacket for evening</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
