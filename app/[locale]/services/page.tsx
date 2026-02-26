import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {

  const isFR = params.locale === "fr";

  return {
    title: isFR
      ? "Digital Africa Xpace | Transformation Digitale Institutionnelle"
      : "Digital Africa Xpace | Institutional Digital Transformation",

    description: isFR
      ? "Digital Africa Xpace accompagne les gouvernements et institutions dans leur transformation digitale stratégique."
      : "Digital Africa Xpace supports governments and institutions in strategic digital transformation.",

    keywords: isFR
      ? ["transformation digitale", "gouvernement numérique", "solution digitale Afrique", "cybersécurité institutionnelle"]
      : ["digital transformation Africa", "government digital solutions", "institutional cybersecurity"],

    alternates: {
      canonical: `https://www.daxsarl.net/${params.locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },

    openGraph: {
      title: "Digital Africa Xpace",
      description: isFR
        ? "Solutions digitales stratégiques pour institutions."
        : "Strategic digital solutions for institutions.",
      url: `https://www.daxsarl.net/${params.locale}`,
      siteName: "Digital Africa Xpace",
      locale: isFR ? "fr_FR" : "en_US",
      type: "website",
    },
  };
}
import {
  Building2,
  ShieldCheck,
  Cloud,
  BarChart3,
  Briefcase,
  Lock,
} from "lucide-react";

export function generateStaticParams() {
  return [
    { locale: "fr" },
    { locale: "en" },
  ];
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "fr";

  const content = {
    fr: {
      title: "Nos Services",
      subtitle:
        "Des solutions digitales stratégiques adaptées aux institutions publiques et organisations majeures.",
      intro:
        "Digital Africa Xpace accompagne les institutions dans leur transformation digitale en combinant expertise technologique, rigueur stratégique et approche sécurisée.",
      services: [
        {
          title: "Transformation Digitale Institutionnelle",
          description:
            "Audit, stratégie et déploiement de solutions numériques adaptées aux administrations publiques et grandes organisations.",
        },
        {
          title: "Développement de Plateformes Sécurisées",
          description:
            "Conception de plateformes gouvernementales robustes, évolutives et conformes aux standards de sécurité.",
        },
        {
          title: "Solutions Cloud & Infrastructure",
          description:
            "Architecture cloud sécurisée, gestion d’infrastructure et optimisation des performances.",
        },
        {
          title: "Analyse & Outils Décisionnels",
          description:
            "Développement de tableaux de bord stratégiques et outils d’aide à la décision en temps réel.",
        },
        {
          title: "Conseil & Accompagnement",
          description:
            "Accompagnement stratégique des dirigeants et responsables IT dans leurs projets numériques.",
        },
        {
          title: "Cybersécurité & Gouvernance",
          description:
            "Mise en place de politiques de sécurité, conformité RGPD et gestion des risques numériques.",
        },
      ],
      methodology: "Notre Méthodologie",
      steps: [
        "Analyse & Audit",
        "Conception & Déploiement",
        "Suivi & Optimisation",
      ],
      ctaTitle: "Parlons de votre projet",
      ctaText:
        "Notre équipe est prête à vous accompagner dans vos projets stratégiques.",
      ctaButton: "Nous contacter",
    },

    en: {
      title: "Our Services",
      subtitle:
        "Strategic digital solutions tailored for public institutions and major organizations.",
      intro:
        "Digital Africa Xpace supports institutions in their digital transformation by combining technological expertise, strategic rigor and a secure approach.",
      services: [
        {
          title: "Institutional Digital Transformation",
          description:
            "Audit, strategy and deployment of digital solutions tailored to public administrations and large organizations.",
        },
        {
          title: "Secure Platform Development",
          description:
            "Design of robust, scalable government platforms compliant with security standards.",
        },
        {
          title: "Cloud & Infrastructure Solutions",
          description:
            "Secure cloud architecture, infrastructure management and performance optimization.",
        },
        {
          title: "Analytics & Decision Tools",
          description:
            "Development of strategic dashboards and real-time decision-support tools.",
        },
        {
          title: "Consulting & Strategic Support",
          description:
            "Strategic guidance for executives and IT leaders in digital initiatives.",
        },
        {
          title: "Cybersecurity & Governance",
          description:
            "Implementation of security policies, compliance frameworks and digital risk management.",
        },
      ],
      methodology: "Our Methodology",
      steps: [
        "Analysis & Audit",
        "Design & Deployment",
        "Monitoring & Optimization",
      ],
      ctaTitle: "Let’s Discuss Your Project",
      ctaText:
        "Our team is ready to support your strategic initiatives.",
      ctaButton: "Contact Us",
    },
  };

  const t = content[safeLocale];

  return (
    <>
{/* HERO */}
<section className="relative pt-36 md:pt-44 lg:pt-48 pb-20 md:pb-24 bg-secondary text-white overflow-hidden">

  {/* SHAPE LEFT */}
  <img
    src="/images/dax-shapes.png"
    alt=""
    className="
      pointer-events-none
      absolute
      left-0
      bottom-0
      w-40
      md:w-64
      lg:w-80
      opacity-20
      brightness-0
      invert
      z-0
    "
  />

  <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-logo mb-6">
      {t.title}
    </h1>

    <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
      {t.subtitle}
    </p>
  </div>
</section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.intro}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16">

          {t.services.map((service, index) => (
            <ServiceBlock
              key={index}
              icon={
                [
                  <Building2 size={28} strokeWidth={1.5} />,
                  <ShieldCheck size={28} strokeWidth={1.5} />,
                  <Cloud size={28} strokeWidth={1.5} />,
                  <BarChart3 size={28} strokeWidth={1.5} />,
                  <Briefcase size={28} strokeWidth={1.5} />,
                  <Lock size={28} strokeWidth={1.5} />,
                ][index]
              }
              title={service.title}
              description={service.description}
            />
          ))}

        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-logo text-secondary mb-12 text-center">
            {t.methodology}
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {t.steps.map((step, index) => (
              <Step
                key={index}
                number={`0${index + 1}`}
                title={step}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-white text-center">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-3xl font-logo mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-gray-300 mb-8">
            {t.ctaText}
          </p>
          <a
            href={`/${safeLocale}/contact`}
            className="bg-primary text-white px-8 py-4 rounded-md hover:opacity-90 transition"
          >
            {t.ctaButton}
          </a>
        </div>
      </section>
    </>
  );
}

function ServiceBlock({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-10 rounded-lg shadow-sm hover:shadow-md transition">
      <div className="text-primary mb-6">{icon}</div>
      <h3 className="text-xl font-semibold text-secondary mb-4">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function Step({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div>
      <div className="text-3xl font-logo text-primary mb-4">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-secondary">
        {title}
      </h3>
    </div>
  );
}