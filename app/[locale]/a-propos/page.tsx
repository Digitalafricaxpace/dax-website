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

export default async function APropos({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "fr";

  const content = {
    fr: {
      title: "À propos",
      subtitle:
        "Digital Africa Xpace accompagne les institutions dans leur transformation digitale stratégique.",
      visionTitle: "Notre vision",
      vision:
        "Nous aspirons à bâtir un écosystème numérique africain moderne, sécurisé et performant, capable de soutenir les gouvernements et institutions dans leurs missions stratégiques.",
      missionTitle: "Notre mission",
      mission:
        "Concevoir, développer et déployer des solutions digitales évolutives adaptées aux enjeux institutionnels. Nous combinons expertise technologique, rigueur stratégique et compréhension des environnements publics.",
      valuesTitle: "Nos valeurs",
      values: [
        {
          title: "Intégrité",
          description:
            "Transparence, éthique et responsabilité guident chacune de nos actions.",
        },
        {
          title: "Excellence",
          description:
            "Nous visons des standards élevés en matière de qualité, sécurité et performance.",
        },
        {
          title: "Innovation responsable",
          description:
            "Nous développons des solutions durables et adaptées aux réalités institutionnelles.",
        },
      ],
      conclusion:
        "Digital Africa Xpace se positionne comme un partenaire stratégique de confiance pour accompagner les institutions dans leur évolution numérique, avec une approche structurée, sécurisée et durable.",
    },

    en: {
      title: "About",
      subtitle:
        "Digital Africa Xpace supports institutions in their strategic digital transformation.",
      visionTitle: "Our Vision",
      vision:
        "We aim to build a modern, secure and high-performing African digital ecosystem capable of supporting governments and institutions in their strategic missions.",
      missionTitle: "Our Mission",
      mission:
        "Design, develop and deploy scalable digital solutions tailored to institutional challenges. We combine technological expertise, strategic rigor and deep understanding of public environments.",
      valuesTitle: "Our Values",
      values: [
        {
          title: "Integrity",
          description:
            "Transparency, ethics and accountability guide all our actions.",
        },
        {
          title: "Excellence",
          description:
            "We pursue high standards in quality, security and performance.",
        },
        {
          title: "Responsible Innovation",
          description:
            "We develop sustainable solutions aligned with institutional realities.",
        },
      ],
      conclusion:
        "Digital Africa Xpace positions itself as a trusted strategic partner supporting institutions in their digital evolution, with a structured, secure and sustainable approach.",
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

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-8 space-y-20">

          <Block title={t.visionTitle} content={t.vision} />

          <Block title={t.missionTitle} content={t.mission} />

          <div>
            <h2 className="text-3xl font-logo text-secondary mb-10">
              {t.valuesTitle}
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              {t.values.map((value, index) => (
                <Value
                  key={index}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>

          <div className="border-t pt-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.conclusion}
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

function Block({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div>
      <h2 className="text-3xl font-logo text-secondary mb-6">
        {title}
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        {content}
      </p>
    </div>
  );
}

function Value({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-2 w-[3px] h-6 bg-primary"></div>

      <h3 className="text-xl font-semibold text-secondary mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}