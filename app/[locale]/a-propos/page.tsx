import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isFR = params.locale === "fr";

  return {
    title: isFR
      ? "À propos | Digital Africa Xpace"
      : "About | Digital Africa Xpace",

    description: isFR
      ? "Découvrez la vision, la mission et les valeurs de Digital Africa Xpace."
      : "Discover the vision, mission and values of Digital Africa Xpace.",

    alternates: {
      canonical: `https://www.daxsarl.net/${params.locale}/a-propos`,
      languages: {
        fr: "/fr/a-propos",
        en: "/en/a-propos",
      },
    },

    openGraph: {
      title: isFR
        ? "À propos | Digital Africa Xpace"
        : "About | Digital Africa Xpace",
      description: isFR
        ? "Transformation digitale institutionnelle en Afrique."
        : "Institutional digital transformation in Africa.",
      url: `https://www.daxsarl.net/${params.locale}/a-propos`,
      siteName: "Digital Africa Xpace",
      locale: isFR ? "fr_FR" : "en_US",
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
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
      {/* HERO */}
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

      {/* CONTENT */}
      <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-16 md:space-y-20">

          <Block title={t.visionTitle} content={t.vision} />

          <Block title={t.missionTitle} content={t.mission} />

          {/* VALUES */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-logo text-secondary mb-10 text-center md:text-left">
              {t.valuesTitle}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
              {t.values.map((value, index) => (
                <Value
                  key={index}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>

          {/* CONCLUSION */}
          <div className="border-t pt-12 md:pt-16">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-3xl">
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
    <div className="max-w-3xl">
      <h2 className="text-2xl sm:text-3xl font-logo text-secondary mb-6">
        {title}
      </h2>
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
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
    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
      <div className="w-1 h-8 bg-primary mb-6"></div>

      <h3 className="text-lg md:text-xl font-semibold text-secondary mb-4">
        {title}
      </h3>

      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}