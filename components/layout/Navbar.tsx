"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dictionary } from "@/lib/dictionary";

export default function Navbar({ locale }: { locale: string }) {
  const pathname = usePathname();

  const safeLocale = locale === "en" ? "en" : "fr";
  const dict = dictionary[safeLocale];

  const navItems = [
    { name: dict.nav.home, href: `/${safeLocale}` },
    { name: dict.nav.about, href: `/${safeLocale}/a-propos` },
    { name: dict.nav.services, href: `/${safeLocale}/services` },
    { name: dict.nav.products, href: `/${safeLocale}/produits` },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">

      {/* Language Switch – top right */}
      <div className="absolute top-2 right-6 text-xs flex items-center gap-2">
        <Link
          href={pathname.replace(/^\/(fr|en)/, "/fr")}
          className={`transition ${
            safeLocale === "fr"
              ? "text-gray-400"
              : "text-red-600 hover:opacity-70"
          }`}
        >
          FR
        </Link>

        <span className="text-gray-300">|</span>

        <Link
          href={pathname.replace(/^\/(fr|en)/, "/en")}
          className={`transition ${
            safeLocale === "en"
              ? "text-gray-400"
              : "text-red-600 hover:opacity-70"
          }`}
        >
          EN
        </Link>
      </div>
<br />
      <div className="max-w-7xl mx-auto px-12 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href={`/${safeLocale}`} className="flex items-center">
          <img
            src="/images/dax.png"
            alt="Digital Africa Xpace Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-secondary">

          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-2 transition group ${
                  isActive ? "text-secondary" : "hover:text-secondary"
                }`}
              >
                {item.name}

                {/* Underline */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}

          {/* Contact Button */}
          <Link
            href={`/${safeLocale}/contact`}
            className="bg-secondary text-white px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            {dict.nav.contact}
          </Link>

        </nav>

      </div>
    </header>
  );
}