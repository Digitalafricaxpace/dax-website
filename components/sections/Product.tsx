"use client";

import Link from "next/link";

export default function ProductsPreview({ locale }: { locale: string }) {
  const isFR = locale === "fr";

  return (
    <section className="py-32 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-logo leading-tight mb-8">
            {isFR ? (
              <>
                Si Vote Argent Pouvait Parler, Que Dirait-Il ? <br />
                <span className="text-primary">CashMap</span> vous aide à l'écouter.
              </>
            ) : (
              <>
                If Your Money Could Speak, What Would It Say? <br />
                <span className="text-primary">CashMap</span> helps you listen.
              </>
            )}
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
            {isFR
              ? "CashMap est une solution digitale innovante permettant d’optimiser la gestion financière, améliorer la transparence budgétaire et renforcer l’efficacité des institutions."
              : "CashMap est une plateforme numérique performante conçue pour vous offrir précision et transparence dans la gestion de votre argent, que vous soyez étudiant, professionnel ou institution."}
          </p>

          <ul className="space-y-4 text-gray-300 mb-10">
            <li>
              {isFR
                ? "• Suivez vos finances avec précision"
                : "• Track precisely"}
            </li>
            <li>
              {isFR
                ? "• Visualisez clairement"
                : "• Visualize clearly"}
            </li>
            <li>
              {isFR
                ? "• Agissez en toute confiance"
                : "• Act confidently"}
            </li>
            
          </ul>

          <Link
            href={`/${locale}/produits/cashmap`}
            className="bg-primary text-white px-8 py-4 rounded-md text-sm tracking-wide hover:opacity-90 transition inline-block"
          >
            {isFR ? "Découvrir CashMap" : "Discover CashMap"}
          </Link>
        </div>

        {/* Right Visual */}
        <div className="h-[450px] bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
          <span className="text-gray-300">
            {isFR
              ? "Aperçu de l'application / Dashboard"
              : "Application preview / Dashboard"}
          </span>
        </div>

      </div>
    </section>
  );
}