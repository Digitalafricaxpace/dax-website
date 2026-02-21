"use client";

import Link from "next/link";

export default function Hero({ locale }: { locale: string }) {
  const isFR = locale === "fr";

  return (
    <section className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-logo text-secondary leading-tight mb-8">
            {isFR
              ? "Transformer vos idées en solutions digitales concrètes."
              : "Transforming your ideas into concrete digital solutions."}
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
            {isFR
              ? "Digital Africa Xpace conçoit et déploie des solutions numériques évolutives pour les gouvernements, institutions publiques et organisations stratégiques."
              : "Digital Africa Xpace designs and deploys scalable digital solutions for governments, public institutions and strategic organizations."}
          </p>

          <div className="flex gap-6">

            <Link
              href={`/${locale}/services`}
              className="bg-secondary text-white px-8 py-4 rounded-md text-sm tracking-wide hover:opacity-90 transition"
            >
              {isFR ? "Découvrir nos services" : "Discover our services"}
            </Link>

            <Link
              href={`/${locale}/produits`}
              className="border border-secondary text-secondary px-8 py-4 rounded-md text-sm tracking-wide hover:bg-secondary hover:text-white transition"
            >
              {isFR ? "Nos produits" : "Our products"}
            </Link>

          </div>
        </div>

        {/* Right Visual */}
        <div className="h-[420px] bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">
            {isFR
              ? "Illustration digitale institutionnelle"
              : "Institutional digital illustration"}
          </span>
        </div>

      </div>
    </section>
  );
}