import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const spendOptions = ["Under $10k", "$10k-$50k", "$50k-$100k", "$100k+"];
const serviceOptions = [
  "Customer Support Automation",
  "Data Processing & Analytics",
  "Workflow Automation",
  "Document Intelligence",
  "Sales & Marketing Automation",
  "Custom AI Solution",
];
const teamSizeOptions = ["1-10", "11-50", "51-200", "201-500", "500+"];

const steps = [
  {
    number: "01",
    title: "Submit Form",
    desc: "Share your details and challenges below.",
  },
  {
    number: "02",
    title: "We Analyze",
    desc: "Our team maps your workflows within 24hrs.",
  },
  {
    number: "03",
    title: "Get Your Report",
    desc: "Receive a detailed audit with ROI projections.",
  },
];

export default function BookAudit() {
  const [formStep, setFormStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedSpend, setSelectedSpend] = useState("");
  const [selectedTeamSize, setSelectedTeamSize] = useState("");

  function toggleService(svc) {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  }

  return (
    <>
      <Head>
        <title>Book Free Audit - Ergsum® | AI Automation Audit</title>
        <meta
          name="description"
          content="Request a free automation audit from Ergsum. We'll map your workflows and show you exactly where AI can save you time and money."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#111111] text-[#F3F3EF]">
        <div className="container">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-[#D6FF00]">
              [ FREE AUTOMATION AUDIT ]
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            <div>
              <FadeIn delay={100}>
                <h1 className="text-5xl md:text-[7vw] lg:text-[5vw] leading-[0.9] font-black uppercase tracking-tighter">
                  Discover What You Could{" "}
                  <span className="text-[#D6FF00]">Automate</span>.
                </h1>
              </FadeIn>
            </div>
            <div className="flex flex-col justify-end">
              <FadeIn delay={200}>
                <p className="text-lg md:text-xl font-medium max-w-lg mb-8">
                  Our founder personally reviews every audit request. You&apos;ll
                  receive a detailed report with automation opportunities and
                  ROI projections — completely free, no strings attached.
                </p>
              </FadeIn>
              <FadeIn delay={300}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-gray-700 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/avatars/felix.webp"
                      alt="CEO"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-xs md:text-sm">
                      John Doe
                    </p>
                    <p className="font-mono text-[10px] md:text-xs opacity-50 uppercase">
                      Founder &amp; CEO
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#F3F3EF] py-12 md:py-16 border-b border-black/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="flex items-start gap-4 md:gap-5">
                  <p className="text-[#D6FF00] bg-black px-2 py-1 font-mono text-xs font-bold shrink-0">
                    {step.number}
                  </p>
                  <div>
                    <h3 className="text-base md:text-lg font-bold uppercase tracking-tighter mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm opacity-60">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#F3F3EF] py-16 md:py-24">
        <div className="container max-w-4xl">
          <FadeIn>
            <form className="space-y-10 md:space-y-12">
              {/* Step Indicator */}
              <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase">
                {["Your Info", "Your Needs", "Details"].map((label, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setFormStep(i)}
                    className={`flex items-center gap-2 px-3 py-2 border transition-colors ${
                      formStep === i
                        ? "border-black bg-black text-[#D6FF00]"
                        : formStep > i
                        ? "border-black/20 bg-black/5"
                        : "border-black/10"
                    }`}
                  >
                    <span className="font-bold">{String(i + 1).padStart(2, "0")}</span>
                    <span className="hidden sm:inline">{label}</span>
                  </button>
                ))}
              </div>

              {/* Step 1: Your Info */}
              <div className={formStep === 0 ? "block" : "hidden"}>
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-8">
                  Tell Us About You.
                </h2>
                <div className="space-y-6 md:space-y-8 font-mono text-[10px] md:text-sm uppercase">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <label className="block mb-2 opacity-50">Full Name *</label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-[#D6FF00] transition-colors rounded-none"
                        placeholder="Jane Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 opacity-50">Work Email *</label>
                      <input
                        type="email"
                        className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-[#D6FF00] transition-colors rounded-none"
                        placeholder="jane@company.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <label className="block mb-2 opacity-50">Company Name *</label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-[#D6FF00] transition-colors rounded-none"
                        placeholder="Your Company"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 opacity-50">Your Role</label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-[#D6FF00] transition-colors rounded-none"
                        placeholder="CEO, CTO, VP Ops..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-4 opacity-50">Team Size</label>
                    <div className="flex flex-wrap gap-3">
                      {teamSizeOptions.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setSelectedTeamSize(size)}
                          className={`border px-4 py-2 transition-colors ${
                            selectedTeamSize === size
                              ? "border-black bg-black text-[#D6FF00]"
                              : "border-black/20 hover:border-black"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setFormStep(1)}
                  className="mt-10 bg-black text-[#D6FF00] py-3 md:py-4 px-8 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-[#D6FF00] hover:text-black transition-colors"
                >
                  Continue →
                </button>
              </div>

              {/* Step 2: Your Needs */}
              <div className={formStep === 1 ? "block" : "hidden"}>
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-8">
                  What Do You Need?
                </h2>
                <div className="space-y-8 font-mono text-[10px] md:text-sm uppercase">
                  <div>
                    <label className="block mb-4 opacity-50">
                      Services Interested In (Select All That Apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => toggleService(svc)}
                          className={`border px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                            selectedServices.includes(svc)
                              ? "border-black bg-black text-[#D6FF00]"
                              : "border-black/20 hover:border-black"
                          }`}
                        >
                          <span
                            className={`w-3 h-3 border shrink-0 flex items-center justify-center ${
                              selectedServices.includes(svc)
                                ? "border-[#D6FF00] bg-[#D6FF00]"
                                : "border-black/40"
                            }`}
                          >
                            {selectedServices.includes(svc) && (
                              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            )}
                          </span>
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block mb-4 opacity-50">
                      Monthly Operational Spend
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {spendOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSelectedSpend(opt)}
                          className={`border px-4 py-2 transition-colors ${
                            selectedSpend === opt
                              ? "border-black bg-black text-[#D6FF00]"
                              : "border-black/20 hover:border-black"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-10">
                  <button
                    type="button"
                    onClick={() => setFormStep(0)}
                    className="border border-black/20 py-3 md:py-4 px-6 md:px-8 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-black/5 transition-colors font-mono"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormStep(2)}
                    className="bg-black text-[#D6FF00] py-3 md:py-4 px-8 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-[#D6FF00] hover:text-black transition-colors"
                  >
                    Continue →
                  </button>
                </div>
              </div>

              {/* Step 3: Details */}
              <div className={formStep === 2 ? "block" : "hidden"}>
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-8">
                  Almost Done.
                </h2>
                <div className="space-y-6 md:space-y-8 font-mono text-[10px] md:text-sm uppercase">
                  <div>
                    <label className="block mb-2 opacity-50">
                      Describe Your Biggest Operational Bottleneck *
                    </label>
                    <textarea
                      rows={5}
                      className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-[#D6FF00] transition-colors rounded-none resize-none"
                      placeholder="e.g., Our support team spends 4 hours daily on repetitive ticket responses..."
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 opacity-50">
                      What Does Success Look Like For You?
                    </label>
                    <textarea
                      rows={3}
                      className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-[#D6FF00] transition-colors rounded-none resize-none"
                      placeholder="e.g., Reduce response time by 50%, cut support costs by $20k/mo..."
                    />
                  </div>
                  <div>
                    <label className="block mb-2 opacity-50">
                      How Did You Hear About Ergsum?
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-[#D6FF00] transition-colors rounded-none"
                      placeholder="Google, referral, social media..."
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-10">
                  <button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="border border-black/20 py-3 md:py-4 px-6 md:px-8 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-black/5 transition-colors font-mono"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    className="bg-[#D6FF00] text-black py-3 md:py-4 px-8 md:px-12 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-black hover:text-[#D6FF00] transition-colors"
                  >
                    Submit Audit Request
                  </button>
                </div>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-[#111111] text-[#F3F3EF] py-16 md:py-20">
        <div className="container">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-black">200+</p>
                <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                  Automations Deployed
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black">98%</p>
                <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                  Client Retention
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black">24hr</p>
                <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                  Response Time
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-[#D6FF00]">Free</p>
                <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                  No Commitment
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
