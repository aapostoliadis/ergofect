import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";

export default function ServiceDetail({ service }) {
  const router = useRouter();

  if (router.isFallback || !service) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{service.title} - Ergsum. | AI Automation Services</title>
        <meta
          name="description"
          content={service.desc}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-ink text-bone">
        <div className="container">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-cobalt-light">
              [ SERVICE DETAIL ]
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <FadeIn delay={100}>
                <p className="text-cobalt-light bg-ink inline-block px-2 py-1 font-mono text-xs font-bold">
                  {service.number}
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-10">
              <FadeIn delay={200}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-none mb-6">
                  {service.title}
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.04em] text-cobalt-light mb-6">
                  {service.headline}
                </h2>
                <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-3xl">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3 mt-6">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-bone/10 px-3 py-1 font-mono text-[10px] md:text-xs uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="bg-bone text-ink py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            {/* Features */}
            <div>
              <FadeIn>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.04em] mb-8">
                  What We Deliver
                </h3>
                <div className="space-y-4">
                  {service.features.map((feature, i) => (
                    <FadeIn key={i} delay={i * 50}>
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-cobalt rounded-full mt-2 shrink-0"></div>
                        <p className="text-sm md:text-base leading-relaxed">{feature}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Benefits */}
            <div>
              <FadeIn delay={200}>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.04em] mb-8">
                  Key Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <FadeIn key={i} delay={200 + i * 50}>
                      <div className="border border-ink/10 p-4 hover:bg-ink hover:text-bone transition-colors duration-300">
                        <p className="text-sm md:text-base font-medium">{benefit}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-ink text-bone py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] mb-12">
              Implementation Process
            </h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {service.process.map((phase, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="border border-bone/10 p-6 hover:border-cobalt-light/30 transition-colors">
                  <p className="text-cobalt-light font-mono text-xs uppercase mb-2">
                    {phase.duration}
                  </p>
                  <h4 className="text-lg md:text-xl font-semibold tracking-[-0.04em] mb-4">
                    {phase.phase}
                  </h4>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm opacity-80">
                        <span className="text-cobalt-light mt-1">▸</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-bone text-ink py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] mb-12">
              Success Story
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div className="lg:col-span-2">
              <FadeIn delay={100}>
                <div className="border border-ink/10 p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="font-mono text-xs uppercase opacity-50 mb-2">
                        {service.caseStudy.industry}
                      </p>
                      <h4 className="text-2xl md:text-3xl font-semibold tracking-[-0.04em] mb-2">
                        {service.caseStudy.company}
                      </h4>
                      <div className="flex gap-4 text-sm opacity-60">
                        <span>{service.caseStudy.employees} employees</span>
                        <span>•</span>
                        <span>{service.caseStudy.annualRevenue} revenue</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <p className="font-mono text-xs uppercase opacity-50 mb-2">The Challenge</p>
                      <p className="text-sm md:text-base leading-relaxed">
                        {service.caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase opacity-50 mb-2">Our Solution</p>
                      <p className="text-sm md:text-base leading-relaxed">
                        {service.caseStudy.solution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-ink/10 pt-6">
                    <p className="font-mono text-xs uppercase opacity-50 mb-3">Client Testimonial</p>
                    <blockquote className="text-sm md:text-base leading-relaxed italic">
                      "{service.caseStudy.testimonial}"
                    </blockquote>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div>
              <FadeIn delay={200}>
                <div className="bg-ink text-bone p-6 md:p-8 h-full">
                  <p className="font-mono text-xs uppercase text-cobalt-light mb-6">
                    Key Results
                  </p>
                  <div className="space-y-6">
                    {service.caseStudy.results.map((result, i) => (
                      <div key={i}>
                        <p className="text-2xl md:text-3xl font-semibold tracking-[-0.04em] text-cobalt-light">
                          {result.metric}
                        </p>
                        <p className="text-sm font-medium uppercase tracking-wider mb-1">
                          {result.label}
                        </p>
                        <p className="text-xs opacity-60">
                          {result.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-bone/20 mt-8 pt-6">
                    <p className="font-mono text-xs uppercase opacity-50 mb-2">
                      Time to ROI
                    </p>
                    <p className="text-sm font-medium">
                      {service.caseStudy.timeframe}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Additional Metrics */}
          <FadeIn delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border border-ink/10 p-4 text-center hover:bg-ink hover:text-bone transition-colors">
                <p className="text-2xl font-semibold mb-1">24/7</p>
                <p className="font-mono text-xs uppercase opacity-60">Availability</p>
              </div>
              <div className="border border-ink/10 p-4 text-center hover:bg-ink hover:text-bone transition-colors">
                <p className="text-2xl font-semibold mb-1">99.9%</p>
                <p className="font-mono text-xs uppercase opacity-60">Uptime</p>
              </div>
              <div className="border border-ink/10 p-4 text-center hover:bg-ink hover:text-bone transition-colors">
                <p className="text-2xl font-semibold mb-1">&lt;100ms</p>
                <p className="font-mono text-xs uppercase opacity-60">Response</p>
              </div>
              <div className="border border-ink/10 p-4 text-center hover:bg-ink hover:text-bone transition-colors">
                <p className="text-2xl font-semibold mb-1">ISO</p>
                <p className="font-mono text-xs uppercase opacity-60">Compliant</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ink text-bone py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] mb-6">
                Ready to Transform Your Operations?
              </h3>
              <p className="text-base md:text-lg opacity-80 mb-10">
                Let's discuss how {service.title} can revolutionize your business processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-audit"
                  className="bg-cobalt text-bone py-3 md:py-4 px-6 md:px-8 font-bold text-xs md:text-sm uppercase tracking-widest text-center hover:bg-bone hover:text-ink transition-colors"
                >
                  Book Free Audit
                </Link>
                <Link
                  href="/contact"
                  className="border border-bone/20 py-3 md:py-4 px-6 md:px-8 font-bold text-xs md:text-sm uppercase tracking-widest text-center hover:bg-bone hover:text-ink transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllServiceSlugs().map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      service,
    },
  };
}
