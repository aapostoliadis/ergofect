export const services = [
  {
    id: "customer-support",
    slug: "customer-support",
    number: "01",
    title: "Customer Support Automation",
    headline: "Handle inquiries 24/7 with human-like accuracy.",
    desc: "Deploy AI agents that understand context, resolve tickets, route complex cases, and learn from every interaction.",
    tags: ["Chatbots w/ Escalation", "Auto-Email Replies", "Ticket Routing", "Sentiment Analysis"],
    features: [
      "24/7 AI-powered support",
      "Multi-channel integration (email, chat, social)",
      "Intelligent ticket routing",
      "Sentiment-aware responses",
      "Seamless human handoff",
      "Knowledge base integration"
    ],
    benefits: [
      "Reduce response time by 80%",
      "Cut support costs by 60%",
      "Improve customer satisfaction",
      "Scale without hiring",
      "Consistent brand voice",
      "Multi-language support"
    ],
    process: [
      {
        phase: "Discovery",
        duration: "Week 1",
        tasks: ["Analyze current support flows", "Identify automation opportunities", "Map escalation paths"]
      },
      {
        phase: "Setup",
        duration: "Week 2-3",
        tasks: ["Configure AI models", "Integrate with existing tools", "Train on historical data"]
      },
      {
        phase: "Testing",
        duration: "Week 4",
        tasks: ["Run parallel with human agents", "Fine-tune responses", "Validate escalation logic"]
      },
      {
        phase: "Launch",
        duration: "Week 5-6",
        tasks: ["Gradual rollout", "Monitor performance", "Continuous optimization"]
      }
    ],
    caseStudy: {
      company: "TechCorp Inc.",
      industry: "SaaS",
      employees: "500-1000",
      annualRevenue: "$50M",
      challenge: "Overwhelmed support team with 2000+ daily tickets, 48-hour average response time, and 40% agent turnover rate",
      solution: "Implemented AI automation handling 70% of inquiries with intelligent routing and 24/7 availability",
      results: [
        { metric: "80%", label: "Faster Response Time", detail: "From 48hrs to 8hrs average" },
        { metric: "60%", label: "Cost Reduction", detail: "Saved $2.4M annually" },
        { metric: "95%", label: "Customer Satisfaction", detail: "Up from 72%" },
        { metric: "0%", label: "Agent Turnover", detail: "Team stability achieved" }
      ],
      testimonial: "The AI automation transformed our support operations. We're now handling 3x the volume with half the team while maintaining excellent customer satisfaction.",
      timeframe: "6 weeks implementation, 3 months to full ROI"
    }
  },
  {
    id: "data-processing",
    slug: "data-processing",
    number: "02",
    title: "Data Processing & Analytics",
    headline: "Transform raw data into insights automatically.",
    desc: "Automate data extraction, cleaning, transformation, and reporting - from spreadsheets to dashboards in minutes.",
    tags: ["Report Generation", "Data Cleansing", "Predictive Analytics", "ETL Pipelines"],
    features: [
      "Automated data pipelines",
      "Real-time data processing",
      "Predictive analytics",
      "Custom report generation",
      "Data quality assurance",
      "Multi-source integration"
    ],
    benefits: [
      "Eliminate manual data entry",
      "Reduce errors by 99%",
      "Instant insights generation",
      "Scalable data processing",
      "Compliance-ready reporting",
      "Cost-effective analytics"
    ],
    process: [
      {
        phase: "Audit",
        duration: "Week 1",
        tasks: ["Map data sources", "Identify bottlenecks", "Define KPIs"]
      },
      {
        phase: "Design",
        duration: "Week 2",
        tasks: ["Architecture design", "Pipeline mapping", "Quality rules definition"]
      },
      {
        phase: "Build",
        duration: "Week 3-4",
        tasks: ["ETL pipeline development", "Analytics setup", "Dashboard creation"]
      },
      {
        phase: "Deploy",
        duration: "Week 5-6",
        tasks: ["Production deployment", "Monitoring setup", "Team training"]
      }
    ],
    caseStudy: {
      company: "FinanceHub",
      industry: "FinTech",
      employees: "200-500",
      annualRevenue: "$120M",
      challenge: "Manual report generation taking 40 hours weekly with frequent human errors and compliance risks",
      solution: "Automated data pipeline with real-time dashboards and automated compliance checks",
      results: [
        { metric: "95%", label: "Time Saved", detail: "From 40hrs to 2hrs weekly" },
        { metric: "100%", label: "Accuracy", detail: "Zero data errors" },
        { metric: "24/7", label: "Reporting", detail: "Real-time insights" },
        { metric: "$3M", label: "Annual Savings", detail: "Reduced manual labor" }
      ],
      testimonial: "We went from drowning in spreadsheets to having instant insights at our fingertips. The automation paid for itself in 2 months.",
      timeframe: "4 weeks implementation, 2 months to full ROI"
    }
  },
  {
    id: "workflow-automation",
    slug: "workflow-automation",
    number: "03",
    title: "Workflow Automation",
    headline: "Connect your tools and eliminate manual handoffs.",
    desc: "Seamlessly integrate your CRM, ERP, and SaaS tools into unified automated workflows that run without human intervention.",
    tags: ["CRM Automation", "Lead Qualification", "Approval Workflows", "Multi-Tool Sync"],
    features: [
      "Cross-platform integration",
      "Custom workflow builder",
      "Trigger-based automation",
      "Approval routing",
      "Real-time notifications",
      "Audit trail tracking"
    ],
    benefits: [
      "Eliminate manual tasks",
      "Reduce processing time by 70%",
      "Improve data consistency",
      "Enhance compliance",
      "Increase productivity",
      "Better visibility"
    ],
    process: [
      {
        phase: "Map",
        duration: "Week 1",
        tasks: ["Document current workflows", "Identify integration points", "Define automation rules"]
      },
      {
        phase: "Integrate",
        duration: "Week 2-3",
        tasks: ["API connections", "Workflow configuration", "Testing scenarios"]
      },
      {
        phase: "Optimize",
        duration: "Week 4",
        tasks: ["Performance tuning", "Error handling", "User acceptance testing"]
      },
      {
        phase: "Rollout",
        duration: "Week 5-6",
        tasks: ["Phased deployment", "User training", "Continuous monitoring"]
      }
    ],
    caseStudy: {
      company: "GlobalSales Co.",
      industry: "Manufacturing",
      employees: "1000+",
      annualRevenue: "$500M",
      challenge: "Manual approval process causing 3-day delays, lost documents, and compliance violations",
      solution: "Automated workflow with intelligent routing, digital signatures, and audit trails",
      results: [
        { metric: "90%", label: "Faster Approvals", detail: "From 3 days to 4 hours" },
        { metric: "0", label: "Lost Documents", detail: "100% traceability" },
        { metric: "100%", label: "Compliance", detail: "Full audit trails" },
        { metric: "50%", label: "Cost Reduction", detail: "Processing efficiency" }
      ],
      testimonial: "Our approval process went from a bottleneck to a competitive advantage. We close deals faster than ever before.",
      timeframe: "5 weeks implementation, 6 weeks to full ROI"
    }
  },
  {
    id: "document-intelligence",
    slug: "document-intelligence",
    number: "04",
    title: "Document Intelligence",
    headline: "Extract, classify, and process documents at scale.",
    desc: "AI-powered document processing for invoices, contracts, forms, and compliance documents - with 99%+ accuracy.",
    tags: ["OCR Processing", "Contract Analysis", "Invoice Matching", "Compliance Checks"],
    features: [
      "Advanced OCR technology",
      "Document classification",
      "Data extraction",
      "Compliance checking",
      "Template matching",
      "Batch processing"
    ],
    benefits: [
      "99%+ accuracy rate",
      "Process 1000x faster",
      "Reduce manual review by 95%",
      "Ensure compliance",
      "Lower operational costs",
      "Improve data quality"
    ],
    process: [
      {
        phase: "Sample",
        duration: "Week 1",
        tasks: ["Document type analysis", "Template creation", "Extraction rules definition"]
      },
      {
        phase: "Train",
        duration: "Week 2-3",
        tasks: ["Model training", "Accuracy validation", "Exception handling setup"]
      },
      {
        phase: "Test",
        duration: "Week 4",
        tasks: ["Batch testing", "Edge case handling", "Performance optimization"]
      },
      {
        phase: "Deploy",
        duration: "Week 5-6",
        tasks: ["Production setup", "Monitoring deployment", "User training"]
      }
    ],
    caseStudy: {
      company: "LegalEase",
      industry: "Legal Services",
      employees: "100-200",
      annualRevenue: "$25M",
      challenge: "Manual contract review taking 5 hours per document with missed clauses and compliance risks",
      solution: "AI-powered document analysis with clause extraction, risk scoring, and compliance checking",
      results: [
        { metric: "98%", label: "Time Reduction", detail: "From 5hrs to 6 minutes" },
        { metric: "100%", label: "Compliance", detail: "All clauses checked" },
        { metric: "0", label: "Critical Errors", detail: "Zero missed risks" },
        { metric: "10x", label: "Throughput", detail: "Documents processed daily" }
      ],
      testimonial: "We can now review hundreds of contracts daily with confidence. The AI catches things humans miss.",
      timeframe: "6 weeks implementation, 3 months to full ROI"
    }
  },
  {
    id: "sales-marketing",
    slug: "sales-marketing",
    number: "05",
    title: "Sales & Marketing Automation",
    headline: "Accelerate pipeline without growing your team.",
    desc: "Automate lead scoring, email sequences, content personalization, and campaign optimization with intelligent AI agents.",
    tags: ["Lead Scoring", "Email Sequences", "A/B Testing", "Funnel Optimization"],
    features: [
      "Lead scoring algorithms",
      "Personalized campaigns",
      "Email automation",
      "Performance analytics",
      "CRM integration",
      "Behavior tracking"
    ],
    benefits: [
      "Increase conversion by 40%",
      "Reduce acquisition cost",
      "Improve lead quality",
      "Scale outreach efforts",
      "Better ROI tracking",
      "Enhanced customer journey"
    ],
    process: [
      {
        phase: "Strategy",
        duration: "Week 1",
        tasks: ["Funnel analysis", "Scoring criteria", "Campaign planning"]
      },
      {
        phase: "Setup",
        duration: "Week 2-3",
        tasks: ["CRM integration", "Automation rules", "Content templates"]
      },
      {
        phase: "Launch",
        duration: "Week 4",
        tasks: ["Campaign deployment", "A/B testing", "Performance monitoring"]
      },
      {
        phase: "Optimize",
        duration: "Week 5-6",
        tasks: ["Results analysis", "Strategy refinement", "Scale successful campaigns"]
      }
    ],
    caseStudy: {
      company: "ScaleUp SaaS",
      industry: "Software",
      employees: "50-100",
      annualRevenue: "$10M",
      challenge: "Low lead-to-customer conversion rate at 3% with inefficient lead qualification",
      solution: "AI-driven lead scoring with behavioral tracking and personalized nurturing sequences",
      results: [
        { metric: "45%", label: "Conversion Increase", detail: "From 3% to 4.35%" },
        { metric: "3x", label: "ROI", detail: "Marketing efficiency" },
        { metric: "50%", label: "Faster Sales Cycle", detail: "From 90 to 45 days" },
        { metric: "200%", label: "Pipeline Growth", detail: "Qualified leads" }
      ],
      testimonial: "Our sales team now focuses only on high-quality leads. The AI qualification changed our entire business trajectory.",
      timeframe: "3 weeks implementation, 1 month to full ROI"
    }
  },
  {
    id: "custom-ai",
    slug: "custom-ai",
    number: "06",
    title: "Custom AI Solutions",
    headline: "Bespoke systems for unique operational challenges.",
    desc: "When off-the-shelf won't cut it, we build custom AI models and integrations designed specifically for your business.",
    tags: ["Computer Vision", "NLP Models", "Custom APIs", "Edge Deployment"],
    features: [
      "Custom model development",
      "Tailored integrations",
      "Edge computing",
      "API development",
      "Performance optimization",
      "Ongoing support"
    ],
    benefits: [
      "Solve unique challenges",
      "Competitive advantage",
      "Full ownership",
      "Scalable architecture",
      "IP protection",
      "Continuous innovation"
    ],
    process: [
      {
        phase: "Discovery",
        duration: "Week 1-2",
        tasks: ["Requirements gathering", "Feasibility study", "Architecture design"]
      },
      {
        phase: "Prototype",
        duration: "Week 3-4",
        tasks: ["MVP development", "Initial testing", "Feedback collection"]
      },
      {
        phase: "Develop",
        duration: "Week 5-8",
        tasks: ["Full development", "Integration testing", "Performance tuning"]
      },
      {
        phase: "Deploy",
        duration: "Week 9-10",
        tasks: ["Production deployment", "Documentation", "Team training"]
      }
    ],
    caseStudy: {
      company: "InnovateTech",
      industry: "Manufacturing",
      employees: "500+",
      annualRevenue: "$200M",
      challenge: "Unique quality control requiring visual inspection with 85% accuracy and high labor costs",
      solution: "Custom computer vision system with edge processing for real-time defect detection",
      results: [
        { metric: "99.5%", label: "Defect Detection", detail: "Up from 85%" },
        { metric: "80%", label: "Cost Reduction", detail: "Labor savings" },
        { metric: "100ms", label: "Processing Time", detail: "Real-time detection" },
        { metric: "$5M", label: "Annual Savings", detail: "Reduced recalls" }
      ],
      testimonial: "The custom AI solution achieved what we thought impossible. We're now the quality leader in our industry.",
      timeframe: "10 weeks implementation, 4 months to full ROI"
    }
  }
];

export function getServiceBySlug(slug) {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs() {
  return services.map(service => service.slug);
}
