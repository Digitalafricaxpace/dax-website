"use client";

import { ShieldCheck, Globe, TrendingUp, Layers } from "lucide-react";

export default function WhyChooseUs({ locale }: { locale: string }) {
  const isFR = locale === "fr";

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-12 text-center">

        <h2 className="text-4xl md:text-5xl font-logo text-secondary mb-16">
          {isFR
            ? "Pourquoi choisir Digital Africa Xpace ?"
            : "Why Choose Digital Africa Xpace?"}
        </h2>

        <div className="grid md:grid-cols-4 gap-12">

          {/* Bloc 1 */}
          <div className="flex flex-col items-center">
            <ShieldCheck
              size={36}
              strokeWidth={1.5}
              className="text-secondary mb-6"
            />
            <h3 className="text-lg font-semibold mb-4">
              {isFR ? "Sécurité & Fiabilité" : "Security & Reliability"}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {isFR
                ? "Solutions conformes aux standards internationaux de sécurité et adaptées aux exigences institutionnelles."
                : "Solutions aligned with international security standards and tailored to institutional requirements."}
            </p>
          </div>

          {/* Bloc 2 */}
          <div className="flex flex-col items-center">
            <Globe
              size={36}
              strokeWidth={1.5}
              className="text-secondary mb-6"
            />
            <h3 className="text-lg font-semibold mb-4">
              {isFR ? "Vision Internationale" : "International Vision"}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {isFR
                ? "Approche globale intégrant innovation technologique et meilleures pratiques internationales."
                : "Global approach integrating technological innovation and international best practices."}
            </p>
          </div>

          {/* Bloc 3 */}
          <div className="flex flex-col items-center">
            <TrendingUp
              size={36}
              strokeWidth={1.5}
              className="text-secondary mb-6"
            />
            <h3 className="text-lg font-semibold mb-4">
              {isFR ? "Performance & Impact" : "Performance & Impact"}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {isFR
                ? "Solutions orientées résultats pour améliorer l’efficacité et la transparence institutionnelle."
                : "Results-driven solutions to enhance institutional efficiency and transparency."}
            </p>
          </div>

          {/* Bloc 4 */}
          <div className="flex flex-col items-center">
            <Layers
              size={36}
              strokeWidth={1.5}
              className="text-secondary mb-6"
            />
            <h3 className="text-lg font-semibold mb-4">
              {isFR ? "Solutions Évolutives" : "Scalable Solutions"}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {isFR
                ? "Architecture flexible permettant une adaptation continue aux besoins stratégiques."
                : "Flexible architecture enabling continuous adaptation to strategic needs."}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}