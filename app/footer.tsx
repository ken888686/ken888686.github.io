import { profile } from "@/content/profile";
import { Copyright, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background/50 mt-auto border-t py-8">
      <div className="text-muted-foreground mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm md:flex-row">
        <span className="flex items-center gap-1">
          <Copyright size={14} aria-hidden="true" />
          {profile.shortName}. Built with Next.js.
        </span>
        <span className="flex items-center gap-1">
          <MapPin size={14} aria-hidden="true" />
          {profile.location}
        </span>
      </div>
    </footer>
  );
}
