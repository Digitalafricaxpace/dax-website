"use client";

import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  locale: string;
}

export default function Hero({ locale }: HeroProps) {
  const isFR = locale === "fr";

  return (
    <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-logo text-secondary leading-tight mb-8">
            {isFR
              ? "Transformer vos idées en solutions digitales concrètes."
              : "Transforming your ideas into concrete digital solutions."}
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
            {isFR
              ? "Digital Africa Xpace conçoit et déploie des solutions numériques évolutives pour les gouvernements, institutions publiques et organisations stratégiques."
              : "Digital Africa Xpace designs and deploys scalable digital solutions for governments, public institutions and strategic organizations."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <Link
              href={`/${locale}/services`}
              className="bg-secondary text-white px-8 py-4 rounded-md text-sm tracking-wide hover:opacity-90 transition text-center"
            >
              {isFR ? "Découvrir nos services" : "Discover our services"}
            </Link>

            <Link
              href={`/${locale}/projets`}
              className="border border-secondary text-secondary px-8 py-4 rounded-md text-sm tracking-wide hover:bg-secondary hover:text-white transition text-center"
            >
              {isFR ? "Nos projets" : "Our projects"}
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[320px] sm:h-[380px] md:h-[450px] lg:h-[520px] rounded-xl overflow-hidden shadow-2xl">

          <Image
            src="/images/hero-dax.jpg"
            alt="Digital institutional strategy"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-secondary/15"></div>

        </div>

      </div>
    </section>
  );
}