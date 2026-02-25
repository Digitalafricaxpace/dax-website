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
      hoursTitle: "Horaires",
      hours: "Lundi – Vendredi",
      hoursTime: "8h00 – 17h00",
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
      hoursTitle: "Business Hours",
      hours: "Monday – Friday",
      hoursTime: "8:00 AM – 5:00 PM",
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
      <section className="pt-48 pb-24 bg-secondary text-white text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-5xl font-logo mb-6">
            {t.title}
          </h1>
          <p className="text-gray-300 text-lg">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20">

          {/* Informations */}
          <div>
            <h2 className="text-3xl font-logo text-secondary mb-8">
              {t.infoTitle}
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <strong>{safeLocale === "fr" ? "Adresse :" : "Address:"}</strong><br />
                {t.address}
              </p>

              <p>
                <strong>Email :</strong><br />
                {t.email}
              </p>

              <p>
                <strong>{safeLocale === "fr" ? "Téléphone :" : "Phone:"}</strong><br />
                {t.phone}
              </p>

              <p>
                <strong>{t.hoursTitle} :</strong><br />
                {t.hours}<br />
                {t.hoursTime}
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-gray-50 p-12 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-logo text-secondary mb-8">
              {t.formTitle}
            </h2>

            <form
  className="space-y-6"
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Message envoyé avec succès");
      e.currentTarget.reset();
    } else {
      alert("Erreur lors de l'envoi");
    }
  }}
>

              <div>
                <label className="block text-sm mb-2 text-gray-600">
                  {t.fullName}
                </label>
                <input name="fullName"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-600">
                  Email
                </label>
                <input name="email"
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-600">
                  {t.subject}
                </label>
                <input name="subject"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-600">
                  {t.message}
                </label>
                <textarea name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white py-4 rounded-md hover:opacity-90 transition"
              >
                {t.send}
              </button>

            </form>
          </div>

        </div>
      </section>
    </>
  );
}