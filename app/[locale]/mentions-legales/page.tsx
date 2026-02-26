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
      ? [
          "transformation digitale",
          "gouvernement numérique",
          "solution digitale Afrique",
          "cybersécurité institutionnelle",
        ]
      : [
          "digital transformation Africa",
          "government digital solutions",
          "institutional cybersecurity",
        ],

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
  return [{ locale: "fr" }, { locale: "en" }];
}

export default async function MentionsLegales({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "fr";

  const content = {
    fr: {
      title: "Mentions Légales",
      subtitle:
        "Informations légales relatives à Digital Africa Xpace.",
      articles: [
        {
          number: "01",
          title: "Éditeur du site",
          content: `Digital Africa Xpace (DAX)
Forme juridique : Société à Responsabilité Limitée (SARL)
Siège social : Abomey Calavi, Cotonou, Bénin
Email : info@daxsarl.net`,
        },
        {
          number: "02",
          title: "Hébergement",
          content: `Le site est hébergé par :
Nom : Société Ligne Web Services - LWS
Adresse : 10 rue Penthièvre
75008 Paris (FRANCE)
Site web : https://www.lws.fr`,
        },
        {
          number: "03",
          title: "Propriété intellectuelle",
          content:
            "L’ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Digital Africa Xpace, sauf mention contraire. Toute reproduction ou utilisation sans autorisation préalable est interdite.",
        },
        {
          number: "04",
          title: "Responsabilité",
          content:
            "Digital Africa Xpace s’efforce d’assurer l’exactitude des informations publiées sur le site. Toutefois, elle ne saurait être tenue responsable des erreurs, omissions ou résultats obtenus par un usage inapproprié des informations.",
        },
        {
          number: "05",
          title: "Données personnelles",
          content:
            "Les informations relatives à la collecte et au traitement des données personnelles sont détaillées dans notre Politique de Confidentialité.",
        },
        {
          number: "06",
          title: "Droit applicable",
          content:
            "Le présent site est soumis au droit applicable dans le pays d’établissement de Digital Africa Xpace. En cas de litige, les tribunaux compétents seront ceux du siège social.",
        },
      ],
    },
    en: {
      title: "Legal Notice",
      subtitle:
        "Legal information regarding Digital Africa Xpace.",
      articles: [
        {
          number: "01",
          title: "Website Publisher",
          content: `Digital Africa Xpace (DAX)
Legal form: Limited Liability Company (LLC)
Head office: Abomey Calavi, Cotonou, Benin
Email: info@daxsarl.net`,
        },
        {
          number: "02",
          title: "Hosting",
          content: `This website is hosted by:
Name: Société Ligne Web Services - LWS
Address: 10 rue Penthièvre
75008 Paris (FRANCE)
Website: https://www.lws.fr`,
        },
        {
          number: "03",
          title: "Intellectual Property",
          content:
            "All content on this website (texts, images, graphics, logo, icons, etc.) is the exclusive property of Digital Africa Xpace unless otherwise stated. Any reproduction or use without prior authorization is prohibited.",
        },
        {
          number: "04",
          title: "Liability",
          content:
            "Digital Africa Xpace strives to ensure the accuracy of the information published on this website. However, it cannot be held responsible for errors, omissions, or results obtained through improper use of the information.",
        },
        {
          number: "05",
          title: "Personal Data",
          content:
            "Information relating to the collection and processing of personal data is detailed in our Privacy Policy.",
        },
        {
          number: "06",
          title: "Applicable Law",
          content:
            "This website is subject to the law applicable in the country where Digital Africa Xpace is established. In case of dispute, the competent courts shall be those of the registered office.",
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

      {/* CONTENT */}
      <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="max-w-3xl md:max-w-4xl mx-auto px-6 md:px-8 space-y-14 md:space-y-16">
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
    <div className="relative pl-8 md:pl-10">
      <div className="absolute left-0 top-2 w-[3px] h-full bg-primary rounded-full"></div>

      <div className="mb-3 text-xs md:text-sm tracking-widest text-primary font-semibold">
        {number}
      </div>

      <h2 className="text-xl md:text-2xl font-semibold text-secondary mb-4">
        {title}
      </h2>

      <p className="text-gray-700 text-sm md:text-base leading-relaxed whitespace-pre-line">
        {content}
      </p>
    </div>
  );
}