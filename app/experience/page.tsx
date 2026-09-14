import { MotionReveal } from "@/components/motion-reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences } from "@/content/experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Selected professional experience for Yung Chun Tu.",
};

const featuredExperiences = experiences.filter(
  (experience) => experience.featured,
);
const earlierExperiences = experiences.filter(
  (experience) => !experience.featured,
);

export default function Experience() {
  return (
    <div className="page-shell mx-auto max-w-4xl">
      <header className="page-header mb-10 max-w-3xl">
        <p className="page-kicker">Experience</p>
        <h1 className="text-3xl leading-tight font-bold tracking-[-0.03em] md:text-5xl">
          Selected roles and measurable contributions.
        </h1>
        <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
          The most relevant work from a career spanning AI, backend systems,
          modernization, quality engineering, e-commerce, and embedded software.
        </p>
      </header>

      <ol className="border-primary/25 relative space-y-7 border-l pl-6 md:pl-8">
        {featuredExperiences.map((experience, index) => (
          <li key={experience.id} className="relative">
            <span className="border-background bg-primary absolute top-7 -left-[1.95rem] h-3 w-3 rounded-full border-2 shadow-[0_0_0_4px_color-mix(in_oklch,var(--primary)_15%,transparent)] md:-left-[2.45rem]" />
            <MotionReveal delay={index * 0.08}>
              <Card className="border-primary/15 hover:-translate-y-0.5 hover:shadow-md">
                <CardHeader className="gap-2">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        {experience.role}
                      </CardTitle>
                      <p className="text-muted-foreground mt-1">
                        {experience.company}
                      </p>
                    </div>
                    <Badge variant="outline" className="w-fit shrink-0">
                      {experience.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <Badge key={technology} variant="secondary">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionReveal>
          </li>
        ))}
      </ol>

      <p className="bg-muted/50 mt-8 rounded-xl border p-4 text-sm leading-relaxed">
        Earlier experience includes{" "}
        {earlierExperiences.map((experience) => experience.role).join(", ")}.
      </p>
    </div>
  );
}
