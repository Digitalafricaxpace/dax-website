import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isFR = params.locale === "fr";

  return {
    title: isFR
      ? "Digital Africa Xpace | Contact"
      : "Digital Africa Xpace | Contact",

    description: isFR
      ? "Contactez Digital Africa Xpace pour vos projets digitaux institutionnels."
      : "Contact Digital Africa Xpace for your institutional digital projects.",
  };
}

export function generateStaticParams() {
  return [
    { locale: "fr" },
    { locale: "en" },
  ];
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "fr";

  const content = {
    fr: {
      title: "Contact",
      subtitle:
        "Échangeons sur vos besoins stratégiques et projets numériques.",
      infoTitle: "Nos coordonnées",
      address: "Cotonou Abomey Calavi, Bénin",
      email: "info@daxsarl.net",
      phone: "+229 01 69 15 36 29",
      formTitle: "Envoyer un message",
      fullName: "Nom complet",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer le message",
    },
    en: {
      title: "Contact",
      subtitle:
        "Let’s discuss your strategic needs and digital projects.",
      infoTitle: "Our Contact Details",
      address: "Cotonou Abomey Calavi, Benin",
      email: "info@daxsarl.net",
      phone: "+229 01 69 15 36 29",
      formTitle: "Send a Message",
      fullName: "Full Name",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
    },
  };

  const t = content[safeLocale];

  return (
    <>
      {/* Hero */}
<<<<<<< HEAD
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

  <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-logo mb-6">
      {t.title}
    </h1>

    <p className="text-gray-300 text-base sm:text-lg">
      {t.subtitle}
    </p>
  </div>
</section>
=======
      <section className="pt-48 pb-24 bg-secondary text-white text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-5xl font-logo mb-6">{t.title}</h1>
          <p className="text-gray-300 text-lg">{t.subtitle}</p>
        </div>
      </section>
>>>>>>> 33adcf1a4ad5e9f31ec552444687206f7ccfeb63

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-logo text-secondary mb-8">
              {t.infoTitle}
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <strong>Adresse :</strong><br />
                {t.address}
              </p>

              <p>
                <strong>Email :</strong><br />
                {t.email}
              </p>

              <p>
                <strong>Téléphone :</strong><br />
                {t.phone}
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-gray-50 p-12 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-logo text-secondary mb-8">
              {t.formTitle}
            </h2>

            <ContactForm t={t} />
          </div>
        </div>
      </section>
    </>
  );
}
