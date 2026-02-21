import "../globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export function generateStaticParams() {
  return [
    { locale: "fr" },
    { locale: "en" },
  ];
}

export const metadata: Metadata = {
  metadataBase: new URL("https://ton-domaine.com"),

  title: {
    default: "Digital Africa Xpace",
    template: "%s | Digital Africa Xpace",
  },

  description:
    "Digital Africa Xpace designs and deploys scalable digital solutions for governments and institutions.",

  keywords: [
    "digital transformation Africa",
    "government digital solutions",
    "institutional cybersecurity",
    "cloud infrastructure Africa",
  ],

  openGraph: {
    title: "Digital Africa Xpace",
    description:
      "Strategic digital transformation solutions for institutions.",
    url: "https://www.daxsarl.net",
    siteName: "Digital Africa Xpace",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const safeLocale = locale === "en" ? "en" : "fr";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Digital Africa Xpace",
    url: `https://www.daxsarl.net/${safeLocale}`,
    logo: "https://www.daxsarl.net/images/dax.png",
    description:
      safeLocale === "fr"
        ? "Entreprise spécialisée en transformation digitale institutionnelle en Afrique."
        : "Company specialized in institutional digital transformation in Africa.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cotonou",
      addressCountry: "BJ",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2290169153629",
      contactType: "customer service",
      areaServed: "Africa",
      availableLanguage: ["French", "English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/dax",
      "https://twitter.com/dax",
    ],
  };

  return (
    <html lang={safeLocale}>
      <body
        className={`${inter.variable} ${playfair.variable} bg-white text-gray-900`}
      >
        <Navbar locale={safeLocale} />
        {children}
        <Footer locale={safeLocale} />
        <CookieBanner />

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}