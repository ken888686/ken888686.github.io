"use client";
import logo from "@/public/Logo.svg";
import Image from "next/image";
import Link from "next/link";

const headers = [
  { id: 1, name: "About" },
  { id: 2, name: "Experience" },
  { id: 3, name: "Work" },
  { id: 4, name: "Contact" },
];

export default function Navbar() {
  const headerRender = headers.map((x) => (
    <li key={x.id} className="relative rounded-full px-5 py-2">
      <Link href="#">{x.name}</Link>
    </li>
  ));

  return (
    <div className="relative">
      <nav className="fixed flex w-full items-center justify-between bg-black/85 px-10 py-5 shadow-lg backdrop-blur">
        <div>
          <Image src={logo} alt="picture of logo" width={50} height={50} />
        </div>

        <ul className="ml-auto flex px-2 py-2">{headerRender}</ul>

        <div>
          <Link
            href="#"
            className="rounded-lg border border-solid px-5 py-4 hover:bg-white hover:text-black"
          >
            Resume
          </Link>
        </div>
      </nav>
    </div>
  );
}
