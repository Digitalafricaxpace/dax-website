"use client";

import Link from "next/link";

interface ProductsPreviewProps {
  locale: string;
}

export default function ProductsPreview({ locale }: ProductsPreviewProps) {
  const isFR = locale === "fr";

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-logo leading-tight mb-8">
            {isFR ? (
              <>
                Si votre argent pouvait parler, que dirait-il ? <br />
                <span className="text-primary">CashMap</span> vous aide à l'écouter.
              </>
            ) : (
              <>
                If your money could speak, what would it say? <br />
                <span className="text-primary">CashMap</span> helps you listen.
              </>
            )}
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            {isFR
              ? "CashMap est une solution digitale innovante permettant d’optimiser la gestion financière, améliorer la transparence budgétaire et renforcer l’efficacité des institutions."
              : "CashMap is a powerful digital platform designed to provide precision and transparency in financial management for institutions and organizations."}
          </p>

          <ul className="space-y-4 text-gray-300 mb-10 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
            <li>• {isFR ? "Suivez vos finances avec précision" : "Track your finances precisely"}</li>
            <li>• {isFR ? "Visualisez clairement vos données" : "Visualize your data clearly"}</li>
            <li>• {isFR ? "Agissez en toute confiance" : "Act with confidence"}</li>
          </ul>

          <Link
            href={`/${locale}/produits/cashmap`}
            className="bg-primary text-white px-8 py-4 rounded-md text-sm tracking-wide hover:opacity-90 transition inline-block"
          >
            {isFR ? "Découvrir CashMap" : "Discover CashMap"}
          </Link>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center shadow-xl">
          <span className="text-gray-300 text-sm sm:text-base text-center px-6">
            {isFR
              ? "Aperçu de l'application / Dashboard"
              : "Application preview / Dashboard"}
          </span>
        </div>

      </div>
    </section>
  );
}