"use client";

import { useState } from "react";

export default function ReportForm() {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        category: formData.get("category"),
        description: formData.get("description"),
        anonymous: formData.get("anonymous") === "on",
      }),
    });

const data = await res.json();

if (res.ok) {
  setResponseMessage("Votre signalement a été transmis.");
} else {
  setResponseMessage(data.error || "Une erreur est survenue.");
}


    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">

      <div>
        <label className="block mb-3 text-sm font-medium text-secondary">
          Nom (optionnel)
        </label>
        <input
          name="name"
          className="w-full border border-gray-300 rounded-md px-4 py-3"
        />
      </div>

      <div>
        <label className="block mb-3 text-sm font-medium text-secondary">
          Email (optionnel)
        </label>
        <input
          type="email"
          name="email"
          className="w-full border border-gray-300 rounded-md px-4 py-3"
        />
      </div>

      <div>
        <label className="block mb-3 text-sm font-medium text-secondary">
          Catégorie
        </label>
        <select
          name="category"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-3"
        >
          <option value="">Sélectionner</option>
          <option value="harcelement">Harcèlement</option>
          <option value="discrimination">Discrimination</option>
          <option value="abus_pouvoir">Abus de pouvoir</option>
          <option value="non_conformite">Non conformité</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label className="block mb-3 text-sm font-medium text-secondary">
          Description détaillée
        </label>
        <textarea
  name="description"
  rows={6}
  required
  minLength={20}
  maxLength={2000}
  className="w-full border border-gray-300 rounded-md px-4 py-3"
/>

      </div>

      <div className="flex items-center gap-3">
        <input type="checkbox" name="anonymous" />
        <span className="text-sm text-gray-600">
          Je souhaite rester anonyme
        </span>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-secondary text-white px-8 py-3 rounded-md hover:opacity-90 transition"
      >
        {loading ? "Envoi..." : "Transmettre le signalement"}
      </button>

      {responseMessage && (
        <p className="text-sm text-gray-600">{responseMessage}</p>
      )}
    </form>
  );
}
