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
    company: "Hitachi Astemo (TEKsystems) · Tokyo, Japan",
    period: "Feb 2025 - Mar 2026",
    highlights: [
      "Built Power Platform and Azure tools that automated document translation and meeting workflows.",
      "Developed .NET 8 Azure Function Apps that exposed reliable Translator API endpoints for Power Automate integrations.",
      "Migrated legacy services into a new Azure tenant and modernized the internal SMTP MTA with .NET 10 Azure Functions, Service Bus, and Storage, reducing frontend sending latency by more than 60%.",
    ],
    technologies: [
      "Power Platform",
      "Azure OpenAI",
      "Azure AI Foundry",
      "Azure Functions",
      ".NET 8/10",
    ],
    featured: true,
  },
  {
    id: "full-stack-engineer-2024",
    role: "Full-stack Engineer",
    company: "BRIGHT STAR CO., LTD. · Tokyo, Japan",
    period: "Aug 2024 - Dec 2024",
    highlights: [
      "Translated fluid-flow calculations and domain requirements into production data models and algorithms.",
      "Designed high-performance table schemas and indexing strategies for intensive numeric calculations and queries.",
      "Built real-time processing and visualization pipelines for immediate operational decision-making.",
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
    company: "Rakuten (Michael Page) · Tokyo, Japan",
    period: "May 2023 - Jun 2024",
    highlights: [
      "Built .NET 8 REST microservices and modernized legacy .NET Framework modules.",
      "Led critical bug resolution and performance optimization while partnering with product managers from requirements through deployment.",
      "Improved release confidence with MSTest unit and integration automation plus Python/Locust stress testing.",
    ],
    technologies: [".NET 8", "Docker", "Kafka", "Kubernetes", "Locust"],
    featured: true,
  },
  {
    id: "qa-engineer-2022",
    role: "QA Engineer",
    company: "Apple (TEKsystems) · Kanagawa, Japan",
    period: "Aug 2022 - May 2023",
    highlights: [
      "Owned QA for Siri Chinese-language support across Simplified Chinese, Traditional Chinese, and Taiwanese.",
      "Built automated regression and integration test suites with Swift 5 and Apple testing frameworks.",
      "Analyzed test results, reported actionable defects, and proposed improvements to recognition and response quality.",
    ],
    technologies: ["Swift", "Test Automation", "Regression Testing", "Agile"],
    featured: false,
  },
  {
    id: "backend-engineer-2020",
    role: "Backend Engineer · Technical Lead",
    company: "Yungching Realty Co., Ltd. · Taipei, Taiwan",
    period: "Feb 2020 - Jun 2022",
    highlights: [
      "Led a company-wide migration from .NET Framework to ASP.NET Core 3.1.",
      "Architected a real-estate Web API platform with 3D virtual tours, district search, and location-based services.",
      "Used Redis caching and batch processing to improve property search performance by 50%.",
      "Integrated Google Maps APIs and maintained integration and unit tests with MSTest during the migration.",
    ],
    technologies: ["ASP.NET Core", "Redis", "SQL Server", "Google Maps API"],
    featured: true,
  },
  {
    id: "full-stack-engineer-2019",
    role: "Full-stack Engineer",
    company: "Screea Corp. · Taipei, Taiwan",
    period: "Mar 2019 - Dec 2019",
    highlights: [
      "Developed ASP.NET Core and MySQL services for a high-traffic e-commerce platform.",
      "Delivered rewards-point conversion with WeChat Pay, transaction batch processing, and bulk email dispatch.",
      "Partnered with UI/UX designers on a responsive frontend and contributed to initiatives that increased registered users by approximately 10%.",
    ],
    technologies: ["ASP.NET Core", "MySQL", "WeChat Pay", "PHP"],
    featured: false,
  },
  {
    id: "embedded-engineer-2016",
    role: "Embedded Software Engineer",
    company: "Advantech Co., Ltd. · Taipei, Taiwan",
    period: "Aug 2016 - Mar 2019",
    highlights: [
      "Built C# Windows applications, C/C++ device integrations, and deployment tooling for embedded systems.",
      "Developed C/C++ device drivers and WiX Toolset installers for Windows 7/10 images.",
      "Reduced Windows installation and startup time by 50% and added Node-RED/Grafana observability for real-time machine monitoring.",
    ],
    technologies: ["C#", "C/C++", "WiX Toolset", "Node-RED", "Grafana"],
    featured: false,
  },
];
