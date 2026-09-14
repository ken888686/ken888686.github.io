import { getExperienceLabel } from "@/content/career";

const experienceLabel = getExperienceLabel();

export const profile = {
  name: "YungChun Tu",
  shortName: "Aaron",
  title: "Automation Services Leader",
  location: "Tokyo, Japan",
  image: {
    src: "/me.JPG",
    alt: "Yung Chun Tu in Hiroshima",
  },
  headline: "I turn complex requirements into reliable, maintainable systems.",
  summary: `Backend-focused software engineer with ${experienceLabel} of experience across the .NET ecosystem, TypeScript, cloud automation, system modernization, and applied AI.`,
  about:
    "I specialize in scalable API design, legacy modernization, data-intensive systems, test automation, and cloud operations. I enjoy translating ambiguous product needs into pragmatic systems that teams can operate and improve with confidence.",
  highlights: [
    `${experienceLabel} in backend and full-stack engineering`,
    ".NET services, cloud automation, and applied AI",
    "Working across Mandarin, Japanese, and English",
  ],
  languages: [
    { name: "Mandarin", level: "Native" },
    { name: "Japanese", level: "Business" },
    { name: "English", level: "Business" },
  ],
  skillGroups: [
    {
      label: "Languages & frameworks",
      items: [
        "C#",
        ".NET 8/10",
        "ASP.NET Core",
        "TypeScript",
        "Next.js",
        "Python",
      ],
    },
    {
      label: "Architecture",
      items: [
        "Microservices",
        "REST APIs",
        "Event-driven design",
        "Clean architecture",
      ],
    },
    {
      label: "Cloud & operations",
      items: [
        "Azure",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Prometheus",
        "Grafana",
      ],
    },
  ],
} as const;
