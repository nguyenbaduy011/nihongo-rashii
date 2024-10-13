"use server"
import { db } from "@/lib/drizzle/db";
import { blogs } from "@/lib/drizzle/seed/schema";

export async function insertBlog(values: any) {
  await db.insert(blogs).values({ ...values });
}
