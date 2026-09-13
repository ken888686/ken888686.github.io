export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: readonly string[];
  technologies: readonly string[];
  featured: boolean;
};

export const experiences: readonly Experience[] = [
  {
    id: "ai-engineer-2025",
    role: "AI Engineer",
    company: "Japan Automotive Manufacturer",
    period: "Feb 2025 - Mar 2026",
    highlights: [
      "Built Power Platform and Azure tools that automated document translation and meeting workflows.",
      "Modernized an internal email service with .NET 10 Azure Functions, Service Bus, and Storage, reducing frontend sending latency by more than 60%.",
    ],
    technologies: [
      "Power Platform",
      "Azure OpenAI",
      "Azure Functions",
      ".NET 8/10",
    ],
    featured: true,
  },
  {
    id: "full-stack-engineer-2024",
    role: "Full-stack Engineer",
    company: "Japan Manufacturing Project",
    period: "Aug 2024 - Dec 2024",
    highlights: [
      "Translated fluid-flow calculations and domain requirements into production data models and algorithms.",
      "Built real-time processing and visualization pipelines for operational decision-making.",
    ],
    technologies: [
      "C#",
      "System Design",
      "Data Modeling",
      "Real-time Processing",
    ],
    featured: true,
  },
  {
    id: "application-engineer-2023",
    role: "Application Engineer",
    company: "Japan E-Commerce Corp.",
    period: "May 2023 - Jun 2024",
    highlights: [
      "Built .NET 8 REST microservices and modernized legacy .NET Framework modules.",
      "Improved release confidence with MSTest automation and Python/Locust load testing.",
    ],
    technologies: [".NET 8", "Docker", "Kafka", "Kubernetes", "Locust"],
    featured: true,
  },
  {
    id: "qa-engineer-2022",
    role: "QA Engineer",
    company: "US Technology Corp.",
    period: "Aug 2022 - May 2023",
    highlights: [
      "Owned quality assurance for Chinese-language voice assistant experiences across multiple dialects.",
      "Built automated regression and integration test suites with Swift and Apple testing frameworks.",
    ],
    technologies: ["Swift", "Test Automation", "Regression Testing", "Agile"],
    featured: false,
  },
  {
    id: "backend-engineer-2020",
    role: "Backend Engineer · Technical Lead",
    company: "Taiwan Real-estate Corp.",
    period: "Feb 2020 - Jun 2022",
    highlights: [
      "Led a company-wide migration from .NET Framework to ASP.NET Core 3.1.",
      "Used Redis caching and batch processing to improve property search performance by 50%.",
    ],
    technologies: ["ASP.NET Core", "Redis", "SQL Server", "Google Maps API"],
    featured: true,
  },
  {
    id: "full-stack-engineer-2019",
    role: "Full-stack Engineer",
    company: "Taiwan E-Commerce Corp.",
    period: "Mar 2019 - Dec 2019",
    highlights: [
      "Developed ASP.NET Core and MySQL services for a high-traffic e-commerce platform.",
      "Delivered rewards conversion, batch processing, and payment integration capabilities.",
    ],
    technologies: ["ASP.NET Core", "MySQL", "WeChat Pay", "PHP"],
    featured: false,
  },
  {
    id: "embedded-engineer-2016",
    role: "Embedded Software Engineer",
    company: "Taiwan Manufacturing Corp.",
    period: "Aug 2016 - Mar 2019",
    highlights: [
      "Built C# Windows applications, C/C++ device integrations, and deployment tooling for embedded systems.",
      "Reduced Windows installation and startup time by 50% and added Node-RED/Grafana observability.",
    ],
    technologies: ["C#", "C/C++", "WiX Toolset", "Node-RED", "Grafana"],
    featured: false,
  },
];
