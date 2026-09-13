import { MDXComponents } from "@/components/mdx-components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

type ArticleProps = {
  params: Promise<{ slug: string }>;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: ArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function Article({ params }: ArticleProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl">
      <Button asChild variant="ghost" className="mb-8 pl-0 hover:pl-2">
        <Link href="/blog">
          <ArrowLeft aria-hidden="true" /> Back to Blog
        </Link>
      </Button>

      <header className="mb-10 border-b pb-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <Badge variant="outline">{post.category}</Badge>
          <time dateTime={post.date} className="text-muted-foreground text-sm">
            {dateFormatter.format(new Date(`${post.date}T00:00:00Z`))}
          </time>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-balance md:text-5xl">
          {post.title}
        </h1>
        <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
          {post.excerpt}
        </p>
      </header>

      <div className="min-w-0">
        <MDXRemote source={post.content} components={MDXComponents} />
      </div>
    </article>
  );
}
