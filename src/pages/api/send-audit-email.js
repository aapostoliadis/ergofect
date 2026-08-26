const recipient = "info@ergofect.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...req.body,
        _subject: "New Ergofect Audit Request",
        _template: "table",
        _captcha: "false",
      }),
    });

    if (!response.ok) {
      return res.status(502).json({ error: "Email delivery failed" });
    }

    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ error: "Email delivery failed" });
  }
}