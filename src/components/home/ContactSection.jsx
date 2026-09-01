import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import sendAuditEmail from "@/utils/sendAuditEmail";
import { serviceOptions, spendOptions, teamSizeOptions } from "@/data/auditOptions";

export default function ContactSection() {
  const [formStep, setFormStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedSpend, setSelectedSpend] = useState("");
  const [selectedTeamSize, setSelectedTeamSize] = useState("");
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [bottleneck, setBottleneck] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function toggleService(svc) {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  }

  function validateStep(step) {
    const stepErrors = {};
    if (step === 0) {
      if (!fullName.trim()) stepErrors.fullName = "Please enter your full name.";
      if (!workEmail.trim()) {
        stepErrors.workEmail = "Please enter your work email.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail.trim())) {
        stepErrors.workEmail = "Please enter a valid email address.";
      }
      if (!companyName.trim()) stepErrors.companyName = "Please enter your company name.";
    }
    if (step === 2) {
      if (!bottleneck.trim()) stepErrors.bottleneck = "Please describe your biggest bottleneck.";
    }
    return stepErrors;
  }

  function goToStep(targetStep) {
    if (targetStep > formStep) {
      const stepErrors = validateStep(formStep);
      if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors);
        return;
      }
    }
    setErrors({});
    setFormStep(targetStep);
  }

  async function handleSubmit() {
    const stepErrors = validateStep(2);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    try {
      await sendAuditEmail({
        "Full name": fullName.trim(),
        "Work email": workEmail.trim(),
        "Company name": companyName.trim(),
        Role: role.trim(),
        "Team size": selectedTeamSize,
        Services: selectedServices,
        "Monthly operational spend": selectedSpend,
        Bottleneck: bottleneck.trim(),
      });
      setSubmitted(true);
    } catch (error) {
      setErrors({ submit: error.message || "We could not send your request. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-ink text-bone pt-20 md:pt-32 pb-20 md:pb-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
          <div>
            <FadeIn>
              <h2 className="text-5xl md:text-8xl font-semibold tracking-[0em] leading-none mb-6 md:mb-8">
                Ready to Scope{" "}
                <span className="text-cobalt-light">Your First Workflow?</span>
              </h2>
              <p className="font-mono opacity-60 uppercase text-[10px] md:text-sm mb-8 md:mb-12 max-w-md">
                I personally review every audit request to check the workflow,
                evidence, and delivery constraints before proposing a pilot.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-700 rounded-full overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/avatars/felix.webp"
                    alt="Akis Apostoliadis, founder of Ergofect"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-widest text-xs md:text-sm">
                    Akis Apostoliadis
                  </p>
                  <p className="font-mono text-[10px] md:text-xs opacity-50 uppercase">
                    Founder
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={200}>
              {submitted ? (
                <div className="py-12 text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-[0em] mb-4">
                    Thanks, {fullName.trim().split(" ")[0]}.
                  </h3>
                  <p className="font-mono opacity-60 uppercase text-[10px] md:text-sm max-w-md">
                    We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
              <form className="space-y-8 md:space-y-10">
                {/* Step Indicator */}
                <div className="flex items-center gap-2 font-mono text-[9px] md:text-xs uppercase">
                  {["Your Info", "Your Needs", "Details"].map((label, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => goToStep(i)}
                      className={`flex items-center gap-2 px-2 md:px-3 py-2 border transition-colors ${
                        formStep === i
                          ? "border-cobalt-light bg-cobalt-light text-ink"
                          : formStep > i
                          ? "border-bone/20 bg-bone/5"
                          : "border-bone/10"
                      }`}
                    >
                      <span className="font-bold">{String(i + 1).padStart(2, "0")}</span>
                      <span className="hidden sm:inline">{label}</span>
                    </button>
                  ))}
                </div>

                {/* Step 1: Your Info */}
                <div className={formStep === 0 ? "block" : "hidden"}>
                  <div className="space-y-6 md:space-y-8 font-mono text-[10px] md:text-sm uppercase">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div>
                        <label className="block mb-2 opacity-50">Full Name *</label>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className={`w-full bg-transparent border-b pb-2 focus:outline-none focus:border-cobalt-light transition-colors rounded-none ${
                            errors.fullName ? "border-negative" : "border-bone/20"
                          }`}
                          placeholder="Jane Doe"
                          required
                          aria-invalid={Boolean(errors.fullName)}
                        />
                        {errors.fullName && (
                          <p className="mt-2 normal-case tracking-normal text-negative">{errors.fullName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block mb-2 opacity-50">Work Email *</label>
                        <input
                          type="email"
                          value={workEmail}
                          onChange={(e) => setWorkEmail(e.target.value)}
                          className={`w-full bg-transparent border-b pb-2 focus:outline-none focus:border-cobalt-light transition-colors rounded-none ${
                            errors.workEmail ? "border-negative" : "border-bone/20"
                          }`}
                          placeholder="jane@company.com"
                          required
                          aria-invalid={Boolean(errors.workEmail)}
                        />
                        {errors.workEmail && (
                          <p className="mt-2 normal-case tracking-normal text-negative">{errors.workEmail}</p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div>
                        <label className="block mb-2 opacity-50">Company Name *</label>
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className={`w-full bg-transparent border-b pb-2 focus:outline-none focus:border-cobalt-light transition-colors rounded-none ${
                            errors.companyName ? "border-negative" : "border-bone/20"
                          }`}
                          placeholder="Your Company"
                          required
                          aria-invalid={Boolean(errors.companyName)}
                        />
                        {errors.companyName && (
                          <p className="mt-2 normal-case tracking-normal text-negative">{errors.companyName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block mb-2 opacity-50">Your Role</label>
                        <input
                          type="text"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="w-full bg-transparent border-b border-bone/20 pb-2 focus:outline-none focus:border-cobalt-light transition-colors rounded-none"
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
                            className={`border px-3 md:px-4 py-2 transition-colors ${
                              selectedTeamSize === size
                                ? "border-cobalt-light bg-cobalt-light text-ink"
                                : "border-bone/20 hover:border-cobalt-light"
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
                    onClick={() => goToStep(1)}
                    className="mt-8 md:mt-10 bg-cobalt-light text-ink py-3 md:py-4 px-8 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-bone transition-colors"
                  >
                    Continue →
                  </button>
                </div>

                {/* Step 2: Your Needs */}
                <div className={formStep === 1 ? "block" : "hidden"}>
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
                            className={`border px-3 md:px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                              selectedServices.includes(svc)
                                ? "border-cobalt-light bg-cobalt-light text-ink"
                                : "border-bone/20 hover:border-cobalt-light"
                            }`}
                          >
                            <span
                              className={`w-3 h-3 border shrink-0 flex items-center justify-center ${
                                selectedServices.includes(svc)
                                  ? "border-ink bg-ink"
                                  : "border-bone/40"
                              }`}
                            >
                              {selectedServices.includes(svc) && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
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
                            className={`border px-3 md:px-4 py-2 transition-colors ${
                              selectedSpend === opt
                                ? "border-cobalt-light bg-cobalt-light text-ink"
                                : "border-bone/20 hover:border-cobalt-light"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8 md:mt-10">
                    <button
                      type="button"
                      onClick={() => goToStep(0)}
                      className="border border-bone/20 py-3 md:py-4 px-6 md:px-8 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-bone/5 transition-colors font-mono"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => goToStep(2)}
                      className="bg-cobalt-light text-ink py-3 md:py-4 px-8 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-bone transition-colors"
                    >
                      Continue →
                    </button>
                  </div>
                </div>

                {/* Step 3: Details */}
                <div className={formStep === 2 ? "block" : "hidden"}>
                  <div className="space-y-6 md:space-y-8 font-mono text-[10px] md:text-sm uppercase">
                    <div>
                      <label className="block mb-2 opacity-50">
                        Describe Your Biggest Operational Bottleneck *
                      </label>
                      <textarea
                        rows={4}
                        value={bottleneck}
                        onChange={(e) => setBottleneck(e.target.value)}
                        className={`w-full bg-transparent border-b pb-2 focus:outline-none focus:border-cobalt-light transition-colors rounded-none resize-none ${
                          errors.bottleneck ? "border-negative" : "border-bone/20"
                        }`}
                        placeholder="e.g., Our support team spends 4 hours daily on repetitive ticket responses..."
                        required
                        aria-invalid={Boolean(errors.bottleneck)}
                      />
                      {errors.bottleneck && (
                        <p className="mt-2 normal-case tracking-normal text-negative">{errors.bottleneck}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8 md:mt-10">
                    <button
                      type="button"
                      onClick={() => goToStep(1)}
                      className="border border-bone/20 py-3 md:py-4 px-6 md:px-8 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-bone/5 transition-colors font-mono"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-cobalt-light text-ink py-3 md:py-4 px-8 md:px-12 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-bone transition-colors"
                    >
                      Submit Audit Request
                    </button>
                  </div>
                  {errors.submit && <p className="text-negative">{errors.submit}</p>}
                </div>
              </form>
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
