"use client";

type ContactTranslations = {
  fullName: string;
  subject: string;
  message: string;
  send: string;
};

interface ContactFormProps {
  t: ContactTranslations;
}

export default function ContactForm({ t }: ContactFormProps) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm mb-2 text-gray-600">
          {t.fullName}
        </label>
        <input
          name="fullName"
          type="text"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm mb-2 text-gray-600">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm mb-2 text-gray-600">
          {t.subject}
        </label>
        <input
          name="subject"
          type="text"
          className="w-full px-4 py-3 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm mb-2 text-gray-600">
          {t.message}
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-secondary text-white py-4 rounded-md hover:opacity-90 transition"
      >
        {t.send}
      </button>
    </form>
  );
}
