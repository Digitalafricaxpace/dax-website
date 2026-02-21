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

export default async function PolitiqueConfidentialite({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "fr";

  const content = {
    fr: {
      title: "Politique de Confidentialité",
      subtitle:
        "Protection des données et engagement envers la transparence.",
      articles: [
        {
          number: "01",
          title: "Responsable du traitement",
          content:
            "Digital Africa Xpace est responsable du traitement des données personnelles collectées via son site et ses services numériques.",
        },
        {
          number: "02",
          title: "Données collectées",
          content:
            "Nous pouvons collecter les données suivantes : nom, prénom, adresse email, informations professionnelles, données de navigation et toute information transmise volontairement via nos formulaires.",
        },
        {
          number: "03",
          title: "Finalités du traitement",
          content:
            "Les données sont collectées pour répondre aux demandes, améliorer nos services, assurer la sécurité du site et respecter nos obligations légales.",
        },
        {
          number: "04",
          title: "Base légale",
          content:
            "Le traitement repose sur le consentement de l’utilisateur, l’exécution d’un contrat ou le respect d’obligations légales conformément au RGPD.",
        },
        {
          number: "05",
          title: "Durée de conservation",
          content:
            "Les données sont conservées uniquement pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées ou conformément aux obligations légales applicables.",
        },
        {
          number: "06",
          title: "Sécurité des données",
          content:
            "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées afin de garantir la sécurité, l’intégrité et la confidentialité des données.",
        },
        {
          number: "07",
          title: "Partage des données",
          content:
            "Les données ne sont pas vendues. Elles peuvent être partagées uniquement avec des partenaires techniques soumis à des obligations strictes de confidentialité.",
        },
        {
          number: "08",
          title: "Droits des utilisateurs",
          content:
            "Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, d’opposition et de limitation du traitement.",
        },
        {
          number: "09",
          title: "Cookies",
          content:
            "Notre site peut utiliser des cookies à des fins techniques ou analytiques. Vous pouvez gérer vos préférences via votre navigateur.",
        },
        {
          number: "10",
          title: "Modification de la politique",
          content:
            "Digital Africa Xpace se réserve le droit de modifier la présente politique afin de l’adapter aux évolutions légales ou technologiques.",
        },
      ],
    },

    en: {
      title: "Privacy Policy",
      subtitle:
        "Data protection and commitment to transparency.",
      articles: [
        {
          number: "01",
          title: "Data Controller",
          content:
            "Digital Africa Xpace is responsible for processing personal data collected through its website and digital services.",
        },
        {
          number: "02",
          title: "Data Collected",
          content:
            "We may collect the following data: name, email address, professional information, browsing data, and any information voluntarily submitted through our forms.",
        },
        {
          number: "03",
          title: "Purpose of Processing",
          content:
            "Data is collected to respond to requests, improve our services, ensure website security, and comply with legal obligations.",
        },
        {
          number: "04",
          title: "Legal Basis",
          content:
            "Processing is based on user consent, contract execution, or compliance with legal obligations under the GDPR.",
        },
        {
          number: "05",
          title: "Data Retention",
          content:
            "Data is retained only for as long as necessary for the purposes for which it was collected or as required by law.",
        },
        {
          number: "06",
          title: "Data Security",
          content:
            "We implement appropriate technical and organizational measures to ensure the security and confidentiality of data.",
        },
        {
          number: "07",
          title: "Data Sharing",
          content:
            "Data is not sold. It may be shared only with technical partners acting on our behalf under strict confidentiality obligations.",
        },
        {
          number: "08",
          title: "User Rights",
          content:
            "Under the GDPR, you have the right to access, rectify, erase, restrict, or object to the processing of your data.",
        },
        {
          number: "09",
          title: "Cookies",
          content:
            "Our website may use cookies for technical or analytical purposes. You can manage preferences through your browser settings.",
        },
        {
          number: "10",
          title: "Policy Updates",
          content:
            "Digital Africa Xpace reserves the right to modify this policy to reflect legal or technological changes.",
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