"use client";

import { useState } from "react";

interface ReportFormProps {
  locale: string;
}

export default function ReportForm({ locale }: ReportFormProps) {
  const isFR = locale === "fr";
  const [anonymous, setAnonymous] = useState(false);

  return (
    <div className="max-w-2xl mx-auto px-6 md:px-8">
      <form className="space-y-8 bg-white p-8 md:p-10 rounded-xl shadow-lg">

        {/* Type */}
        <div>
          <label className="block text-sm font-medium mb-3 text-gray-600">
            {isFR ? "Type de signalement" : "Type of report"}
          </label>

          <select
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
          >
            <option value="">
              {isFR ? "Sélectionner..." : "Select..."}
            </option>
            <option>{isFR ? "Harcèlement" : "Harassment"}</option>
            <option>{isFR ? "Discrimination" : "Discrimination"}</option>
            <option>{isFR ? "Abus de pouvoir" : "Abuse of power"}</option>
            <option>{isFR ? "Autre" : "Other"}</option>
          </select>
        </div>

        {/* Anonymous */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={anonymous}
            onChange={() => setAnonymous(!anonymous)}
            className="h-4 w-4 accent-primary"
          />
          <span className="text-sm text-gray-600">
            {isFR ? "Soumettre anonymement" : "Submit anonymously"}
          </span>
        </div>

        {/* Identity */}
        {!anonymous && (
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-600">
                {isFR ? "Nom complet" : "Full name"}
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-3 text-gray-600">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
              />
            </div>
          </div>
        )}

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-3 text-gray-600">
            {isFR
              ? "Description des faits"
              : "Description of the facts"}
          </label>

          <textarea
            rows={6}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none"
          />
        </div>

        {/* File */}
        <div>
          <label className="block text-sm font-medium mb-3 text-gray-600">
            {isFR
              ? "Joindre un document (optionnel)"
              : "Attach a document (optional)"}
          </label>

          <input
            type="file"
            className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-md file:bg-secondary file:text-white hover:file:opacity-90 transition"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-secondary text-white py-4 rounded-md font-medium tracking-wide hover:opacity-90 transition"
        >
          {isFR ? "Envoyer le signalement" : "Submit Report"}
        </button>

      </form>
    </div>
  );
}