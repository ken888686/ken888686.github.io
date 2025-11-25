import { Button } from "@/components/ui/button";
import { MapPin, User } from "lucide-react";
import Link from "next/link";

const personalInfo = {
  name: "Aaron",
  title: "AI Engineer @ Japanese Tech Firm",
  tagline: "專注於將 AI 技術落地，並致力於構建高效能的 Next.js 應用。",
  location: "Shinjuku, Tokyo",
};

export default function Home() {
  return (
    <div className="animate-in zoom-in-95 flex min-h-[60vh] flex-col items-center justify-center text-center duration-500">
      <div className="group relative mb-8 cursor-default">
        <div className="absolute -inset-1 rounded-full bg-linear-to-r from-zinc-700 to-zinc-500 opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
        <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4 border-zinc-800 bg-zinc-900">
          <User size={64} className="text-zinc-500" />
        </div>
      </div>

      <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-50 md:text-6xl">
        {personalInfo.name}
      </h1>
      <p className="mb-6 max-w-2xl text-xl font-light text-zinc-400 md:text-2xl">
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
          <Link href="/experience">Experience</Link>
        </Button>
      </div>
    </div>
  );
}
