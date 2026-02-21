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
import AppleImmersiveSection from "@/components/AppleImmersiveSection";

type Section =
  | {
      title: string;
      description: string;
      image: string;
      dark?: boolean;
      noImage?: false;
    }
  | {
      title: string;
      description: string;
      dark: true;
      noImage: true;
      image?: undefined;
    };

export function generateStaticParams() {
  return [
    { locale: "fr" },
    { locale: "en" },
  ];
}

export default async function CashMapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // ✅ IMPORTANT : await params
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "fr";

  const content: Record<
    string,
    {
      heroSubtitle: string;
      free: string;
      sections: Section[];
    }
  > = {
    fr: {
      heroSubtitle: "La manière la plus simple de gérer votre argent.",
      free: "100% Gratuit",
      sections: [
        {
          title: "Une vue complète.",
          description:
            "Un tableau de bord clair et puissant pour piloter vos finances.",
          image: "/images/cashmap-dashboard.png",
        },
        {
          title: "Suivez chaque dépense.",
          description:
            "Enregistrez vos transactions et contrôlez vos flux financiers.",
          image: "/images/cashmap-spend.png",
        },
        {
          title: "Planifiez intelligemment.",
          description:
            "Définissez votre budget et visualisez son exécution en temps réel.",
          image: "/images/cashmap-budget.png",
        },
        {
          title: "Tous vos comptes. Centralisés.",
          description:
            "Banque, mobile money, liquidités. Une seule interface.",
          image: "/images/cashmap-comptes.png",
        },
        {
          title: "Maîtrisez vos prêts.",
          description:
            "Suivi des remboursements et échéances automatisé.",
          image: "/images/cashmap-loan.png",
        },
        {
          title: "Un relevé complet.",
          description:
            "Historique consolidé et export Excel.",
          image: "/images/cashmap-statement.png",
        },
        {
          dark: true,
          noImage: true,
          title: "Prenez le contrôle.",
          description: "CashMap. Gratuit. Simple. Puissant.",
        },
      ],
    },

    en: {
      heroSubtitle: "The simplest way to manage your money.",
      free: "100% Free",
      sections: [
        {
          title: "A complete overview.",
          description:
            "A clear and powerful dashboard to manage your finances.",
          image: "/images/cashmap-dashboard.png",
        },
        {
          title: "Track every expense.",
          description:
            "Record transactions and control your financial flows.",
          image: "/images/cashmap-spend.png",
        },
        {
          title: "Plan intelligently.",
          description:
            "Set your budget and monitor execution in real time.",
          image: "/images/cashmap-budget.png",
        },
        {
          title: "All your accounts. Centralized.",
          description:
            "Bank, mobile money, cash. One unified interface.",
          image: "/images/cashmap-comptes.png",
        },
        {
          title: "Master your loans.",
          description:
            "Automated repayment tracking and due date management.",
          image: "/images/cashmap-loan.png",
        },
        {
          title: "Complete statement.",
          description:
            "Consolidated history with Excel export.",
          image: "/images/cashmap-statement.png",
        },
        {
          dark: true,
          noImage: true,
          title: "Take control.",
          description: "CashMap. Free. Simple. Powerful.",
        },
      ],
    },
  };

  const t = content[safeLocale];

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-white px-8">
        <h1 className="text-8xl font-logo text-secondary mb-8">
          CashMap
        </h1>

        <p className="text-2xl text-gray-600 mb-8">
          {t.heroSubtitle}
        </p>

        <p className="text-lg text-green-600 font-medium">
          {t.free}
        </p>
      </section>

      {/* Immersive Sections */}
      {t.sections.map((section, index) =>
        section.noImage ? (
<section
  key={index}
  className="min-h-screen flex items-center justify-center text-center px-8 bg-white"
>
  <div>
    <h2 className="text-6xl font-logo mb-8 text-primary">
      {section.title}
    </h2>

    <p className="text-xl text-red-600 font-medium">
      {section.description}
    </p>
  </div>
</section>
        ) : (
          <AppleImmersiveSection
            key={index}
            dark={section.dark}
            title={section.title}
            description={section.description}
            image={section.image}
          />
        )
      )}
    </>
  );
}