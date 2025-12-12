import { db } from "@/db";
import { postsTable, SelectPost } from "@/db/drizzle/schema";
import { eq } from "drizzle-orm";

export async function getPostById(
  id: number,
): Promise<Pick<SelectPost, "title" | "createdAt" | "categories" | "content">> {
  const post = await db
    .select({
      title: postsTable.title,
      createdAt: postsTable.createdAt,
      categories: postsTable.categories,
      content: postsTable.content,
    })
    .from(postsTable)
    .where(eq(postsTable.id, id))
    .then((res) => res[0]);

  return (
    post ?? {
      title: "",
      createdAt: "",
      categories: [],
      content: "",
    }
  );
}

export async function getAllPosts(
  enabled: boolean = true,
): Promise<
  Pick<SelectPost, "id" | "title" | "excerpt" | "createdAt" | "categories">[]
> {
  const posts = await db
    .select({
      id: postsTable.id,
      title: postsTable.title,
      excerpt: postsTable.excerpt,
      createdAt: postsTable.createdAt,
      categories: postsTable.categories,
    })
    .from(postsTable)
    .where(eq(postsTable.isPublished, enabled));

  return posts;
}
