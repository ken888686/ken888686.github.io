import { FadeInItem, StaggerContainer } from "@/components/motion-wrapper";
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
    <StaggerContainer className="mx-auto max-w-5xl">
      <FadeInItem className="mb-10">
        <h2 className="mb-2 flex items-center gap-3 text-3xl font-bold">
          <BookOpen /> Technical & Life Notes
        </h2>
        <p className="text-secondary-foreground">
          Record about AI development, Next.js learning experience, and Tokyo
          life.
        </p>
      </FadeInItem>

      <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {posts
          .sort(
            (x, y) =>
              new Date(y.createdAt).getTime() - new Date(x.createdAt).getTime(),
          )
          .map((post) => (
            <FadeInItem key={post.id}>
              <Link href={`/blog/${post.id}`} className="block h-full">
                <Card className="group hover:bg-secondary hover:border-secondary-foreground flex h-full cursor-pointer flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary text-xl transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-start justify-start">
                      {post.categories?.map((item, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="group-hover:border-secondary-foreground transition-colors duration-300"
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
                    <span>{post.createdAt}</span>
                    <span className="group-hover:text-primary flex items-center transition-colors duration-300">
                      Read More{" "}
                      <ChevronRight
                        size={16}
                        className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            </FadeInItem>
          ))}
      </StaggerContainer>
    </StaggerContainer>
  );
}
