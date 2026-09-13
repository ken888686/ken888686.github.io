import { Badge } from "@/components/ui/badge";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { socialLinks } from "@/content/social-links";
import { ArrowRight, FileText, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl py-8 md:py-16">
      <section className="grid items-center gap-12 md:grid-cols-[1fr_18rem] md:gap-16">
        <div>
          <Badge variant="outline" className="mb-6 gap-2 px-3 py-1.5">
            <MapPin size={14} aria-hidden="true" />
            {profile.location}
          </Badge>

          <p className="text-primary mb-3 font-mono text-sm font-semibold tracking-wider uppercase">
            {profile.title}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance md:text-6xl">
            {profile.headline}
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed md:text-xl">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/projects">
                View selected work <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={socialLinks.email.href}>Contact me</Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link
                href={socialLinks.resume.href}
                target="_blank"
                rel="noreferrer"
              >
                <FileText aria-hidden="true" /> View resume
              </Link>
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={socialLinks.github.href}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <GitHubIcon aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
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
        </div>

        <div className="bg-muted relative mx-auto aspect-square w-full max-w-72 overflow-hidden rounded-2xl border shadow-lg">
          <Image
            src={profile.image.src}
            alt={profile.image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 288px, 70vw"
            priority
          />
        </div>
      </section>

      <section
        className="mt-16 border-t pt-8 md:mt-24"
        aria-labelledby="highlights-heading"
      >
        <h2 id="highlights-heading" className="sr-only">
          Career highlights
        </h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {profile.highlights.map((highlight) => (
            <li
              key={highlight}
              className="bg-card text-card-foreground rounded-lg border p-5 leading-relaxed"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
