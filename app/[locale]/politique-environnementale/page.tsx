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

export default async function PolitiqueEnvironnementale({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "fr";

  const content = {
    fr: {
      title: "Politique Environnementale",
      subtitle:
        "Notre engagement pour un numérique responsable et durable.",
      articles: [
        {
          number: "01",
          title: "Notre engagement",
          content:
            "Chez Digital Africa Xpace, nous reconnaissons que même les activités numériques ont un impact sur l’environnement. Nous nous engageons à réduire notre empreinte écologique et à promouvoir des pratiques responsables dans l’ensemble de nos opérations. La protection de l’environnement fait partie de notre vision d’une entreprise innovante, durable et responsable.",
        },
        {
          number: "02",
          title: "Numérique responsable",
          content: `En tant qu’entreprise digitale, nous agissons pour un usage plus durable des technologies :
• Optimisation des sites web et applications afin de réduire la consommation d’énergie
• Limitation du stockage inutile de données
• Choix de services cloud écoresponsables lorsque possible
• Promotion des bonnes pratiques numériques`,
        },
        {
          number: "03",
          title: "Réduction de la consommation d’énergie",
          content:
            "Nous encourageons l’utilisation d’équipements économes en énergie, l’extinction des appareils non utilisés, le télétravail et les réunions en ligne.",
        },
        {
          number: "04",
          title: "Réduction de l’usage du papier",
          content:
            "Nous privilégions le zéro papier : dématérialisation, signature électronique et impression uniquement si nécessaire.",
        },
        {
          number: "05",
          title: "Gestion responsable des équipements",
          content:
            "Nous prolongeons la durée de vie du matériel, favorisons la réparation et recyclons les déchets électroniques via des filières agréées.",
        },
        {
          number: "06",
          title: "Mobilité durable",
          content:
            "Nous privilégions les réunions à distance, le covoiturage et les transports en commun.",
        },
        {
          number: "07",
          title: "Sensibilisation des équipes",
          content:
            "Nous encourageons les initiatives internes en faveur de l’environnement et intégrons la responsabilité environnementale dans notre culture.",
        },
        {
          number: "08",
          title: "Amélioration continue",
          content:
            "Nous évaluons régulièrement notre impact environnemental et améliorons nos pratiques.",
        },
        {
          number: "09",
          title: "Responsabilité collective",
          content:
            "Chaque collaborateur contribue, par ses actions quotidiennes, à réduire notre impact environnemental.",
        },
      ],
    },

    en: {
      title: "Environmental Policy",
      subtitle:
        "Our commitment to responsible and sustainable digital practices.",
      articles: [
        {
          number: "01",
          title: "Our Commitment",
          content:
            "At Digital Africa Xpace, we recognize that even digital activities have an environmental impact. We are committed to reducing our ecological footprint and promoting responsible practices across our operations.",
        },
        {
          number: "02",
          title: "Responsible Digital Practices",
          content: `As a digital company, we promote sustainable technology use:
• Optimization of websites and applications to reduce energy consumption
• Limiting unnecessary data storage
• Choosing eco-responsible cloud services when possible
• Promoting digital best practices internally`,
        },
        {
          number: "03",
          title: "Energy Reduction",
          content:
            "We encourage energy-efficient equipment, turning off unused devices, remote work, and online meetings.",
        },
        {
          number: "04",
          title: "Paper Reduction",
          content:
            "We prioritize paperless operations: digital documents, electronic signatures, and printing only when strictly necessary.",
        },
        {
          number: "05",
          title: "Responsible Equipment Management",
          content:
            "We extend equipment lifespan, favor repair over replacement, and recycle electronic waste through certified channels.",
        },
        {
          number: "06",
          title: "Sustainable Mobility",
          content:
            "We prioritize remote meetings, carpooling, and public transportation.",
        },
        {
          number: "07",
          title: "Team Awareness",
          content:
            "We promote environmental awareness among employees and integrate sustainability into our company culture.",
        },
        {
          number: "08",
          title: "Continuous Improvement",
          content:
            "We regularly assess our environmental impact and continuously improve our practices.",
        },
        {
          number: "09",
          title: "Collective Responsibility",
          content:
            "Every employee contributes through daily actions to reduce our environmental footprint.",
        },
      ],
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

      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {content}
      </p>
    </div>
  );
}