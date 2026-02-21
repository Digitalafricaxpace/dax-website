"use client";

import { useState } from "react";

export default function ReportForm({
  locale,
}: {
  locale: string;
}) {
  const isFR = locale === "fr";

  const [anonymous, setAnonymous] = useState(false);

  return (
    <form className="space-y-6">

      {/* Type de signalement */}
      <div>
        <label className="block text-sm mb-2 text-gray-600">
          {isFR ? "Type de signalement" : "Type of report"}
        </label>

        <select
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
          required
        >
          <option value="">
            {isFR ? "Sélectionner..." : "Select..."}
          </option>
          <option>
            {isFR ? "Harcèlement" : "Harassment"}
          </option>
          <option>
            {isFR ? "Discrimination" : "Discrimination"}
          </option>
          <option>
            {isFR ? "Abus de pouvoir" : "Abuse of power"}
          </option>
          <option>
            {isFR ? "Autre" : "Other"}
          </option>
        </select>
      </div>

      {/* Anonyme */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={anonymous}
          onChange={() => setAnonymous(!anonymous)}
        />
        <span className="text-sm text-gray-600">
          {isFR
            ? "Soumettre anonymement"
            : "Submit anonymously"}
        </span>
      </div>

      {/* Identité (si pas anonyme) */}
      {!anonymous && (
        <>
          <div>
            <label className="block text-sm mb-2 text-gray-600">
              {isFR ? "Nom complet" : "Full name"}
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
              required
            />
          </div>
        </>
      )}

      {/* Description */}
      <div>
        <label className="block text-sm mb-2 text-gray-600">
          {isFR ? "Description des faits" : "Description of the facts"}
        </label>

        <textarea
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
          required
        />
      </div>

      {/* Upload */}
      <div>
        <label className="block text-sm mb-2 text-gray-600">
          {isFR
            ? "Joindre un document (optionnel)"
            : "Attach a document (optional)"}
        </label>

        <input
          type="file"
          className="w-full text-sm text-gray-600"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-secondary text-white py-4 rounded-md hover:opacity-90 transition"
      >
        {isFR ? "Envoyer le signalement" : "Submit Report"}
      </button>

    </form>
  );
}