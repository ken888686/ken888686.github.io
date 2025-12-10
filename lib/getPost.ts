import { createClient } from "./supabase/server";

export async function getPostById(id: number): Promise<{
  title: string;
  created_at: string;
  categories: string[] | null;
  content: string | null;
}> {
  const supabase = await createClient();
  if (!supabase) {
    throw "No supabase instance.";
  }
  const { data } = await supabase
    .from("posts")
    .select("title, created_at, categories, content")
    .eq("id", id)
    .single();
  return (
    data ?? {
      title: "",
      created_at: "",
      categories: [],
      content: "",
    }
  );
}

export async function getAllPosts(): Promise<
  {
    id: number;
    title: string;
    excerpt: string;
    created_at: Date;
    categories: string[] | null;
  }[]
> {
  const supabase = await createClient();
  if (!supabase) {
    throw "No supabase instance.";
  }
  const { data } = await supabase
    .from("posts")
    .select("id, title, excerpt, created_at,  categories");
  const posts = data?.map((item) => ({
    ...item,
    created_at: new Date(item.created_at),
  }));

  return posts ?? [];
}
