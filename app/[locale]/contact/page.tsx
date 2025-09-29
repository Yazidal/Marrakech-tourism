"use client";

import type React from "react";

import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Clock,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    travelDates: "",
    groupSize: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["Rue de la Kasbah, Medina", "Marrakech 40000, Morocco"],
      action: "Get Directions",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+212 524 123 456", "+212 661 234 567"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@marrakech-tours.com", "booking@marrakech-tours.com"],
      action: "Send Email",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Fri: 8:00 AM - 7:00 PM", "Sat - Sun: 9:00 AM - 6:00 PM"],
      action: "View Calendar",
    },
  ];

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 2-3 weeks in advance, especially during peak season (October-April).",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Free cancellation up to 24 hours before your experience. See our terms for full details.",
    },
    {
      question: "Do you offer private tours?",
      answer:
        "Yes! We specialize in private and customized experiences tailored to your preferences.",
    },
    {
      question: "What languages do your guides speak?",
      answer: "Our guides speak Arabic, French, English, and Spanish fluently.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="pt-16 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50">
              We're Here to Help
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 text-balance">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-pretty">
              Have questions about your Moroccan adventure? We're here to help
              you plan the perfect experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0 dark:bg-gray-800 dark:shadow-gray-900/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2 dark:text-white">
                    <MessageCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="dark:text-gray-200">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          required
                          className="h-12 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="dark:text-gray-200">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                          className="h-12 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="dark:text-gray-200">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className="h-12 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="dark:text-gray-200">
                          Subject
                        </Label>
                        <Select
                          value={formData.subject}
                          onValueChange={(value) =>
                            handleInputChange("subject", value)
                          }
                        >
                          <SelectTrigger className="h-12 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent className="dark:bg-gray-800 dark:border-gray-600">
                            <SelectItem
                              value="booking"
                              className="dark:text-white dark:hover:bg-gray-700"
                            >
                              New Booking Inquiry
                            </SelectItem>
                            <SelectItem
                              value="existing"
                              className="dark:text-white dark:hover:bg-gray-700"
                            >
                              Existing Booking
                            </SelectItem>
                            <SelectItem
                              value="custom"
                              className="dark:text-white dark:hover:bg-gray-700"
                            >
                              Custom Tour Request
                            </SelectItem>
                            <SelectItem
                              value="group"
                              className="dark:text-white dark:hover:bg-gray-700"
                            >
                              Group Booking
                            </SelectItem>
                            <SelectItem
                              value="general"
                              className="dark:text-white dark:hover:bg-gray-700"
                            >
                              General Question
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dates" className="dark:text-gray-200">
                          Preferred Travel Dates
                        </Label>
                        <Input
                          id="dates"
                          value={formData.travelDates}
                          onChange={(e) =>
                            handleInputChange("travelDates", e.target.value)
                          }
                          placeholder="e.g., March 15-20, 2024"
                          className="h-12 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="groupSize"
                          className="dark:text-gray-200"
                        >
                          Group Size
                        </Label>
                        <Select
                          value={formData.groupSize}
                          onValueChange={(value) =>
                            handleInputChange("groupSize", value)
                          }
                        >
                          <SelectTrigger className="h-12 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <SelectValue placeholder="Number of travelers" />
                          </SelectTrigger>
                          <SelectContent className="dark:bg-gray-800 dark:border-gray-600">
                            <SelectItem
                              value="1"
                              className="dark:text-white dark:hover:bg-gray-700"
                            >
                              1 Person
                            </SelectItem>
                            <SelectItem
                              value="2"
                              className="dark:text-white dark:hover:bg-gray-700"
                            >
                              2 People
                            </SelectItem>
                            <SelectItem
                              value="3-4"
                              className="dark:text-white dark:hover:bg-gray-700"
                            >
                              3-4 People
                            </SelectItem>
                            <SelectItem
                              value="5-8"
                              className="dark:text-white dark:hover:bg-gray-700"
                            >
                              5-8 People
                            </SelectItem>
                            <SelectItem
                              value="9+"
                              className="dark:text-white dark:hover:bg-gray-700"
                            >
                              9+ People
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="dark:text-gray-200">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Tell us about your dream Moroccan experience..."
                        required
                        className="min-h-[120px] dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 text-lg bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="shadow-lg border-0 dark:bg-gray-800 dark:shadow-gray-900/20"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-gray-600 dark:text-gray-300 text-sm mb-1"
                          >
                            {detail}
                          </p>
                        ))}
                        <Button
                          variant="link"
                          className="p-0 h-auto text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 mt-2"
                        >
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="shadow-lg border-0 mb-16 dark:bg-gray-800 dark:shadow-gray-900/20">
            <CardHeader>
              <CardTitle className="text-2xl dark:text-white">
                Frequently Asked Questions
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                Quick answers to common questions about our services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Map Section */}
          <Card className="shadow-lg border-0 dark:bg-gray-800 dark:shadow-gray-900/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 dark:text-white">
                <Globe className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                Find Us in Marrakech
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                Located in the heart of the historic Medina, just steps from
                Jemaa el-Fnaa square.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Rue de la Kasbah, Medina, Marrakech</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
