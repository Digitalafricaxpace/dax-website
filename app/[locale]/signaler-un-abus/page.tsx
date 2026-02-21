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
import ReportForm from "@/components/sections/ReportForm";

export function generateStaticParams() {
  return [
    { locale: "fr" },
    { locale: "en" },
  ];
}

export default async function SignalerAbus({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "fr";

  const content = {
    fr: {
      title: "Signalement d’un abus",
      subtitle:
        "Vous pouvez signaler tout comportement contraire à notre Code de Conduite. Les signalements sont traités avec confidentialité.",
    },
    en: {
      title: "Report Misconduct",
      subtitle:
        "You may report any behavior that violates our Code of Conduct. All reports are handled confidentially.",
    },
  };

  const t = content[safeLocale];

  return (
    <>
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

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <ReportForm locale={safeLocale} />
        </div>
      </section>
    </>
  );
}