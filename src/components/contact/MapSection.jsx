import FadeIn from "@/components/FadeIn";

export default function MapSection() {
  return (
    <section className="bg-ink text-bone py-20 md:py-32">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.14em] mb-4 md:mb-6 text-cobalt-light">
            [ HEADQUARTERS ]
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-none mb-12 md:mb-16">
            Find Us.
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="relative w-full aspect-[16/7] md:aspect-[16/5] border border-white/10 overflow-hidden group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1838920380787!2d-73.98784492403924!3d40.74844097138858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full border-0 grayscale invert opacity-60 group-hover:opacity-80 transition-opacity"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ergsum HQ Location"
            ></iframe>
            <div className="absolute inset-0 bg-cobalt mix-blend-overlay opacity-5 pointer-events-none"></div>
          </div>
        </FadeIn>

        <FadeIn delay={300} className="mt-8 md:mt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="font-bold uppercase tracking-widest text-sm mb-1">
                350 Fifth Avenue, Suite 4800
              </p>
              <p className="font-mono text-[10px] md:text-xs uppercase opacity-50">
                New York, NY 10118 - United States
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest border-b border-white/30 pb-1 hover:border-cobalt-light hover:text-cobalt-light transition-colors"
            >
              Get Directions
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10" /><path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
