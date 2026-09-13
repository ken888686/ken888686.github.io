import { Badge } from "@/components/ui/badge";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/content/profile";
import { socialLinks } from "@/content/social-links";
import { FileText, Languages, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Background, strengths, and contact details for Yung Chun Tu.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-4xl space-y-10">
      <header className="max-w-3xl">
        <p className="text-primary mb-2 font-mono text-sm font-semibold tracking-wider uppercase">
          About
        </p>
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          Engineering with a focus on reliability and practical outcomes.
        </h1>
        <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
          {profile.about}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Core strengths</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {profile.skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="mb-2 text-sm font-medium">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Working context</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p className="flex items-center gap-3">
              <MapPin className="text-primary" size={18} aria-hidden="true" />
              Based in {profile.location}
            </p>
            <p className="flex items-center gap-3">
              <Languages
                className="text-primary"
                size={18}
                aria-hidden="true"
              />
              {profile.languages
                .map((language) => `${language.name} (${language.level})`)
                .join(", ")}
            </p>
          </CardContent>
        </Card>
      </div>

      <section className="bg-muted/40 rounded-xl border p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
        <div>
          <h2 className="text-2xl font-semibold">Let&apos;s connect</h2>
          <p className="text-muted-foreground mt-2">
            The fastest way to reach me is by email. You can also find my work
            and professional history below.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 md:mt-0 md:shrink-0">
          <Button asChild>
            <Link href={socialLinks.email.href}>
              <Mail aria-hidden="true" /> Email
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href={socialLinks.resume.href}
              target="_blank"
              rel="noreferrer"
            >
              <FileText aria-hidden="true" /> Resume
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href={socialLinks.github.href}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <GitHubIcon aria-hidden="true" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href={socialLinks.linkedin.href}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
