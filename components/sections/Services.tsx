"use client";

import Link from "next/link";

export default function Services({ locale }: { locale: string }) {
  const isFR = locale === "fr";

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 gap-20 items-center">

        {/* Left Visual */}
        <div className="h-[420px] bg-white rounded-lg shadow-sm flex items-center justify-center">
          <span className="text-gray-400">
            {isFR
              ? "Illustration Services / Transformation digitale"
              : "Services Illustration / Digital Transformation"}
          </span>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-logo text-secondary leading-tight mb-8">
            {isFR ? "Services sur mesure" : "Tailored Services"}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            {isFR
              ? "Nous accompagnons les gouvernements, institutions publiques et organisations stratégiques dans la conception, le développement et le déploiement de solutions digitales évolutives adaptées à leurs besoins spécifiques."
              : "We support governments, public institutions and strategic organizations in designing, developing and deploying scalable digital solutions tailored to their specific needs."}
          </p>

          <ul className="space-y-4 text-gray-700 mb-10">
            <li>
              {isFR
                ? "• Transformation digitale institutionnelle"
                : "• Institutional digital transformation"}
            </li>
            <li>
              {isFR
                ? "• Développement de plateformes gouvernementales"
                : "• Government platform development"}
            </li>
            <li>
              {isFR
                ? "• Solutions cloud et infrastructures sécurisées"
                : "• Secure cloud solutions and infrastructure"}
            </li>
            <li>
              {isFR
                ? "• Conseil stratégique et accompagnement technologique"
                : "• Strategic consulting and technology advisory"}
            </li>
          </ul>

          <Link
            href={`/${locale}/services`}
            className="bg-secondary text-white px-8 py-4 rounded-md text-sm tracking-wide hover:opacity-90 transition"
          >
            {isFR ? "En savoir plus" : "Learn more"}
          </Link>

        </div>
      </div>
    </section>
  );
}