"use client";

import Link from "next/link";
export default function Clients({ locale }: { locale: string }) {
  const title =
    locale === "fr"
      ? "Ils nous font confiance"
      : "They trust us";

  const subtitle =
    locale === "fr"
      ? "Des entreprises et organisations qui nous accordent leur confiance."
      : "Companies and organizations that place their trust in us.";

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">

        <h2 className="text-3xl md:text-4xl font-logo text-secondary mb-6">
          {title}
        </h2>

        <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-base md:text-lg">
          {subtitle}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
        <ClientLogo src="/images/aud.png" />
          <ClientLogo src="/images/soudolux.png" />
          <ClientLogo src="/images/hbs.png" />
          <ClientLogo src="/images/gladys.png" />

        </div>

      </div>
    </section>
  );
}

function ClientLogo({ src }: { src: string }) {
  return (
    <div className="flex justify-center items-center">
      <img
        src={src}
        alt="Client logo"
        className="h-14 md:h-20 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
      />
    </div>
  );
}
