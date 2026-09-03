import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

const promoterNames = {
  sejal: "Sejal",
};

const opportunities = [
  "Weekly reports built manually from spreadsheets, dashboards, or internal systems.",
  "Information copied between CRM, ERP, email, spreadsheets, and internal tools.",
  "Documents reviewed, classified, summarized, or processed by hand.",
  "Customer or internal requests repeatedly routed between teams.",
  "Sales research, prospect preparation, follow-ups, and proposal preparation.",
  "Teams repeatedly searching internal documentation for the same answers.",
  "Operations teams checking systems and reacting to recurring conditions.",
  "Business-critical workflows that depend on large or heavily customized spreadsheets.",
];

const audience = [
  "Founders",
  "Business owners",
  "COOs",
  "Operations leaders",
  "SaaS teams",
  "Startup teams",
  "Professional services",
  "Teams exploring practical AI use cases",
];

export default function AiAssessmentPage() {
  const [utm, setUtm] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtm({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
    });
  }, []);

  const promoter = useMemo(() => {
    const key = (utm.utm_campaign || "")
      .toLowerCase()
      .replace(/^ai_assessment_/, "")
      .replace(/[^a-z0-9_-]/g, "");
    return promoterNames[key] || null;
  }, [utm.utm_campaign]);

  function trackEvent(name, params = {}) {
    const payload = {
      campaign: utm.utm_campaign,
      source: utm.utm_source,
      medium: utm.utm_medium,
      content: utm.utm_content,
      ...params,
    };

    if (typeof window !== "undefined") {
      if (typeof window.gtag === "function") {
        window.gtag("event", name, payload);
      }
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: name, ...payload });
    }
  }

  function handleBookClick(label) {
    trackEvent("book_assessment_click", { link_text: label });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", message: "" });
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/ai-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          ...utm,
          landing_page: window.location.href,
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || "Your request could not be sent.");
      }

      trackEvent("generate_lead", {
        lead_source: utm.utm_source || "direct",
        lead_campaign: utm.utm_campaign || "none",
      });

      form.reset();
      setStatus({
        type: "success",
        message: "Thank you. Your assessment request has been received.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Your request could not be sent.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Head>
        <title>Free AI Automation Assessment | Ergofect</title>
        <meta
          name="description"
          content="Book a free 20-minute Ergofect AI Automation Assessment and identify up to three business processes that could benefit from AI, automation, or better integrations."
        />
        <meta property="og:title" content="Free AI Automation Assessment | Ergofect" />
        <meta
          property="og:description"
          content="Find up to three high-value opportunities to reduce repetitive work with AI and automation."
        />
      </Head>

      <main className="bg-paper text-ink">
        <section className="border-b border-ink/10 pt-20 md:pt-28 pb-14 md:pb-20">
          <div className="container grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-ink/15 bg-white px-4 py-2 rounded-full text-xs md:text-sm font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-cobalt" />
                {promoter
                  ? `You discovered Ergofect through ${promoter}.`
                  : "Free Ergofect AI Automation Assessment."}
              </div>

              <h1 className="text-5xl md:text-7xl xl:text-8xl leading-[0.96] tracking-[-0.055em] font-bold max-w-5xl">
                Find the work your business should stop doing manually.
              </h1>

              <p className="mt-7 text-lg md:text-2xl text-graphite max-w-3xl leading-relaxed">
                In a free 20-minute AI Automation Assessment, Ergofect reviews one of your workflows and identifies up to three practical opportunities for AI, automation, or better system integrations.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href="#assessment-form"
                  onClick={() => handleBookClick("Book my free assessment")}
                  className="bg-cobalt text-bone px-7 py-4 font-bold text-sm text-center hover:bg-ink transition-colors"
                >
                  Book my free assessment
                </a>
                <a
                  href="#how-it-works"
                  className="border border-ink/20 bg-white px-7 py-4 font-bold text-sm text-center hover:border-cobalt hover:text-cobalt transition-colors"
                >
                  See how it works
                </a>
              </div>

              <p className="mt-4 text-sm text-graphite">20 minutes · Up to 3 opportunities · No obligation</p>
            </div>

            <aside className="bg-ink text-bone p-7 md:p-9 rounded-[28px]">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-5">What you leave with</h2>
              {[
                ["01", "Automation opportunities", "Up to three processes where AI or automation could reduce repetitive work."],
                ["02", "Solution direction", "A practical recommendation for agents, integrations, workflow automation, or a custom application."],
                ["03", "Business impact", "Where the change could save time, reduce manual steps, improve consistency, or lower operating cost."],
              ].map(([num, title, copy], index) => (
                <div key={num} className={`grid grid-cols-[44px_1fr] gap-4 py-5 ${index ? "border-t border-white/15" : ""}`}>
                  <span className="w-10 h-10 rounded-full border border-white/25 grid place-items-center text-xs font-bold">{num}</span>
                  <div>
                    <h3 className="font-bold mb-1">{title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{copy}</p>
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section className="py-8 md:py-12 border-b border-ink/10">
          <div className="container grid grid-cols-2 lg:grid-cols-4 border border-ink/10 bg-white">
            {[
              ["20 min", "Focused business assessment"],
              ["Up to 3", "Automation opportunities"],
              ["Practical", "Recommendations based on your workflow"],
              ["Free", "No obligation"],
            ].map(([value, label]) => (
              <div key={value} className="p-5 md:p-7 border-r border-b lg:border-b-0 border-ink/10 last:border-r-0">
                <div className="text-2xl md:text-3xl font-bold tracking-tight">{value}</div>
                <div className="mt-1 text-xs md:text-sm text-graphite">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="py-20 md:py-28 bg-bone">
          <div className="container">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-cobalt mb-3">How it works</p>
            <h2 className="text-4xl md:text-6xl tracking-[-0.045em] leading-[1.02] font-bold max-w-4xl">
              Start with the business problem, not an AI product.
            </h2>
            <p className="mt-5 text-lg md:text-xl text-graphite max-w-3xl">
              Bring one process that takes too much time, involves repeated manual steps, or depends on disconnected systems.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-10">
              {[
                ["STEP 01", "Show us the workflow", "Explain what happens today, who is involved, which tools are used, and where time is being lost."],
                ["STEP 02", "We assess the opportunity", "We review the process, data, decisions, handoffs, integrations, and repeated manual work."],
                ["STEP 03", "Get your recommendations", "You receive up to three practical opportunities and a clear direction for what is worth pursuing."],
              ].map(([step, title, copy]) => (
                <article key={step} className="bg-white border border-ink/10 p-7 md:p-8">
                  <div className="font-mono text-xs font-bold tracking-[0.12em] text-cobalt mb-8">{step}</div>
                  <h3 className="text-2xl font-bold tracking-tight mb-3">{title}</h3>
                  <p className="text-graphite leading-relaxed">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-cobalt mb-3">Good starting points</p>
            <h2 className="text-4xl md:text-6xl tracking-[-0.045em] leading-[1.02] font-bold max-w-4xl">What could Ergofect automate?</h2>
            <p className="mt-5 text-lg md:text-xl text-graphite max-w-3xl">
              The strongest candidates are usually repetitive, rules-based, time-consuming, or spread across multiple systems.
            </p>

            <div className="grid md:grid-cols-2 gap-x-10 mt-10">
              {opportunities.map((item) => (
                <div key={item} className="flex gap-4 py-5 border-b border-ink/10">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-cobalt text-bone grid place-items-center text-xs font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-ink text-bone p-8 md:p-12 rounded-[28px]">
              <p className="text-3xl md:text-5xl font-bold tracking-[-0.04em] leading-tight">“Why are we still doing this manually?”</p>
              <p className="mt-5 text-white/65">If that question comes up often, the process is probably worth assessing.</p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-bone border-y border-ink/10">
          <div className="container">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-cobalt mb-3">Who this is for</p>
            <h2 className="text-4xl md:text-6xl tracking-[-0.045em] leading-[1.02] font-bold max-w-5xl">
              A practical session for people responsible for how the business runs.
            </h2>
            <div className="flex flex-wrap gap-2.5 mt-9">
              {audience.map((item) => (
                <span key={item} className="bg-white border border-ink/15 rounded-full px-4 py-2.5 text-sm font-bold">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="assessment-form" className="py-20 md:py-28 bg-ink text-bone">
          <div className="container grid lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-16 items-start">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-cobalt-light mb-3">Free AI Automation Assessment</p>
              <h2 className="text-4xl md:text-6xl tracking-[-0.045em] leading-[1.02] font-bold">Tell us what is taking too much time.</h2>
              <p className="mt-5 text-lg text-white/65 max-w-xl">
                Share one workflow you would like to improve. Ergofect will use it as the starting point for your assessment.
              </p>
              <div className="mt-8 space-y-3 text-white/75">
                <p>✓ 20-minute session</p>
                <p>✓ Up to three automation opportunities</p>
                <p>✓ Practical next-step recommendations</p>
                <p>✓ No obligation</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-paper text-ink p-6 md:p-8 rounded-[28px]" noValidate>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Name" name="name" autoComplete="name" required />
                <Field label="Work email" name="email" type="email" autoComplete="email" required />
                <Field label="Company" name="company" autoComplete="organization" required />
                <Field label="Your role" name="role" autoComplete="organization-title" />
              </div>

              <label className="block mt-4">
                <span className="block text-sm font-bold mb-2">What process would you like to improve?</span>
                <textarea
                  name="workflow"
                  required
                  rows={6}
                  placeholder="Example: Every Monday we export data from our ERP, clean it in Excel, combine it with inventory data, and manually prepare a purchasing forecast."
                  className="w-full border border-ink/20 bg-white px-4 py-3 outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/10 resize-y"
                />
              </label>

              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label>
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-5 bg-cobalt text-bone px-7 py-4 font-bold text-sm hover:bg-ink transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending…" : "Request my free assessment"}
              </button>

              <p className="text-xs text-graphite text-center mt-3">Your details are used to respond to this assessment request.</p>

              {status.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`mt-4 p-4 text-sm font-bold ${status.type === "success" ? "bg-positive/10 text-positive" : "bg-negative/10 text-negative"}`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

function Field({ label, name, type = "text", autoComplete, required = false }) {
  return (
    <label className="block">
      <span className="block text-sm font-bold mb-2">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full border border-ink/20 bg-white px-4 py-3 outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/10"
      />
    </label>
  );
}
