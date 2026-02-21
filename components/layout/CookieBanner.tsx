"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function declineCookies() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-secondary text-white max-w-3xl w-[95%] md:w-auto px-8 py-6 rounded-lg shadow-xl">
      <div className="flex flex-col md:flex-row items-center gap-6">

        <p className="text-sm text-gray-300">
          Nous utilisons des cookies afin d’améliorer votre expérience et
          analyser le trafic du site. Vous pouvez accepter ou refuser leur
          utilisation.
        </p>

        <div className="flex gap-4">
          <button
            onClick={declineCookies}
            className="border border-white text-white px-5 py-2 text-sm rounded-md hover:bg-white hover:text-secondary transition"
          >
            Refuser
          </button>

          <button
            onClick={acceptCookies}
            className="bg-primary text-white px-5 py-2 text-sm rounded-md hover:opacity-90 transition"
          >
            Accepter
          </button>
        </div>

      </div>
    </div>
  );
}
