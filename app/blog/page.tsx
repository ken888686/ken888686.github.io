import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blogConfig } from "@/content/blog";
import { siteConfig } from "@/content/site";
import { getAllPosts } from "@/lib/posts";
import { ArrowRight, BookOpen } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: blogConfig.description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: blogConfig.title,
    description: blogConfig.description,
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="page-shell mx-auto max-w-5xl">
      <header className="page-header mb-10 max-w-3xl">
        <p className="page-kicker flex items-center gap-2">
          <BookOpen size={16} aria-hidden="true" /> Blog
        </p>
        <h1 className="text-3xl leading-tight font-bold tracking-[-0.03em] md:text-5xl">
          {blogConfig.title}
        </h1>
        <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
          {blogConfig.description}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <Card className="border-primary/15 h-full transition-transform group-hover:-translate-y-1 group-hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <Badge variant="outline">{post.category}</Badge>
                  <time
                    dateTime={post.date}
                    className="text-muted-foreground text-sm"
                  >
                    {dateFormatter.format(new Date(`${post.date}T00:00:00Z`))}
                  </time>
                </div>
                <CardTitle className="text-xl leading-snug">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4 text-sm font-medium">
                Read article
                <ArrowRight
                  size={16}
                  className="ml-1 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
