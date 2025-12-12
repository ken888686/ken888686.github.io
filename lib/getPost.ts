import { db } from "@/db";
import { postsTable } from "@/db/drizzle/schema";
import { eq } from "drizzle-orm";

export async function getPostById(id: number): Promise<{
  title: string;
  createdAt: string;
  categories: string[] | null;
  content: string | null;
}> {
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

export async function getAllPosts(enabled: boolean = true): Promise<
  {
    id: number;
    title: string;
    excerpt: string | null;
    created_at: string;
    categories: string[] | null;
  }[]
> {
  const posts = await db
    .select({
      id: postsTable.id,
      title: postsTable.title,
      excerpt: postsTable.excerpt,
      created_at: postsTable.createdAt,
      categories: postsTable.categories,
    })
    .from(postsTable)
    .where(eq(postsTable.enabled, enabled));

  return posts;
}
