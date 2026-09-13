import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/content/projects";
import {
  ArrowUpRight,
  Baby,
  PanelsTopLeft,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected technical projects by Yung Chun Tu.",
};

const projectIcons: Record<string, LucideIcon> = {
  "baby-beacon": Baby,
  portfolio: PanelsTopLeft,
};

export default function Projects() {
  return (
    <div className="page-shell mx-auto max-w-5xl">
      <header className="page-header mb-10 max-w-3xl">
        <p className="page-kicker">Technical projects</p>
        <h1 className="text-3xl leading-tight font-bold tracking-[-0.03em] md:text-5xl">
          Products built from interface to infrastructure.
        </h1>
        <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
          Personal projects where I can share the architecture, implementation,
          and source code publicly.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const ProjectIcon = projectIcons[project.id] ?? PanelsTopLeft;

          return (
            <Card
              key={project.id}
              className="group border-primary/15 flex h-full flex-col hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader>
                <ProjectIcon
                  className="text-primary mb-3 transition-transform duration-300 group-hover:scale-110"
                  size={28}
                  aria-hidden="true"
                />
                <CardTitle className="text-xl leading-snug">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {project.subtitle}
                </p>
              </CardHeader>
              <CardContent className="flex grow flex-col gap-5">
                <p className="text-muted-foreground leading-relaxed">
                  {project.summary}
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Badge key={technology} variant="secondary">
                      {technology}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary mt-auto inline-flex w-fit items-center gap-1 font-medium underline underline-offset-4"
                >
                  View repository <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <p className="text-muted-foreground mt-10 text-sm">
        Professional outcomes are summarized separately in the{" "}
        <Link
          href="/experience/"
          className="text-foreground font-medium underline underline-offset-4"
        >
          experience timeline
        </Link>
        .
      </p>
    </div>
  );
}
