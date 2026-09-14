import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerList,
  MotionStaggerListItem,
} from "@/components/motion-reveal";
import { profile } from "@/content/profile";
import { socialLinks } from "@/content/social-links";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  MapPin,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid-wash mx-auto max-w-5xl py-4 md:py-8 lg:py-10">
      <section className="grid items-center gap-8 md:grid-cols-[1fr_16rem] md:gap-12 lg:grid-cols-[1fr_17rem] lg:gap-16">
        <MotionReveal>
          <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 md:mb-4">
            <Badge variant="outline" className="gap-2 rounded-full px-3 py-1.5">
              <MapPin size={14} aria-hidden="true" />
              {profile.location}
            </Badge>
            <span className="text-muted-foreground flex w-full min-w-0 items-center gap-2 text-sm leading-5 sm:w-auto">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_0_4px_color-mix(in_oklch,#10b981_18%,transparent)]" />
              <span className="min-w-0">Open to thoughtful collaborations</span>
            </span>
          </div>

          <p className="text-primary mb-3 flex items-center gap-2 font-mono text-sm font-semibold tracking-wider uppercase">
            <Sparkles size={15} aria-hidden="true" />
            {profile.title}
          </p>
          <h1 className="max-w-3xl text-4xl leading-[1.08] font-bold tracking-[-0.04em] text-balance md:text-5xl lg:text-6xl">
            {profile.headline}
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed md:text-lg">
            {profile.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/projects/">
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

          <div className="mt-4 flex items-center gap-2">
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
        </MotionReveal>

        <MotionReveal delay={0.08} className="relative mx-auto w-full max-w-60">
          <div
            className="bg-primary/10 absolute -inset-3 -rotate-3 rounded-4xl"
            aria-hidden="true"
          />
          <div className="bg-muted border-background relative aspect-square overflow-hidden rounded-3xl border-2 shadow-2xl shadow-slate-900/15">
            <Image
              src={profile.image.src}
              alt={profile.image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 240px, 70vw"
              priority
            />
          </div>
          <div className="bg-card absolute -right-4 -bottom-4 rounded-xl border px-3 py-2 shadow-lg">
            <p className="text-muted-foreground text-[11px] font-semibold tracking-widest uppercase">
              Currently building
            </p>
            <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
              <CheckCircle2 className="text-emerald-500" size={15} /> Reliable
              systems
            </p>
          </div>
        </MotionReveal>
      </section>

      <MotionReveal delay={0.16}>
        <section
          className="border-t pt-6 md:mt-14"
          aria-labelledby="highlights-heading"
        >
          <h2 id="highlights-heading" className="sr-only">
            Career highlights
          </h2>
          <MotionStaggerList className="grid gap-4 md:grid-cols-3">
            {profile.highlights.map((highlight, index) => (
              <MotionStaggerListItem
                key={highlight}
                className="bg-card text-foreground rounded-xl border p-4 text-base leading-relaxed font-medium shadow-sm hover:shadow-md"
              >
                <span className="text-primary mb-2 block font-mono text-xs font-bold tracking-widest">
                  0{index + 1}
                </span>
                {highlight}
              </MotionStaggerListItem>
            ))}
          </MotionStaggerList>
        </section>
      </MotionReveal>
    </div>
  );
}
