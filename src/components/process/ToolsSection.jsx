import FadeIn from "@/components/FadeIn";

const toolGroups = [
  {
    label: "Communication",
    items: ["Slack", "Microsoft Teams", "Email", "Intercom"],
  },
  {
    label: "CRM & Sales",
    items: ["Salesforce", "HubSpot", "Pipedrive", "Close"],
  },
  {
    label: "Support",
    items: ["Zendesk", "Freshdesk", "Help Scout", "Jira Service"],
  },
  {
    label: "Data & Storage",
    items: ["PostgreSQL", "BigQuery", "Snowflake", "MongoDB"],
  },
  {
    label: "Automation",
    items: ["Zapier", "Make", "n8n", "Custom APIs"],
  },
  {
    label: "Cloud",
    items: ["AWS", "Google Cloud", "Azure", "Vercel"],
  },
];

export default function ToolsSection() {
  return (
    <section className="bg-ink text-bone py-20 md:py-32 border-t border-bone/10">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-cobalt-light">
            [ INTEGRATIONS ]
          </p>
          <h2 className="text-4xl md:text-7xl font-semibold tracking-[0em] leading-none mb-6 max-w-4xl">
            We Plug Into Your{" "}
            <span className="text-cobalt-light">Existing</span> Stack.
          </h2>
          <p className="text-sm md:text-base opacity-60 max-w-xl mb-16 md:mb-20 leading-relaxed">
            No rip-and-replace. Our automations integrate seamlessly with the
            tools your team already uses every day.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {toolGroups.map((group, i) => (
            <FadeIn key={i} delay={i * 80} className="border border-bone/10 p-4 md:p-6">
              <p className="font-mono text-[10px] md:text-xs uppercase text-cobalt-light mb-4 font-bold">
                {group.label}
              </p>
              <ul className="space-y-2 font-mono text-[10px] md:text-xs uppercase opacity-50">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-bone/30 rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
