"use client";

import Link from "next/link";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  Pin,
  Music2,
} from "lucide-react";
import { dictionary } from "@/lib/dictionary";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const safeLocale = locale === "en" ? "en" : "fr";
  const dict = dictionary[safeLocale];

  return (
    <footer className="relative bg-[#0C2438] text-white mt-24 md:mt-32 overflow-hidden">

      {/* LEFT SHAPE */}
      <img
        src="/images/dax-shapes.png"
        alt=""
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          w-40
          md:w-64
          lg:w-80
          opacity-10
          brightness-0
          invert
          z-0
        "
      />

      {/* RIGHT SHAPE */}
      <img
        src="/images/dax-shapes.png"
        alt=""
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          w-40
          md:w-64
          lg:w-80
          opacity-10
          brightness-0
          invert
          scale-x-[-1]
          z-0
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo + Description */}
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-logo mb-6 tracking-wide">DAX</h2>

          <p className="text-gray-300 leading-relaxed text-sm mb-6 max-w-sm mx-auto sm:mx-0">
            {safeLocale === "fr"
              ? "Digital Africa Xpace conçoit et déploie des solutions numériques évolutives pour les gouvernements et institutions publiques."
              : "Digital Africa Xpace designs and deploys scalable digital solutions for governments and public institutions."}
          </p>

          <div className="flex justify-center sm:justify-start gap-5 text-gray-400">
            <a className="hover:text-white transition"><FacebookIcon size={18} strokeWidth={1.5} /></a>
            <a className="hover:text-white transition"><LinkedinIcon size={18} strokeWidth={1.5} /></a>
            <a className="hover:text-white transition"><TwitterIcon size={18} strokeWidth={1.5} /></a>
            <a className="hover:text-white transition"><InstagramIcon size={18} strokeWidth={1.5} /></a>
            <a className="hover:text-white transition"><Pin size={18} strokeWidth={1.5} /></a>
            <a className="hover:text-white transition"><Music2 size={18} strokeWidth={1.5} /></a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider text-gray-400">
            {dict.footer.navigation}
          </h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li><Link href={`/${safeLocale}`}>{dict.nav.home}</Link></li>
            <li><Link href={`/${safeLocale}/a-propos`}>{dict.nav.about}</Link></li>
            <li><Link href={`/${safeLocale}/services`}>{dict.nav.services}</Link></li>
            <li><Link href={`/${safeLocale}/produits`}>{dict.nav.products}</Link></li>
            <li><Link href={`/${safeLocale}/contact`}>{dict.nav.contact}</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider text-gray-400">
            {dict.footer.legal}
          </h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li><Link href={`/${safeLocale}/code-de-conduite`}>{safeLocale === "fr" ? "Code de conduite" : "Code of Conduct"}</Link></li>
            <li><Link href={`/${safeLocale}/politique-inclusion`}>{safeLocale === "fr" ? "Politique d’inclusion" : "Inclusion Policy"}</Link></li>
            <li><Link href={`/${safeLocale}/politique-environnementale`}>{safeLocale === "fr" ? "Politique environnementale" : "Environmental Policy"}</Link></li>
            <li><Link href={`/${safeLocale}/politique-confidentialite`}>{safeLocale === "fr" ? "Politique de confidentialité" : "Privacy Policy"}</Link></li>
            <li><Link href={`/${safeLocale}/mentions-legales`}>{safeLocale === "fr" ? "Mentions légales" : "Legal Notice"}</Link></li>
            <li><Link href={`/${safeLocale}/signaler-un-abus`}>{safeLocale === "fr" ? "Signaler un abus" : "Report Abuse"}</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider text-gray-400">
            {dict.footer.newsletter}
          </h3>

          <p className="text-gray-300 text-sm mb-4">
            {dict.footer.newsletterText}
          </p>

          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              required
              placeholder="xxxx@xx.xx"
              className="w-full px-4 py-3 text-sm text-gray-900 rounded-md sm:rounded-l-md sm:rounded-r-none outline-none"
            />
            <button
              type="submit"
              className="bg-primary px-6 py-3 mt-3 sm:mt-0 sm:rounded-r-md sm:rounded-l-none rounded-md text-sm font-semibold hover:opacity-90 transition"
            >
              OK
            </button>
          </form>
        </div>

      </div>

      <div className="relative z-10 border-t border-white/10 py-6 text-center text-gray-400 text-sm px-4">
        Digital Africa Xpace © 2026 — {dict.footer.rights}
      </div>

    </footer>
  );
}