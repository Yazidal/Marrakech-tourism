// components/navbar.tsx
"use client";

import { Button } from "@/components/ui/button";

import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { getDict } from "@/lib/i18n";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
interface NavbarProps {
  locale?: string;
}

export default function Navbar({ locale = "en" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = getDict(locale);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const base = `/${locale}`;
  const navItems = [
    { name: t.home, href: `${base}` },
    { name: t.excursions, href: `${base}/excursions` },
    { name: t.activities, href: `${base}/activities` },
    { name: t.about, href: `${base}/about` },
    { name: t.contact, href: `${base}/contact` },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 overflow-visible ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="flex justify-between items-center h-16 overflow-visible">
          {/* Logo */}
          <Link
            href={base === "/en" ? "/" : base}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                M
              </span>
            </div>
            <span className="font-bold text-xl text-foreground">
              {t.siteName || "Marrakech Adventures"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 overflow-visible">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-foreground hover:text-primary transition-colors duration-200 font-medium relative ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                  )}
                </Link>
              );
            })}
            <Link href={`${base}/booking`}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow">
                {t.bookNow}
              </Button>
            </Link>
            <div className="flex items-center space-x-2 overflow-visible">
              <ThemeToggle />

              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? t.closeMenu : t.openMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 rounded-md ${
                      isActive ? "text-primary bg-primary/10" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="px-3 py-2">
                <Link href={`${base}/booking`}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    {t.bookNow}
                  </Button>
                </Link>
              </div>
              <div className="px-3 py-2 flex justify-center">
                <LanguageSwitcher currentLocale={locale} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
