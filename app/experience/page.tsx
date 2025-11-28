import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, Cpu } from "lucide-react";

const experiences: {
  id: number;
  role: string;
  company: string;
  period: string;
  descriptions: string[];
  tech: string[];
  startDate: Date;
}[] = [
  {
    id: 1,
    role: "Embedded Software Engineer",
    company: "Taiwan Manufacture Corp.",
    period: "Aug 2016 - Mar 2019",
    descriptions: [
      "Architected and implemented C# WinForm applications for embedded computers, encompassing the full software development lifecycle from design to testing.",
      "Engineered robust C/C++ drivers, enhancing hardware-software integration for embedded systems.",
      "Developed and maintained sophisticated WiX Toolset installers for Windows 7/10 images, streamlining software deployment processes.",
      "Redesigned and enhanced C# WinForm applications to seamlessly integrate custom features into Windows 10 environments.",
      "Optimized Windows images, achieving a remarkable 50% reduction in system installation and startup time.",
      "Designed and implemented Node-RED flows to visualize critical hardware information on Grafana dashboards, enabling real-time monitoring of machine status on embedded computers.",
      "Provided expert-level helpdesk support, resolving complex customer inquiries and maintaining high satisfaction rates.",
    ],
    tech: [
      "C++",
      "C#",
      "Powershell",
      "Node-RED",
      "Shell Scripting",
      "Windows",
      "Node.js",
      "Visual Studio",
      "C",
      "WiX Toolset",
    ],
    startDate: new Date(2016, 7),
  },

  {
    id: 2,
    role: "Full-Stack Engineer",
    company: "Taiwan E-Commerce Corp.",
    period: "Mar 2019 - Dec 2019",
    descriptions: [
      "Architected and maintained high-performance ASP.NET Core Web API 2.1 and MySQL databases for a major e-commerce platform, ensuring seamless operation under heavy traffic loads.",
      "Engineered a sophisticated backend system for rewards point conversion, integrating WeChat Pay to enhance payment options and user engagement.",
      "Collaborated with UI/UX designers to create an intuitive and responsive e-commerce front-end website, optimizing user experience and conversion rates.",
      "Implemented efficient batch processing for transaction histories and automated bulk email dispatch to client finance departments, streamlining operations and improving communication.",
      "Contributed to strategic initiatives resulting in a 10% increase in registered users, demonstrating the ability to align technical solutions with business objectives.",
      "Developed robust web applications using PHP CodeIgniter 4, showcasing versatility across multiple programming languages and frameworks.",
    ],
    tech: [
      "C#",
      ".NET Core",
      "MySQL",
      "SQL",
      "Cascading Style Sheets (CSS)",
      "HTML5",
      "Visual Studio",
      "PHP",
      "CodeIgniter",
    ],
    startDate: new Date(2019, 2),
  },
  {
    id: 3,
    role: "Full-Stack Engineer",
    company: "Taiwan Real-estate Corp.",
    period: "Feb 2020 - Jun 2022",
    descriptions: [
      "Led the company-wide migration from .NET Framework to ASP.NET Core 3.1, modernizing critical systems and enhancing overall performance.",
      "Led the project team as technical lead, overseeing all aspects of planning, scheduling, and quality control throughout the migration process.",
      "Architected and developed a cutting-edge real estate system using ASP.NET Core Web API 3.1, incorporating advanced features such as 3D virtual tours, district search, and location-based functionalities.",
      "Implemented efficient batch processing utilizing Redis cache, resulting in a 50% improvement in real estate search performance.",
      "Integrated Google Maps API to enable geocoding, static maps, and Street View features, enhancing the user experience for property listings.",
      "Optimized legacy code and managed a large-scale MSSQL database containing extensive housing data during the migration process.",
      "Developed comprehensive integration and unit tests using MSTest, ensuring robust API functionality and reliability throughout the system.",
    ],
    tech: [
      "C#",
      ".NET Core",
      "ASP.NET Core",
      "JavaScript",
      "Cascading Style Sheets (CSS)",
      "TypeScript",
      "SQL",
      "HTML5",
      "lua",
      "Visual Studio",
      "Microsoft SQL Server",
      ".NET Framework",
      "Python (Programming Language)",
      "Server Side",
      "Azure DevOps Services",
    ],
    startDate: new Date(2020, 1),
  },
  {
    id: 4,
    role: "Quality Engineer",
    company: "US E-Commerce Corp.",
    period: "Sep 2022 - Apr 2023",
    descriptions: [
      "Owned QA for Siri’s Chinese language support (Simplified, Traditional, and Taiwanese), ensuring correctness across dialects and environments.",
      "Engineered and maintained comprehensive automated test suites for Siri features using Swift 5, focusing on regression and integration testing to ensure robust functionality.",
      "Analyzed test results, reported defects with actionable context, and suggested product improvements to raise recognition and response quality.",
      "Employed Apple’s testing frameworks to create expressive, maintainable test cases and improve test execution efficiency.",
    ],
    tech: [
      "iOS",
      "Swift (Programming Language)",
      "Python (Programming Language)",
      "QA Automation",
    ],
    startDate: new Date(2022, 3),
  },
  {
    id: 5,
    role: "Application Engineer",
    company: "Japan E-Commerce Corp.",
    period: "May 2023 - Jun 2024",
    descriptions: [
      "Architected and implemented high-performance RESTful microservices on .NET 8, improving system scalability and service reliability.",
      "Modernized legacy .NET Framework systems through targeted refactors and modularization, increasing maintainability and performance.",
      "Led critical bug resolution and conducted comprehensive performance optimization, improving system reliability and user experience.",
      "Partnered closely with product managers throughout the software development lifecycle, from requirements gathering to feature deployment, ensuring alignment with business objectives.",
      "Developed automated unit and integration tests with MSTest; created Python + Locust stress tests to validate API stability under heavy load.",
    ],
    tech: [
      "JavaScript",
      "Docker",
      "MySQL",
      "C#",
      "Scrum",
      "Apache Kafka",
      "ASP.NET",
      "SQL",
      "ASP.NET Web API",
      "GraphQL",
      "Kanban",
      "Microsoft SQL Server",
      ".NET Framework",
      "Back-End Web Development",
      "Jira",
      "Vue.js",
      "Cascading Style Sheets (CSS)",
      "ElasticSearch",
      "Entity Framework (EF) Core",
      "Git",
      "HTML5",
      "HTML",
      "TypeScript",
      "Visual Studio",
    ],
    startDate: new Date(2023, 4),
  },

  {
    id: 6,
    role: "Full-Stack Engineer",
    company: "Japan Manufacture Corp.",
    period: "Aug 2024 - Dec 2024",
    descriptions: [
      "Analyzed complex valve systems and translated fluid-flow calculation formulas into production-ready data models.",
      "Designed scalable, high-performance table schemas and indexing strategies to support intensive numeric calculations and queries.",
      "Implemented robust flow-calculation algorithms optimized for accuracy and throughput.",
      "Built real-time data processing and visualization pipelines to deliver immediate computation results for operational decision-making.",
    ],
    tech: [
      "ASP.NET Razor",
      "C#",
      "ASP.NET",
      "ASP.NET Web API",
      "Microsoft SQL Server",
      "MySQL",
      "SQL",
      "JavaScript",
      "Azure DevOps Services",
      "DevExpress",
    ],
    startDate: new Date(2024, 7),
  },
  {
    id: 7,
    role: "AI Engineer",
    company: "Japan Manufacture Corp.",
    period: "Feb 2025 - Present",
    descriptions: [
      "Developed and deployed advanced machine learning models and AI solutions to drive innovation and optimize operational efficiency.",
      "Engineered robust AI systems by rigorously testing, deploying, and maintaining solutions to ensure high performance and scalability.",
      "Collaborated with cross-functional engineering teams to seamlessly integrate AI technologies into complex, enterprise-level system architectures.",
      "Monitored emerging AI trends and best practices, proactively suggesting improvements to enhance existing systems and streamline workflows.",
    ],
    tech: [
      "Microsoft Power Platform",
      "ASP.NET",
      "Azure",
      "Azure Functions",
      "Microsoft Power Apps",
      "Microsoft Power Automate",
      "Azure AI Foundry",
      "Microsoft Copilot Studio",
    ],
    startDate: new Date(2025, 1),
  },
];

export default function Experience() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-3xl duration-500">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-3xl font-bold">
          <Briefcase /> Experience
        </h2>
      </div>

      <div className="before:bg-secondary-foreground relative space-y-5 before:absolute before:inset-0 before:ml-6 before:h-full before:w-px">
        {experiences
          .sort((x) => -x.startDate)
          .map((exp) => (
            <div key={exp.id} className="relative pl-13">
              <div className="border-secondary-foreground bg-secondary-foreground absolute top-6 left-3.5 z-10 -ml-1.5 flex h-8 w-8 items-center justify-center rounded-full border-4">
                <Cpu size={14} className="text-secondary" />
              </div>

              <Card className="hover:text-secondary-foreground transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  <CardDescription className="text-secondary-foreground flex items-center gap-2 text-base font-medium">
                    {exp.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-7 list-disc space-y-1 pl-6">
                    {exp.descriptions.map((d, i) => (
                      <li
                        key={i}
                        className="text-secondary-foreground leading-relaxed"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="dark:border-secondary-foreground"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}
