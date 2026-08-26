const recipient = "info@ergofect.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const fields = req.body || {};
    const name = fields["Full name"]?.trim();
    const email = fields["Work email"]?.trim();
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    if (!apiKey || !from || from.includes("your-verified-domain.com")) {
      return res.status(503).json({ error: "Email service is not configured" });
    }

    const message = Object.entries(fields)
      .filter(([, value]) => value !== undefined && value !== "")
      .map(([label, value]) => `${label}: ${Array.isArray(value) ? value.join(", ") : value}`)
      .join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: "New Ergofect Audit Request",
        text: message,
      }),
    });

    if (!response.ok) {
      const providerError = await response.json().catch(() => null);
      return res.status(502).json({
        error: providerError?.message || "Email delivery failed",
      });
    }

    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ error: "Email service could not be reached" });
  }
}