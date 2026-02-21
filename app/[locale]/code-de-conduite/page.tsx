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

export default async function CodeDeConduite({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "fr";

  const content = {
    fr: {
      title: "Code de Conduite",
      subtitle:
        "Les principes éthiques et professionnels qui guident Digital Africa Xpace.",
      articles: [
        {
          number: "01",
          title: "Respect et dignité",
          content:
            "Chaque personne doit être traitée avec respect, équité et considération. Nous ne tolérons aucun comportement visant à humilier, exclure, intimider ou dévaloriser une autre personne.",
        },
        {
          number: "02",
          title: "Inclusion et non-discrimination",
          content:
            "Nous valorisons la diversité des profils, des idées et des expériences. Toute forme de discrimination est strictement interdite. Chacun contribue à un environnement inclusif.",
        },
        {
          number: "03",
          title: "Communication professionnelle",
          content:
            "Les échanges doivent rester courtois, respectueux et constructifs. Les propos offensants ou dégradants sont interdits.",
        },
        {
          number: "04",
          title: "Harcèlement et comportements inappropriés",
          content:
            "Le harcèlement, sous toutes ses formes, est strictement interdit. Les signalements sont traités avec sérieux, confidentialité et impartialité.",
        },
        {
          number: "05",
          title: "Équité et intégrité professionnelle",
          content:
            "Honnêteté, transparence, respect des règles internes et refus de toute forme d’abus de pouvoir sont attendus de chacun.",
        },
        {
          number: "06",
          title: "Confidentialité",
          content:
            "Les informations professionnelles et stratégiques doivent être protégées. Aucune donnée sensible ne doit être partagée sans autorisation.",
        },
        {
          number: "07",
          title: "Responsabilité individuelle",
          content:
            "Chaque collaborateur représente l’image de Digital Africa Xpace. Un comportement éthique est attendu en toute circonstance.",
        },
        {
          number: "08",
          title: "Signalement des violations",
          content:
            "Tout manquement peut être signalé via les canaux internes. Aucune représaille ne sera tolérée.",
        },
        {
          number: "09",
          title: "Engagement collectif",
          content:
            "Le respect de ce code est une responsabilité partagée pour garantir un environnement sûr et professionnel.",
        },
      ],
      cultureTitle: "10. Culture de communication interne",
      cultureIntro:
        "Chez Digital Africa Xpace, nous adoptons une communication fondée sur la simplicité, l’égalité et l’accessibilité.",
      cultureList: [
        "Appel par les prénoms",
        "Tutoiement privilégié en interne",
        "Communication ouverte et respectueuse",
      ],
      cultureEnd:
        "Cette approche vise à réduire les barrières hiérarchiques tout en maintenant professionnalisme et respect.",
    },

    en: {
      title: "Code of Conduct",
      subtitle:
        "The ethical and professional principles guiding Digital Africa Xpace.",
      articles: [
        {
          number: "01",
          title: "Respect and Dignity",
          content:
            "Every individual must be treated with respect, fairness and consideration. We do not tolerate any behavior aimed at humiliating, excluding or devaluing another person.",
        },
        {
          number: "02",
          title: "Inclusion and Non-Discrimination",
          content:
            "We value diversity of backgrounds, ideas and experiences. Any form of discrimination is strictly prohibited. Everyone contributes to an inclusive environment.",
        },
        {
          number: "03",
          title: "Professional Communication",
          content:
            "All interactions must remain courteous, respectful and constructive. Offensive or degrading remarks are prohibited.",
        },
        {
          number: "04",
          title: "Harassment and Inappropriate Conduct",
          content:
            "Harassment in any form is strictly prohibited. Reports are handled with seriousness, confidentiality and impartiality.",
        },
        {
          number: "05",
          title: "Professional Integrity",
          content:
            "Honesty, transparency, respect for internal rules and refusal of any abuse of power are expected from everyone.",
        },
        {
          number: "06",
          title: "Confidentiality",
          content:
            "Professional and strategic information must be protected. No sensitive data should be shared without proper authorization.",
        },
        {
          number: "07",
          title: "Individual Responsibility",
          content:
            "Each employee represents the image of Digital Africa Xpace. Ethical conduct is expected at all times.",
        },
        {
          number: "08",
          title: "Reporting Violations",
          content:
            "Any breach may be reported through internal channels. No retaliation will be tolerated.",
        },
        {
          number: "09",
          title: "Collective Commitment",
          content:
            "Respecting this code is a shared responsibility to ensure a safe and professional environment.",
        },
      ],
      cultureTitle: "10. Internal Communication Culture",
      cultureIntro:
        "At Digital Africa Xpace, we adopt a communication culture based on simplicity, equality and accessibility.",
      cultureList: [
        "First-name basis",
        "Informal internal communication",
        "Open and respectful dialogue",
      ],
      cultureEnd:
        "This approach reduces hierarchical barriers while maintaining professionalism and respect.",
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

          <div className="border-t pt-16">
            <h2 className="text-3xl font-logo text-secondary mb-6">
              {t.cultureTitle}
            </h2>

            <p className="text-gray-700 mb-6">
              {t.cultureIntro}
            </p>

            <ul className="space-y-4 text-gray-700 list-disc pl-6 mb-6">
              {t.cultureList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p className="text-gray-700">
              {t.cultureEnd}
            </p>
          </div>

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