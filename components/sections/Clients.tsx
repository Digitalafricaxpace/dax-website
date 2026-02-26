"use client";

import Image from "next/image";

interface ClientsProps {
  locale: string;
}

export default function Clients({ locale }: ClientsProps) {
  const title =
    locale === "fr"
      ? "Ils nous font confiance"
      : "They trust us";

  const subtitle =
    locale === "fr"
      ? "Des entreprises et organisations qui nous accordent leur confiance."
      : "Companies and organizations that place their trust in us.";

  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-logo text-secondary mb-6">
          {title}
        </h2>

        <p className="text-gray-600 mb-14 md:mb-16 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          {subtitle}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 md:gap-12 items-center">
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
    <div className="flex justify-center items-center group">
      <Image
        src={src}
        alt="Client logo"
        width={160}
        height={80}
        className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
      />
    </div>
  );
}