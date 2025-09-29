"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface LanguageSwitcherProps {
  currentLocale?: string;
}

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Extract current locale from pathname if not provided
  const detectedLocale =
    currentLocale ||
    (() => {
      const segments = pathname.split("/").filter(Boolean);
      const firstSegment = segments[0];
      return languages.some((lang) => lang.code === firstSegment)
        ? firstSegment
        : "en";
    })();

  const switchLanguage = (newLocale: string) => {
    // Remove current locale from pathname
    const segments = pathname.split("/").filter(Boolean);
    const currentLocaleInPath = languages.some(
      (lang) => lang.code === segments[0]
    )
      ? segments[0]
      : null;

    let newPathname: string;

    if (currentLocaleInPath) {
      // Replace current locale with new locale
      const remainingSegments = segments.slice(1);
      newPathname =
        "/" +
        newLocale +
        (remainingSegments.length > 0 ? "/" + remainingSegments.join("/") : "");
    } else {
      // Add new locale to pathname
      newPathname = "/" + newLocale + (pathname === "/" ? "" : pathname);
    }

    console.log(
      "Switching from",
      detectedLocale,
      "to",
      newLocale,
      "->",
      newPathname
    );
    router.push(newPathname);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === detectedLocale) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {currentLanguage.flag} {currentLanguage.name}
          </span>
          <span className="sm:hidden">{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLanguage(language.code)}
            className={detectedLocale === language.code ? "bg-accent" : ""}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
