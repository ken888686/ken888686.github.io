"use client";

import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const personalInfo = {
  name: "Yung Chun Tu",
  title: "AI Engineer @ Japan",
  tagline: `A backend-focused full-stack engineer with ${new Date().getFullYear() - 2016}+ years of experience, specializing in .NET microservices, REST APIs, system modernization, and cloud DevOps—building observable, high-performance production systems and collaborating effectively across teams in Mandarin, Japanese, and English.`,
  location: "Shinjuku, Tokyo",
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 50 },
  },
};

export default function Home() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex min-h-[60vh] flex-col items-center justify-center text-center"
    >
      <motion.div
        variants={item}
        className="group relative mb-8 cursor-default"
      >
        <div className="from-primary to-primary-foreground absolute -inset-1 rounded-full bg-linear-to-r opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
        <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4">
          <Image
            src="/me.JPG"
            alt="Me in Hiroshima"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            fill
            sizes="50vw"
            priority
          />
        </div>
      </motion.div>

      <motion.h1
        variants={item}
        className="mb-4 text-4xl font-bold tracking-tight md:text-6xl"
      >
        {personalInfo.name}
      </motion.h1>
      <motion.p
        variants={item}
        className="text-secondary-foreground mb-6 max-w-2xl text-xl font-light md:text-2xl"
      >
        {personalInfo.title}
      </motion.p>

      <motion.div
        variants={item}
        className="mb-8 flex items-center justify-center gap-2"
      >
        <MapPin size={16} />
        <span>{personalInfo.location}</span>
      </motion.div>

      <motion.p variants={item} className="mb-10 max-w-xl leading-relaxed">
        {personalInfo.tagline}
      </motion.p>

      <motion.div variants={item} className="flex gap-4">
        <Button
          size="lg"
          asChild
          className="transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <Link href="mailto:ken888686@gmail.com">Contact Me</Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <Link href="/about">About Me</Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
