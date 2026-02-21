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
import { Wallet, Activity } from "lucide-react";

export function generateStaticParams() {
  return [
    { locale: "fr" },
    { locale: "en" },
  ];
}

export default async function ProduitsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "fr";

  const content = {
    fr: {
      title: "Nos Produits",
      subtitle:
        "Des solutions numériques stratégiques conçues pour les institutions publiques.",
      cashmap: {
        description:
          "CashMap est une plateforme avancée de gestion financière permettant aux institutions de superviser efficacement les budgets, dépenses, revenus, prêts et subventions en temps réel.",
        features: [
          "Gestion centralisée des budgets",
          "Suivi des dépenses et recettes",
          "Gestion des prêts et financements",
          "Tableaux de bord stratégiques",
          "Analyse financière décisionnelle",
        ],
        learnMore: "Savoir plus",
        demo: "Demander une démo",
      },
      taskworkflow: {
        description:
          "TaskWorkFlow est une solution complète de gestion des tâches et de coordination des Programmes Élargis de Vaccination (PEV). Elle permet d’organiser, planifier et suivre efficacement les campagnes et interventions sanitaires.",
        features: [
          "Planification des campagnes vaccinales",
          "Gestion des équipes terrain",
          "Suivi des stocks et ressources",
          "Reporting centralisé",
          "Visualisation des données en temps réel",
        ],
        learnMore: "Savoir plus",
        demo: "Demander une démo",
      },
    },

    en: {
      title: "Our Products",
      subtitle:
        "Strategic digital solutions designed for public institutions.",
      cashmap: {
        description:
          "CashMap is an advanced financial management platform enabling institutions to efficiently supervise budgets, expenses, revenues, loans and grants in real time.",
        features: [
          "Centralized budget management",
          "Expense and revenue tracking",
          "Loan and financing management",
          "Strategic dashboards",
          "Decision-oriented financial analysis",
        ],
        learnMore: "Learn More",
        demo: "Request a Demo",
      },
      taskworkflow: {
        description:
          "TaskWorkFlow is a comprehensive task management and coordination solution for Expanded Program on Immunization (EPI). It enables efficient planning, organization and monitoring of health campaigns.",
        features: [
          "Vaccination campaign planning",
          "Field team management",
          "Stock and resource tracking",
          "Centralized reporting",
          "Real-time data visualization",
        ],
        learnMore: "Learn More",
        demo: "Request a Demo",
      },
    },
  };

  const t = content[safeLocale];

  return (
    <>
      {/* Hero */}
      <section className="pt-48 pb-24 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-logo mb-6">{t.title}</h1>
          <p className="text-gray-300 text-lg">{t.subtitle}</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 space-y-32">

          {/* CashMap */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-primary mb-6">
                <Wallet size={40} strokeWidth={1.5} />
              </div>

              <h2 className="text-4xl font-logo text-secondary mb-6">
                CashMap
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                {t.cashmap.description}
              </p>

              <ul className="space-y-3 text-gray-600 mb-10">
                {t.cashmap.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>

              <div className="flex gap-6">
                <a
                  href={`/${safeLocale}/produits/cashmap`}
                  className="bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition"
                >
                  {t.cashmap.learnMore}
                </a>

                <a
                  href={`/${safeLocale}/contact`}
                  className="bg-secondary text-white px-8 py-4 rounded-md hover:opacity-90 transition"
                >
                  {t.cashmap.demo}
                </a>
              </div>
            </div>

            <div className="h-[420px] bg-white rounded-xl shadow-md flex items-center justify-center">
              <span className="text-gray-400">
                Mockup Dashboard CashMap
              </span>
            </div>
          </div>

          {/* TaskWorkFlow */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="h-[420px] bg-white rounded-xl shadow-md flex items-center justify-center order-2 md:order-1">
              <span className="text-gray-400">
                Mockup TaskWorkFlow
              </span>
            </div>

            <div className="order-1 md:order-2">
              <div className="text-primary mb-6">
                <Activity size={40} strokeWidth={1.5} />
              </div>

              <h2 className="text-4xl font-logo text-secondary mb-6">
                TaskWorkFlow
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                {t.taskworkflow.description}
              </p>

              <ul className="space-y-3 text-gray-600 mb-10">
                {t.taskworkflow.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>

              <div className="flex gap-6">
                <a
                  href={`/${safeLocale}/produits/taskworkflow`}
                  className="bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition"
                >
                  {t.taskworkflow.learnMore}
                </a>

                <a
                  href={`/${safeLocale}/contact`}
                  className="bg-secondary text-white px-8 py-4 rounded-md hover:opacity-90 transition"
                >
                  {t.taskworkflow.demo}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}