import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const personalInfo = {
  name: "Yung Chun Tu",
  title: "AI Engineer @ Japan",
  tagline: `A backend-focused full-stack engineer with ${new Date().getFullYear() - 2016}+ years of experience, specializing in .NET microservices, REST APIs, system modernization, and cloud DevOps—building observable, high-performance production systems and collaborating effectively across teams in Mandarin, Japanese, and English.`,
  location: "Shinjuku, Tokyo",
};

export default function Home() {
  return (
    <div className="animate-in zoom-in-95 flex min-h-[60vh] flex-col items-center justify-center text-center duration-500">
      <div className="group relative mb-8 cursor-default">
        <div className="from-primary to-primary-foreground absolute -inset-1 rounded-full bg-linear-to-r opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
        <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4">
          <Image
            src="/me.JPG"
            alt="Me in Hiroshima"
            className="object-cover"
            fill
            sizes="50vw"
            priority
          />
        </div>
      </div>

      <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
        {personalInfo.name}
      </h1>
      <p className="text-secondary-foreground mb-6 max-w-2xl text-xl font-light md:text-2xl">
        {personalInfo.title}
      </p>

      <div className="mb-8 flex items-center justify-center gap-2">
        <MapPin size={16} />
        <span>{personalInfo.location}</span>
      </div>

      <p className="mb-10 max-w-xl leading-relaxed">{personalInfo.tagline}</p>

      <div className="flex gap-4">
        <Button size="lg" asChild>
          <Link href="mailto:ken888686@gmail.com">Contact Me</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/about">About Me</Link>
        </Button>
      </div>
    </div>
  );
}
