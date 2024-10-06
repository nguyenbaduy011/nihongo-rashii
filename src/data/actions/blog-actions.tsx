"use server";

import { db } from "@/lib/drizzle/db";
import { blogs } from "@/lib/drizzle/seed/schema";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const BlogSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: "Title không được để trống.",
    })
    .max(50, {
      message: "Title quá dài.",
    }),
  content: z.string().min(1, { message: "Nội dung không được để trống." }),
});

export async function CreateBlogAction(prevState: any, formData: FormData) {
  const data = BlogSchema.parse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  return {
    ...prevState,
    data: data,
  };

  // try {
  //   await db.insert(blogs).values({
  //     title: data.title,
  //     content: data.content,
  //   });
  //   revalidatePath("/");
  //   return { message: `Đã tạo blog ${data.title}` };
  // } catch (e) {
  //   return { message: `Tạo blog thất bại` };
  // }
}
