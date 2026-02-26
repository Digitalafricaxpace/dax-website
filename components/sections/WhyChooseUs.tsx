"use client";

import { ShieldCheck, Globe, TrendingUp, Layers } from "lucide-react";

interface WhyChooseUsProps {
  locale: string;
}

export default function WhyChooseUs({ locale }: WhyChooseUsProps) {
  const isFR = locale === "fr";

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-logo text-secondary mb-14 md:mb-16">
          {isFR
            ? "Pourquoi choisir Digital Africa Xpace ?"
            : "Why Choose Digital Africa Xpace?"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          <Feature
            icon={<ShieldCheck size={40} strokeWidth={1.5} />}
            title={isFR ? "Sécurité & Fiabilité" : "Security & Reliability"}
            text={
              isFR
                ? "Solutions conformes aux standards internationaux de sécurité et adaptées aux exigences institutionnelles."
                : "Solutions aligned with international security standards and tailored to institutional requirements."
            }
          />

          <Feature
            icon={<Globe size={40} strokeWidth={1.5} />}
            title={isFR ? "Vision Internationale" : "International Vision"}
            text={
              isFR
                ? "Approche globale intégrant innovation technologique et meilleures pratiques internationales."
                : "Global approach integrating technological innovation and international best practices."
            }
          />

          <Feature
            icon={<TrendingUp size={40} strokeWidth={1.5} />}
            title={isFR ? "Performance & Impact" : "Performance & Impact"}
            text={
              isFR
                ? "Solutions orientées résultats pour améliorer l’efficacité et la transparence institutionnelle."
                : "Results-driven solutions to enhance institutional efficiency and transparency."
            }
          />

          <Feature
            icon={<Layers size={40} strokeWidth={1.5} />}
            title={isFR ? "Solutions Évolutives" : "Scalable Solutions"}
            text={
              isFR
                ? "Architecture flexible permettant une adaptation continue aux besoins stratégiques."
                : "Flexible architecture enabling continuous adaptation to strategic needs."
            }
          />

        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300 flex flex-col items-center text-center">

      <div className="text-secondary mb-6">{icon}</div>

      <h3 className="text-lg font-semibold mb-4 text-secondary">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {text}
      </p>

    </div>
  );
}