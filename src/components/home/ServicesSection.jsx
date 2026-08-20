import FadeIn from "@/components/FadeIn";

const services = [
  {
    title: "Workflow Automation",
    headline: "Connect your tools and eliminate manual handoffs.",
    tags: ["CRM Automation", "Lead Qualification", "Approval Workflows"],
    delay: 100,
  },
  {
    title: "Customer Support",
    headline: "Handle inquiries 24/7 with human-like accuracy.",
    tags: ["Chatbots w/ Escalation", "Auto-Email Replies", "Ticket Routing"],
    delay: 200,
  },
  {
    title: "Data Processing",
    headline: "Transform raw data into insights automatically.",
    tags: ["Report Generation", "Data Cleansing", "Predictive Analytics"],
    delay: 300,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-ink text-bone py-20 md:py-32" id="services">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-12 md:mb-16 text-cobalt-light">
            [ OUR EXPERTISE ]
          </p>
        </FadeIn>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <FadeIn
              key={i}
              delay={service.delay}
              className="border-t border-bone/10 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 group hover:bg-bone/5 transition-colors cursor-pointer md:px-4 md:-mx-4"
            >
              <div className="lg:col-span-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-cobalt-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"></div>
                <h3 className="text-lg md:text-xl font-mono uppercase tracking-widest">
                  {service.title}
                </h3>
              </div>
              <div className="lg:col-span-8">
                <h4 className="text-3xl md:text-5xl font-semibold tracking-[0em] mb-4 group-hover:text-cobalt-light transition-colors">
                  {service.headline}
                </h4>
                <p className="font-mono text-[10px] md:text-sm uppercase opacity-50 flex gap-2 md:gap-4 flex-wrap">
                  {service.tags.map((tag, j) => (
                    <span key={j}>
                      {j > 0 && <span className="hidden md:inline mr-2 md:mr-4">•</span>}
                      <span className="bg-bone/5 px-2 py-1 md:bg-transparent md:px-0 md:py-0">
                        {tag}
                      </span>
                    </span>
                  ))}
                </p>
              </div>
            </FadeIn>
          ))}
          <div className="border-t border-bone/10"></div>
        </div>
      </div>
    </section>
  );
}
