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

type FrontMatter = {
  title?: string;
  date?: string;
  category?: string;
  description?: string;
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

function parseFrontMatter(source: string) {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*(?:\n|$)/);
  if (!match) return { metadata: {} satisfies FrontMatter, content: source };

  const metadata = match[1].split("\n").reduce<FrontMatter>((result, line) => {
    const field = line.match(/^(title|date|category|description):\s*(.*)$/);
    if (!field) return result;

    const value = field[2].trim().replace(/^("|')(.*)\1$/, "$2");
    if (field[1] === "title") result.title = value;
    if (field[1] === "date") result.date = value;
    if (field[1] === "category") result.category = value;
    if (field[1] === "description") result.description = value;
    return result;
  }, {});

  return { metadata, content: source.slice(match[0].length).trim() };
}

function parsePost(filename: string): Post {
  const slug = filename.slice(0, -markdownExtension.length);
  const source = readFileSync(join(postsDirectory, filename), "utf8").trim();
  const { metadata, content: sourceContent } = parseFrontMatter(source);
  const titleMatch = sourceContent.match(/^#\s+(.+)$/m);
  const title = metadata.title ?? titleMatch?.[1]?.trim() ?? slug;
  const content = titleMatch
    ? sourceContent.replace(titleMatch[0], "").trim()
    : sourceContent;
  const dateMatch = slug.match(/^(\d{4}-\d{2}-\d{2})/);
  const date = metadata.date ?? dateMatch?.[1] ?? "";

  return {
    slug,
    title,
    date,
    category: metadata.category ?? "Notes",
    excerpt: metadata.description ?? createExcerpt(content),
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
