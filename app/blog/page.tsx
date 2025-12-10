import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllPosts } from "@/lib/getPost";
import { BookOpen, ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-5xl duration-500">
      <div className="mb-10">
        <h2 className="mb-2 flex items-center gap-3 text-3xl font-bold">
          <BookOpen /> Technical & Life Notes
        </h2>
        <p className="text-secondary-foreground">
          Record about AI development, Next.js learning experience, and Tokyo
          life.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {posts
          .sort((x, y) => y.created_at.getTime() - x.created_at.getTime())
          .map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="block">
              <Card className="group hover:bg-secondary hover:border-secondary-foreground flex h-full cursor-pointer flex-col transition-all hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl transition-colors">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-start justify-start">
                    {post.categories?.map((item, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="group-hover:border-secondary-foreground"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="grow">
                  <p className="line-clamp-2 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="mt-auto flex justify-between border-t pt-4 text-sm">
                  <span>{`${post.created_at.getFullYear()}-${post.created_at.getMonth() + 1}-${post.created_at.getDate()}`}</span>
                  <span className="flex items-center transition-colors">
                    Read More <ChevronRight size={16} className="ml-1" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
}
