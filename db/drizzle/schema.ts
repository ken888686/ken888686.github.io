import { sql } from "drizzle-orm";
import {
  boolean,
  date,
  pgTable,
  serial,
  text,
  varchar,
} from "drizzle-orm/pg-core";

export const postsTable = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  excerpt: text("excerpt"),
  isPublished: boolean("is_published").notNull().default(true),
  createdAt: date("created_at").notNull().defaultNow(),
  updatedAt: date("updated_at").$onUpdate(() => new Date().toISOString()),
  categories: text("categories")
    .array()
    .default(sql`'{}'`),
  content: text("content"),
}).enableRLS();

export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;
