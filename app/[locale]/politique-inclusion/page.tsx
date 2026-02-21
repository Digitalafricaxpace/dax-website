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
export function generateStaticParams() {
  return [
    { locale: "fr" },
    { locale: "en" },
  ];
}

export default async function PolitiqueInclusion({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "fr";

  const content = {
    fr: {
      title: "Politique d’Inclusion",
      subtitle:
        "Notre engagement pour un environnement équitable, respectueux et inclusif.",
      articles: [
        {
          number: "01",
          title: "Engagement envers la diversité",
          content:
            "Digital Africa Xpace reconnaît la richesse que représente la diversité des parcours, des cultures et des expériences. Nous nous engageons à promouvoir un environnement inclusif où chaque individu peut contribuer pleinement.",
        },
        {
          number: "02",
          title: "Égalité des chances",
          content:
            "Nous garantissons l’égalité des opportunités en matière de recrutement, d’évolution professionnelle et de formation, sans discrimination fondée sur l’origine, le genre, l’âge, la religion, la situation de handicap ou toute autre caractéristique personnelle.",
        },
        {
          number: "03",
          title: "Environnement de travail inclusif",
          content:
            "Nous favorisons un climat de travail respectueux, collaboratif et ouvert à la diversité des idées. Toute forme d’exclusion ou de discrimination est strictement interdite.",
        },
        {
          number: "04",
          title: "Accessibilité",
          content:
            "Nous veillons à adapter nos environnements et outils afin de garantir l’accessibilité à toutes les personnes, y compris celles en situation de handicap.",
        },
        {
          number: "05",
          title: "Responsabilité collective",
          content:
            "L’inclusion est une responsabilité partagée. Chaque collaborateur est encouragé à contribuer activement à la construction d’un environnement équitable et respectueux.",
        },
      ],
    },

    en: {
      title: "Inclusion Policy",
      subtitle:
        "Our commitment to an equitable, respectful and inclusive environment.",
      articles: [
        {
          number: "01",
          title: "Commitment to Diversity",
          content:
            "Digital Africa Xpace recognizes the richness that diversity of backgrounds, cultures and experiences brings. We are committed to promoting an inclusive environment where every individual can fully contribute.",
        },
        {
          number: "02",
          title: "Equal Opportunities",
          content:
            "We guarantee equal opportunities in recruitment, career development and training, without discrimination based on origin, gender, age, religion, disability or any other personal characteristic.",
        },
        {
          number: "03",
          title: "Inclusive Work Environment",
          content:
            "We foster a respectful, collaborative and open work climate. Any form of exclusion or discrimination is strictly prohibited.",
        },
        {
          number: "04",
          title: "Accessibility",
          content:
            "We ensure that our environments and tools are adapted to guarantee accessibility for all individuals, including those with disabilities.",
        },
        {
          number: "05",
          title: "Collective Responsibility",
          content:
            "Inclusion is a shared responsibility. Every team member is encouraged to actively contribute to building a fair and respectful environment.",
        },
      ],
    },
  };

  const t = content[safeLocale];

  return (
    <>
      {/* Hero */}
      <section className="pt-48 pb-24 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-logo mb-6">
            {t.title}
          </h1>
          <p className="text-gray-300 text-lg">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8 space-y-16">
          {t.articles.map((article) => (
            <Article
              key={article.number}
              number={article.number}
              title={article.title}
              content={article.content}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function Article({
  number,
  title,
  content,
}: {
  number: string;
  title: string;
  content: string;
}) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-2 w-[3px] h-full bg-primary"></div>

      <div className="mb-3 text-sm tracking-widest text-primary font-semibold">
        {number}
      </div>

      <h2 className="text-2xl font-semibold text-secondary mb-4">
        {title}
      </h2>

      <p className="text-gray-700 leading-relaxed">
        {content}
      </p>
    </div>
  );
}