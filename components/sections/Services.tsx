"use client";

import Link from "next/link";
import Image from "next/image";

interface ServicesProps {
  locale: string;
}

export default function Services({ locale }: ServicesProps) {
  const isFR = locale === "fr";

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* LEFT VISUAL */}
        <div className="relative h-[300px] sm:h-[380px] md:h-[420px] lg:h-[480px] rounded-xl overflow-hidden shadow-2xl order-1 lg:order-none">

          <Image
            src="/images/services.jpg"
            alt="Institutional digital services"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-secondary/15"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-logo text-secondary leading-tight mb-8">
            {isFR ? "Services sur mesure" : "Tailored Services"}
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            {isFR
              ? "Nous accompagnons les gouvernements, institutions publiques et organisations stratégiques dans la conception, le développement et le déploiement de solutions digitales évolutives adaptées à leurs besoins spécifiques."
              : "We support governments, public institutions and strategic organizations in designing, developing and deploying scalable digital solutions tailored to their specific needs."}
          </p>

          <ul className="space-y-4 text-gray-700 mb-10 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
            <li>• {isFR ? "Transformation digitale institutionnelle" : "Institutional digital transformation"}</li>
            <li>• {isFR ? "Développement de plateformes gouvernementales" : "Government platform development"}</li>
            <li>• {isFR ? "Solutions cloud et infrastructures sécurisées" : "Secure cloud solutions and infrastructure"}</li>
            <li>• {isFR ? "Conseil stratégique et accompagnement technologique" : "Strategic consulting and technology advisory"}</li>
          </ul>

          <Link
            href={`/${locale}/services`}
            className="bg-secondary text-white px-8 py-4 rounded-md text-sm tracking-wide hover:opacity-90 transition inline-block"
          >
            {isFR ? "En savoir plus" : "Learn more"}
          </Link>
        </div>

      </div>
    </section>
  );
}