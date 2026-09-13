export type Project = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  highlights: readonly string[];
  technologies: readonly string[];
  repositoryUrl: string;
};

export const projects: readonly Project[] = [
  {
    id: "baby-beacon",
    title: "Baby Beacon",
    subtitle: "Full-stack infant care platform",
    summary:
      "A Progressive Web App for tracking infant sleep, feeding, health metrics, and other daily care activities.",
    highlights: [
      "Built a responsive, accessible interface with Next.js 16, Tailwind CSS, and shadcn/ui.",
      "Used Server Actions, Prisma, TypeScript, and Zod for validated, type-safe data flows.",
      "Implemented secure sessions and role-based infant profile access with Better Auth.",
    ],
    technologies: ["Next.js 16", "TypeScript", "Prisma", "Zod", "Better Auth"],
    repositoryUrl: "https://github.com/ken888686/baby-beacon",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio & Technical Blog",
    subtitle: "Portfolio and technical publishing platform",
    summary:
      "This evolving portfolio presents engineering experience and technical writing through a responsive Next.js application.",
    highlights: [
      "Structured technical content for static generation and fast navigation.",
      "Built reusable interface components with Tailwind CSS and shadcn/ui.",
      "Automated build and delivery workflows with GitHub Actions.",
    ],
    technologies: [
      "Next.js 16",
      "TypeScript",
      "MDX",
      "Static site generation",
      "GitHub Actions",
    ],
    repositoryUrl: "https://github.com/ken888686/ken888686.github.io",
  },
];
