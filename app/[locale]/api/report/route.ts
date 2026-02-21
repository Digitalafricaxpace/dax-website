import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimitMap = new Map<string, number>();

function validateEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const now = Date.now();
    const lastRequest = rateLimitMap.get(ip);

    if (lastRequest && now - lastRequest < 30000) {
      return NextResponse.json(
        { error: "Trop de requêtes." },
        { status: 429 }
      );
    }

    rateLimitMap.set(ip, now);

    const body = await req.json();
    const { name, email, category, description, anonymous } = body;

    if (!category || typeof category !== "string") {
      return NextResponse.json({ error: "Catégorie invalide." }, { status: 400 });
    }

    if (!description || description.length < 20 || description.length > 2000) {
      return NextResponse.json(
        { error: "Description invalide." },
        { status: 400 }
      );
    }

    if (email && !validateEmail(email)) {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }

    const formattedMessage = `
NOUVEAU SIGNALEMENT

Catégorie : ${category}
Anonyme : ${anonymous ? "Oui" : "Non"}

Nom : ${name || "Non fourni"}
Email : ${email || "Non fourni"}

Description :
${description}

IP : ${ip}
Date : ${new Date().toISOString()}
    `;

    await resend.emails.send({
      from: "Signalement <onboarding@resend.dev>",
      to: process.env.REPORT_RECEIVER_EMAIL!,
      subject: `Nouveau signalement (${category})`,
      text: formattedMessage,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur serveur." },
      { status: 500 }
    );
  }
}
