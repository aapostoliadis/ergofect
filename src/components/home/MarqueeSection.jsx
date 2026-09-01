export default function MarqueeSection() {
  const text =
    "AUTOMATE THE REPEATABLE STEPS. KEEP PEOPLE IN CONTROL OF THE EXCEPTIONS. BUILD FROM A MEASURED BASELINE.";

  return (
    <section className="bg-ink py-8 md:py-12 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <h2 className="text-4xl md:text-8xl font-semibold tracking-[0em] text-cobalt-light opacity-80 mx-4">
          {text}
        </h2>
        <h2 className="text-4xl md:text-8xl font-semibold tracking-[0em] text-cobalt-light opacity-80 mx-4">
          {text}
        </h2>
      </div>
    </section>
  );
}
