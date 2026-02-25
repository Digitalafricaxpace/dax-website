"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero({ locale }: { locale: string }) {
  const isFR = locale === "fr";

  return (
    <section className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-logo text-secondary leading-tight mb-8">
            {isFR
              ? "Transformer vos idées en solutions digitales concrètes."
              : "Transforming your ideas into concrete digital solutions."}
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
            {isFR
              ? "Digital Africa Xpace conçoit et déploie des solutions numériques évolutives pour les gouvernements, institutions publiques et organisations stratégiques."
              : "Digital Africa Xpace designs and deploys scalable digital solutions for governments, public institutions and strategic organizations."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
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
        <div className="relative h-[350px] md:h-[480px] rounded-xl overflow-hidden shadow-xl">

          {/* Image */}
          <Image
            src="/images/hero-dax.jpg"
            alt="Digital institutional strategy"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay institutionnel */}
          <div className="absolute inset-0 bg-secondary/20"></div>

        </div>

      </div>
    </section>
  );
}