"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const blogFormSchema = z.object({
  title: z
    .string()
    .min(0, {
      message: "Title không được để trống.",
    })
    .max(50, {
      message: "Title quá dài.",
    }),
    content: z.string().min(0, {message: "Nội dung không được để trống."})
});

export function InputBlogForm() {
  const form = useForm<z.infer<typeof blogFormSchema>>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: "",
      content: ""
    },
  });

  function onSubmit(values: z.infer<typeof blogFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="text-[#2B2B2B]">
              <FormLabel>Tiêu đề</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nhập tiêu đề..."
                  {...field}
                  className="w-[400px]"
                 />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
    control={form.control}
    name="content"
    render={({ field }) => (
      <FormItem className="text-[#2B2B2B]">
      <FormLabel>Nội dung</FormLabel>        
              <FormControl>
                <Textarea
                  placeholder="Nhập nội dung..."
                  className="max-h-[400px] w-[400px]"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-[#2B2B2B]">
          Tạo
        </Button>
      </form>
    </Form>
  );
}