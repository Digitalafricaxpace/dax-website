import type { Metadata } from "next";
import { Wallet, Activity } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {

  const isFR = params.locale === "fr";

  return {
    title: isFR
      ? "Nos Projets | Digital Africa Xpace"
      : "Our Projects | Digital Africa Xpace",

    description: isFR
      ? "Découvrez les projets stratégiques développés par Digital Africa Xpace."
      : "Discover strategic projects developed by Digital Africa Xpace.",
  };
}

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export default async function ProjetsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "fr";

  const t = {
    fr: {
      title: "Nos Projets",
      subtitle:
        "Des initiatives digitales conçues pour répondre aux enjeux institutionnels majeurs.",
      view: "Voir le projet",
    },
    en: {
      title: "Our Projects",
      subtitle:
        "Digital initiatives designed to address major institutional challenges.",
      view: "View Project",
    },
  };

  const content = t[safeLocale];

  return (
    <>
      {/* HERO */}
{/* HERO */}
<section className="relative pt-36 md:pt-44 lg:pt-48 pb-20 md:pb-24 bg-secondary text-white text-center overflow-hidden">

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

  <div className="relative z-10 max-w-4xl mx-auto px-6">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-logo mb-6">
      {content.title}
    </h1>

    <p className="text-gray-300 text-base sm:text-lg">
      {content.subtitle}
    </p>
  </div>
</section>

      {/* PROJECT GRID */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          <ProjectCard
            icon={<Wallet size={32} strokeWidth={1.5} />}
            title="CashMap"
            context={
              safeLocale === "fr"
                ? "Gestion budgétaire et financière institutionnelle."
                : "Institutional budget and financial management."
            }
            impact={
              safeLocale === "fr"
                ? "Amélioration de la transparence et du pilotage financier."
                : "Improved transparency and financial governance."
            }
            link={`/${safeLocale}/produits/cashmap`}
            button={content.view}
          />

          <ProjectCard
            icon={<Activity size={32} strokeWidth={1.5} />}
            title="TaskWorkFlow"
            context={
              safeLocale === "fr"
                ? "Coordination des programmes élargis de vaccination."
                : "Coordination of expanded immunization programs."
            }
            impact={
              safeLocale === "fr"
                ? "Optimisation de la planification et du suivi terrain."
                : "Optimized planning and field monitoring."
            }
            link={`/${safeLocale}/produits/taskworkflow`}
            button={content.view}
          />

        </div>
      </section>
    </>
  );
}

function ProjectCard({
  icon,
  title,
  context,
  impact,
  link,
  button,
}: {
  icon: React.ReactNode;
  title: string;
  context: string;
  impact: string;
  link: string;
  button: string;
}) {
  return (
    <div className="border border-gray-100 p-10 rounded-xl hover:shadow-xl transition duration-300 group">

      <div className="text-primary mb-6">
        {icon}
      </div>

      <h2 className="text-2xl font-logo text-secondary mb-4">
        {title}
      </h2>

      <p className="text-gray-600 mb-4">
        <strong>Contexte :</strong> {context}
      </p>

      <p className="text-gray-600 mb-8">
        <strong>Impact :</strong> {impact}
      </p>

      <a
        href={link}
        className="inline-block text-primary font-medium border-b border-primary pb-1 hover:opacity-70 transition"
      >
        {button}
      </a>

    </div>
  );
}