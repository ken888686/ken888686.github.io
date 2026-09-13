import "server-only";

import { blogConfig } from "@/content/blog";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const postsDirectory = join(process.cwd(), "posts");
const markdownExtension = ".md";

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
};

function getPostFilenames() {
  return readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(markdownExtension))
    .sort();
}

function stripMarkdown(value: string) {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_`]/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function createExcerpt(content: string) {
  const paragraph = content
    .split(/\n\s*\n/)
    .map((value) => value.trim())
    .find(
      (value) =>
        value.length > 0 &&
        !value.startsWith("#") &&
        !value.startsWith(">") &&
        !value.startsWith("-") &&
        !value.startsWith("*"),
    );

  if (!paragraph) return "Read this note.";
  const plainText = stripMarkdown(paragraph);
  return plainText.length > 180
    ? `${plainText.slice(0, 177).trim()}...`
    : plainText;
}

function parsePost(filename: string): Post {
  const slug = filename.slice(0, -markdownExtension.length);
  const source = readFileSync(join(postsDirectory, filename), "utf8").trim();
  const titleMatch = source.match(/^#\s+(.+)$/m);
  const title = titleMatch?.[1]?.trim() ?? slug;
  const content = titleMatch
    ? source.replace(titleMatch[0], "").trim()
    : source;
  const dateMatch = slug.match(/^(\d{4}-\d{2}-\d{2})/);

  return {
    slug,
    title,
    date: dateMatch?.[1] ?? "",
    category:
      blogConfig.categories[slug as keyof typeof blogConfig.categories] ??
      "Notes",
    excerpt: createExcerpt(content),
    content,
  };
}

export function getAllPosts() {
  return getPostFilenames()
    .map(parsePost)
    .sort((first, second) => second.date.localeCompare(first.date));
}

export function getPostBySlug(slug: string) {
  const filename = getPostFilenames().find(
    (candidate) => candidate.slice(0, -markdownExtension.length) === slug,
  );

  return filename ? parsePost(filename) : null;
}
