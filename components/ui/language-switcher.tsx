"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

interface LanguageSwitcherProps {
  currentLocale?: string;
}

const languages = [
  { code: "en", name: "EN", flag: "🇺🇸" },
  { code: "fr", name: "FR", flag: "🇫🇷" },
  { code: "es", name: "ES", flag: "🇪🇸" },
];

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

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
    const segments = pathname.split("/").filter(Boolean);
    const currentLocaleInPath = languages.some(
      (lang) => lang.code === segments[0]
    )
      ? segments[0]
      : null;

    let newPathname: string;

    if (currentLocaleInPath) {
      const remainingSegments = segments.slice(1);
      newPathname =
        "/" +
        newLocale +
        (remainingSegments.length > 0 ? "/" + remainingSegments.join("/") : "");
    } else {
      newPathname = "/" + newLocale + (pathname === "/" ? "" : pathname);
    }

    router.push(newPathname);
  };

  return (
    <div className="flex items-center gap-1 border border-border rounded-md p-1">
      {languages.map((language) => (
        <Button
          key={language.code}
          variant={detectedLocale === language.code ? "default" : "ghost"}
          size="sm"
          onClick={() => switchLanguage(language.code)}
          className={`h-8 px-2 ${
            detectedLocale === language.code
              ? "bg-primary text-primary-foreground"
              : "hover:bg-accent"
          }`}
          title={language.name}
        >
          <span className="text-base">{language.flag}</span>
        </Button>
      ))}
    </div>
  );
}
