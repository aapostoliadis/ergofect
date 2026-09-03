const DEFAULT_RECIPIENT = "info@ergofect.com";
const MAX_FIELD_LENGTH = 5000;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 5;

const requestsByIp = globalThis.__ergofectAssessmentRateLimit || new Map();
globalThis.__ergofectAssessmentRateLimit = requestsByIp;

function clean(value, max = MAX_FIELD_LENGTH) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") return forwarded.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const existing = requestsByIp.get(ip) || [];
  const recent = existing.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    requestsByIp.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestsByIp.set(ip, recent);
  return false;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Too many requests. Please try again shortly." });
  }

  try {
    const body = req.body || {};

    // Honeypot field. Leave empty in the public form.
    if (clean(body.website, 200)) {
      return res.status(200).json({ success: true });
    }

    const lead = {
      name: clean(body.name, 150),
      email: clean(body.email, 254).toLowerCase(),
      company: clean(body.company, 200),
      role: clean(body.role, 200),
      workflow: clean(body.workflow, 5000),
      utm_source: clean(body.utm_source, 150),
      utm_medium: clean(body.utm_medium, 150),
      utm_campaign: clean(body.utm_campaign, 200),
      utm_content: clean(body.utm_content, 200),
      landing_page: clean(body.landing_page, 1000),
    };

    if (!lead.name || !lead.email || !lead.company || !lead.workflow) {
      return res.status(400).json({
        error: "Name, work email, company, and workflow are required.",
      });
    }

    if (!isValidEmail(lead.email)) {
      return res.status(400).json({ error: "Please enter a valid work email." });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const recipient = process.env.AI_ASSESSMENT_TO_EMAIL || DEFAULT_RECIPIENT;

    if (!apiKey || !from || from.includes("yourdomain.com")) {
      return res.status(503).json({ error: "Email service is not configured." });
    }

    const submittedAt = new Date().toISOString();

    const text = [
      "New Ergofect AI Automation Assessment",
      "",
      `Name: ${lead.name}`,
      `Work email: ${lead.email}`,
      `Company: ${lead.company}`,
      `Role: ${lead.role || "Not provided"}`,
      "",
      "Workflow to improve:",
      lead.workflow,
      "",
      "Campaign attribution:",
      `UTM source: ${lead.utm_source || "Not provided"}`,
      `UTM medium: ${lead.utm_medium || "Not provided"}`,
      `UTM campaign: ${lead.utm_campaign || "Not provided"}`,
      `UTM content: ${lead.utm_content || "Not provided"}`,
      `Landing page: ${lead.landing_page || "Not provided"}`,
      `Submitted at: ${submittedAt}`,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#111;line-height:1.55">
        <h1 style="font-size:24px;margin:0 0 20px">New AI Automation Assessment</h1>
        <table style="border-collapse:collapse;width:100%;margin-bottom:24px">
          <tr><td style="padding:8px 0;font-weight:700;width:150px">Name</td><td>${escapeHtml(lead.name)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700">Work email</td><td>${escapeHtml(lead.email)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700">Company</td><td>${escapeHtml(lead.company)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700">Role</td><td>${escapeHtml(lead.role || "Not provided")}</td></tr>
        </table>
        <h2 style="font-size:18px;margin:0 0 8px">Workflow to improve</h2>
        <div style="padding:16px;background:#f5f6f8;border-radius:10px;white-space:pre-wrap">${escapeHtml(lead.workflow)}</div>
        <h2 style="font-size:18px;margin:24px 0 8px">Campaign attribution</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:6px 0;font-weight:700;width:150px">Source</td><td>${escapeHtml(lead.utm_source || "Not provided")}</td></tr>
          <tr><td style="padding:6px 0;font-weight:700">Medium</td><td>${escapeHtml(lead.utm_medium || "Not provided")}</td></tr>
          <tr><td style="padding:6px 0;font-weight:700">Campaign</td><td>${escapeHtml(lead.utm_campaign || "Not provided")}</td></tr>
          <tr><td style="padding:6px 0;font-weight:700">Content</td><td>${escapeHtml(lead.utm_content || "Not provided")}</td></tr>
          <tr><td style="padding:6px 0;font-weight:700">Submitted</td><td>${escapeHtml(submittedAt)}</td></tr>
        </table>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: lead.email,
        subject: `AI Assessment Lead: ${lead.company} (${lead.utm_campaign || "direct"})`,
        text,
        html,
      }),
    });

    const providerPayload = await response.json().catch(() => null);

    if (!response.ok) {
      console.error("Resend AI assessment delivery failed", {
        status: response.status,
        providerPayload,
      });
      return res.status(502).json({
        error: providerPayload?.message || "Email delivery failed.",
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("AI assessment endpoint failed", error);
    return res.status(500).json({ error: "Assessment request could not be sent." });
  }
}
