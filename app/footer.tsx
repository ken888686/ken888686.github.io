import { Copyright, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-4 text-sm md:flex-row">
        <span className="flex items-center gap-1">
          <Copyright size={14} /> {new Date().getFullYear()} Aaron. Built with
          Next.js & shadcn/ui.
        </span>
        <span className="flex items-center gap-1">
          <MapPin size={14} />
          Tokyo, Shinjuku
        </span>
      </div>
    </footer>
  );
}
