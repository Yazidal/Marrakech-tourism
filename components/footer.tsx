"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getDict } from "@/lib/i18n";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
interface FooterProps {
  locale?: string;
}

export default function Footer({ locale = "en" }: FooterProps) {
  const t = getDict(locale);
  const base = `/${locale}`;
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t.excursions, href: `${base}/excursions` },
    { name: t.activities, href: `${base}/activities` },
    { name: t.about, href: `${base}/about` },
    { name: t.contact, href: `${base}/contact` },
    { name: t.booking, href: `${base}/booking` },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    // TODO: Implement newsletter subscription logic
    console.log("Newsletter subscription:", email);

    // Reset form
    e.currentTarget.reset();

    // You could show a toast notification here
    alert(t.newsletterThankYou || "Thank you for subscribing!");
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">
              {t.siteName || "Marrakech Adventures"}
            </h3>
            <p className="text-gray-300 mb-4">
              {t.footerDescription ||
                "Your gateway to authentic Moroccan experiences. Discover the magic of Morocco with our expert local guides."}
            </p>
            <div className="flex space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Open</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 z-[60]" align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Profile
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Billing
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Settings
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Keyboard shortcuts
                      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Invite users
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>Email</DropdownMenuItem>
                          <DropdownMenuItem>Message</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>More...</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                      New Team
                      <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuItem disabled>API</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-300 hover:text-primary p-2"
                asChild
              >
                <a
                  href="https://facebook.com/marrakech-adventures"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.facebookLabel || "Follow us on Facebook"}
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-300 hover:text-primary p-2"
                asChild
              >
                <a
                  href="https://instagram.com/marrakech_adventures"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.instagramLabel || "Follow us on Instagram"}
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-300 hover:text-primary p-2"
                asChild
              >
                <a
                  href="https://twitter.com/marrakech_tours"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.twitterLabel || "Follow us on Twitter"}
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              {t.quickLinks || "Quick Links"}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              {t.contactUs || "Contact Us"}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  {t.address || "Medina, Marrakech 40000, Morocco"}
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a
                  href="tel:+212524123456"
                  className="text-gray-300 text-sm hover:text-primary transition-colors"
                >
                  {t.phone || "+212 524 123 456"}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@marrakech-adventures.com"
                  className="text-gray-300 text-sm hover:text-primary transition-colors"
                >
                  {t.email || "info@marrakech-adventures.com"}
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  {t.supportHours || "24/7 Customer Support"}
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              {t.stayUpdated || "Stay Updated"}
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              {t.newsletterDescription ||
                "Subscribe to get special offers and travel tips for Morocco."}
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col space-y-2"
            >
              <input
                type="email"
                name="email"
                required
                placeholder={t.emailPlaceholder || "Your email address"}
                className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                aria-label={t.emailInputLabel || "Email address for newsletter"}
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {t.subscribe || "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t.copyright?.replace("{year}", currentYear.toString()) ||
              `© ${currentYear} Marrakech Adventures. All rights reserved.`}
            {" | "}
            <span className="inline-flex items-center">
              {t.craftedWith || "Crafted with"} ❤️ {t.inMorocco || "in Morocco"}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
