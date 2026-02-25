"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    setLoading(false);

    if (res.ok) {
      alert("Message envoyé !");
    } else {
      alert("Erreur.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input name="fullName" placeholder="Nom" required />
      <input name="email" placeholder="Email" required />
      <input name="subject" placeholder="Sujet" />
      <textarea name="message" placeholder="Message" required />
      <button type="submit" disabled={loading}>
        {loading ? "Envoi..." : "Envoyer"}
      </button>
    </form>
  );
}
