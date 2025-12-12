import { sql } from "drizzle-orm";
import { date, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const postsTable = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  excerpt: text("excerpt"),
  createdAt: date("created_at").notNull().defaultNow(),
  updatedAt: date("updated_at")
    .notNull()
    .$onUpdate(() => new Date().toISOString()),
  categories: text("categories")
    .array()
    .default(sql`'{}'`),
  content: text("content"),
});

export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;
