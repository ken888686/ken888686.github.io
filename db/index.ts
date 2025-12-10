import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { postsTable } from "./drizzle/schema";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw "No connection string";
}

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, { prepare: false });
const db = drizzle(client);
const allBlogs = await db.select().from(postsTable);
console.log(allBlogs);
