import { pilotPhases } from "@/data/pilot";

const pilotTasks = {
  map: ["Map one workflow", "Record the baseline", "Agree the pilot boundary"],
  design: ["Define integrations", "Design human review", "Set acceptance criteria"],
  build: ["Build the workflow", "Shadow-test real examples", "Reconcile exceptions"],
  launch: ["Release the scoped workflow", "Monitor production", "Review observed results"],
};

const pilotProcess = pilotPhases.map(({ id, title, week }) => ({
  phase: title,
  duration: week,
  tasks: pilotTasks[id],
}));

export const services = [
  {
    id: "customer-support",
    slug: "customer-support",
    number: "01",
    title: "Customer Support Automation",
    headline: "Resolve routine requests and route the exceptions.",
    desc: "Connect the helpdesk, knowledge base, and customer systems so incoming requests are classified, grounded answers are drafted, and uncertain or sensitive cases reach the right person.",
    tags: ["Request Classification", "Grounded Drafts", "Ticket Routing", "Human Escalation"],
    features: [
      "Intent and priority classification",
      "Knowledge-grounded response drafts",
      "Routing rules and ownership queues",
      "Human approval for sensitive cases",
      "Conversation and decision logs",
      "Monitoring and safe fallbacks",
    ],
    benefits: [
      "Reduce repetitive triage",
      "Protect specialist time",
      "Keep escalation rules visible",
      "Standardize routine responses",
      "Measure handling time and exceptions",
      "Retain human control",
    ],
    process: pilotProcess,
  },
  {
    id: "data-processing",
    slug: "data-processing",
    number: "02",
    title: "Data Processing & Analytics",
    headline: "Turn recurring data work into a controlled pipeline.",
    desc: "Bring together the spreadsheets, exports, APIs, and business rules behind a recurring report or operational decision, then route exceptions to an accountable owner.",
    tags: ["Data Pipelines", "Reconciliation", "Reporting", "Exception Queues"],
    features: [
      "Source and field mapping",
      "Validation and reconciliation rules",
      "Scheduled data preparation",
      "Operational dashboards",
      "Exception alerts and ownership",
      "Source-to-output audit trail",
    ],
    benefits: [
      "Reduce repeated spreadsheet work",
      "Make data conflicts visible",
      "Shorten recurring reporting cycles",
      "Preserve source-system ownership",
      "Create a repeatable review process",
      "Measure data quality over time",
    ],
    process: pilotProcess,
  },
  {
    id: "workflow-automation",
    slug: "workflow-automation",
    number: "03",
    title: "Workflow Automation",
    headline: "Connect your tools without replacing them by default.",
    desc: "Automate a defined handoff across your CRM, ERP, helpdesk, inbox, and spreadsheets while keeping approvals, exceptions, and ownership explicit.",
    tags: ["System Integration", "Approvals", "Handoffs", "Operational Controls"],
    features: [
      "Current-state workflow mapping",
      "API and event-based integrations",
      "Approval and routing rules",
      "Human-review interfaces",
      "Retry and failure handling",
      "Operational monitoring",
    ],
    benefits: [
      "Remove duplicate entry",
      "Reduce manual handoffs",
      "Keep existing platforms in place",
      "Make ownership explicit",
      "Create traceable decisions",
      "Scale one measured workflow at a time",
    ],
    process: pilotProcess,
  },
  {
    id: "document-intelligence",
    slug: "document-intelligence",
    number: "04",
    title: "Document Intelligence",
    headline: "Turn incoming documents into validated work items.",
    desc: "Extract and validate data from invoices, contracts, forms, submissions, and compliance documents, then send low-confidence or policy-sensitive cases to a reviewer.",
    tags: ["Document Intake", "Extraction", "Validation", "Human Review"],
    features: [
      "Document classification",
      "Field and table extraction",
      "Confidence thresholds",
      "Business-rule validation",
      "Reviewer correction queue",
      "Source-document traceability",
    ],
    benefits: [
      "Reduce manual re-keying",
      "Surface missing information earlier",
      "Route uncertain cases to people",
      "Standardize document handling",
      "Retain the original source",
      "Measure exceptions and corrections",
    ],
    process: pilotProcess,
  },
  {
    id: "sales-marketing",
    slug: "sales-marketing",
    number: "05",
    title: "Sales & Marketing Automation",
    headline: "Move qualified work to the right commercial owner.",
    desc: "Connect lead sources, CRM records, enrichment, routing, and follow-up preparation so teams spend less time cleaning records and more time reviewing relevant opportunities.",
    tags: ["Lead Routing", "CRM Hygiene", "Research Briefs", "Approval Workflows"],
    features: [
      "Lead-source normalization",
      "Rule-based qualification support",
      "Account and contact research briefs",
      "CRM deduplication and enrichment",
      "Human-approved message preparation",
      "Pipeline and handoff reporting",
    ],
    benefits: [
      "Reduce CRM administration",
      "Make routing rules consistent",
      "Give sellers better context",
      "Keep outbound approval with people",
      "Track reasons for qualification",
      "Measure handoff and response quality",
    ],
    process: pilotProcess,
  },
  {
    id: "custom-ai",
    slug: "custom-ai",
    number: "06",
    title: "Custom AI Solutions",
    headline: "Build the decision support your workflow actually needs.",
    desc: "For workflows that do not fit an off-the-shelf pattern, we combine AI engineering with product and UX design to create a bounded system people can review, understand, and operate.",
    tags: ["Applied AI", "Custom Integrations", "Human Review UX", "Operational Dashboards"],
    features: [
      "Feasibility and risk assessment",
      "Custom model or provider orchestration",
      "Purpose-built integrations",
      "Human-review interface design",
      "Operational dashboard design",
      "Monitoring and handover",
    ],
    benefits: [
      "Address a specific operational constraint",
      "Fit established team workflows",
      "Make AI output reviewable",
      "Keep controls understandable",
      "Avoid unnecessary platform replacement",
      "Create a measured path to expansion",
    ],
    process: pilotProcess,
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs() {
  return services.map((service) => service.slug);
}
