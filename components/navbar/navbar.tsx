"use client";

import logo from "@/public/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const headers = [
  { id: 1, name: "About" },
  { id: 2, name: "Experience" },
  { id: 3, name: "Work" },
  { id: 4, name: "Contact" },
];

export default function Navbar() {
  const pathName = usePathname();
  const headerRender = headers.map((x) => (
    <li key={x.id} className="h-full">
      <Link
        href={x.name.toLocaleLowerCase()}
        className={`block h-full px-3 py-7 transition-all hover:-translate-y-1 hover:drop-shadow-lg ${pathName === x.name.toLowerCase() ? "text-orange-500" : "text-gray-900"}`}
      >
        {x.name}
      </Link>
    </li>
  ));

  return (
    <header className="py-12">
      <div className="container mx-auto">
        <div className="mx-auto flex items-center justify-between rounded-3xl bg-white/20 px-8 shadow-xl transition-all duration-1000 hover:bg-white hover:bg-white/25">
          <Link
            href="/"
            className="transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-lg"
          >
            <Image src={logo} alt="picture of the logo" width={50} height={50} priority />
          </Link>

          <ul className="flex items-center justify-center gap-10">{headerRender}</ul>

          <div className="inline-block text-right">
            <button
              type="button"
              className="rounded-full bg-purple-500 px-5 py-2 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-purple-800 hover:shadow-lg"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
