import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import sendAuditEmail from "@/utils/sendAuditEmail";

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

export default function ContactFormSection() {
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
    <section className="bg-bone py-20 md:py-32 border-b border-black/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
          <div>
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-[0em] leading-none mb-6 md:mb-8">
                Request Your Free{" "}
                <span className="bg-ink text-bone px-2 inline-block">
                  Audit
                </span>
                .
              </h2>
              <p className="text-sm md:text-base opacity-70 leading-relaxed mb-8 max-w-md">
                Fill out the form and we&apos;ll get back to you within 24 hours
                with a preliminary analysis of your automation opportunities.
              </p>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/avatars/felix.webp"
                    alt="CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-widest text-xs md:text-sm">
                    Akis Apostoliadis
                  </p>
                  <p className="font-mono text-[10px] md:text-xs opacity-50 uppercase">
                    Founder - Reviews Every Audit
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
                    Your email app should now be open with the audit request
                    addressed to us. Send it from {workEmail} and we&apos;ll be in
                    touch within 24 hours.
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
                          ? "border-ink bg-ink text-bone"
                          : formStep > i
                          ? "border-black/40 bg-black/5"
                          : "border-black/20"
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
                        <label className="block mb-2 opacity-50">Full Name</label>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className={`w-full bg-transparent border-b pb-2 focus:outline-none focus:border-cobalt transition-colors rounded-none ${
                            errors.fullName ? "border-negative" : "border-black/20"
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
                        <label className="block mb-2 opacity-50">Work Email</label>
                        <input
                          type="email"
                          value={workEmail}
                          onChange={(e) => setWorkEmail(e.target.value)}
                          className={`w-full bg-transparent border-b pb-2 focus:outline-none focus:border-cobalt transition-colors rounded-none ${
                            errors.workEmail ? "border-negative" : "border-black/20"
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
                        <label className="block mb-2 opacity-50">Company Name</label>
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className={`w-full bg-transparent border-b pb-2 focus:outline-none focus:border-cobalt transition-colors rounded-none ${
                            errors.companyName ? "border-negative" : "border-black/20"
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
                          className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-cobalt transition-colors rounded-none"
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
                                ? "border-ink bg-ink text-bone"
                                : "border-black/20 hover:border-ink"
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
                    className="mt-8 md:mt-10 bg-ink text-bone py-3 md:py-4 px-8 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-cobalt transition-colors"
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
                                ? "border-ink bg-ink text-bone"
                                : "border-black/20 hover:border-ink"
                            }`}
                          >
                            <span
                              className={`w-3 h-3 border shrink-0 flex items-center justify-center ${
                                selectedServices.includes(svc)
                                  ? "border-bone bg-bone"
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
                            className={`border px-3 md:px-4 py-2 transition-colors ${
                              selectedSpend === opt
                                ? "border-ink bg-ink text-bone"
                                : "border-black/20 hover:border-ink"
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
                      className="border border-black/20 py-3 md:py-4 px-6 md:px-8 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-black/5 transition-colors font-mono"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => goToStep(2)}
                      className="bg-ink text-bone py-3 md:py-4 px-8 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-cobalt transition-colors"
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
                        Describe Your Biggest Operational Bottleneck
                      </label>
                      <textarea
                        rows={4}
                        value={bottleneck}
                        onChange={(e) => setBottleneck(e.target.value)}
                        className={`w-full bg-transparent border-b pb-2 focus:outline-none focus:border-cobalt transition-colors rounded-none resize-none ${
                          errors.bottleneck ? "border-negative" : "border-black/20"
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
                      className="border border-black/20 py-3 md:py-4 px-6 md:px-8 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-black/5 transition-colors font-mono"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-ink text-bone py-3 md:py-4 px-8 md:px-12 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-cobalt transition-colors"
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
