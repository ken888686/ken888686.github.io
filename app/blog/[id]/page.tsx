import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPostById } from "@/lib/getPost";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function Article(props: {
  params: Promise<{
    id: number;
  }>;
}) {
  const { id } = await props.params;
  const post = await getPostById(id);

  return (
    <div className="fade-in animate-in slide-in-from-bottom-4 duration-500">
      <Button
        asChild
        variant="ghost"
        className="mb-6 pl-0 transition-all hover:pl-2"
      >
        <Link href="/blog">
          <ArrowLeft size={20} className="mr-2" />
          Back to Blog
        </Link>
      </Button>
      <Card>
        <CardHeader>
          <div className="mb-4 flex items-center justify-between gap-2">
            <div className="flex items-center justify-start gap-1">
              {post?.categories?.map((category, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="border-secondary-foreground border"
                >
                  {category}
                </Badge>
              ))}
            </div>
            <span className="text-secondary-foreground text-sm">
              {post?.created_at}
            </span>
          </div>
          <CardTitle className="mb-4 text-3xl leading-tight md:text-4xl">
            {post?.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: post?.content || "" }} />
        </CardContent>
      </Card>
    </div>
  );
}
