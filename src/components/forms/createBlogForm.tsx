"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState } from "react-dom";
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
import { BlogSchema, CreateBlogAction } from "../../data/actions/blog-actions";
import { useForm } from "react-hook-form";

const INITIAL_STATE = {
  data: "hello",
};

// function OnSubmit(values: z.infer<typeof blogFormSchema>) {
//   console.log(values);
// }

// function SubmitButton() {
//   const { pending } = useFormStatus();

//   return (
//     <Button type="submit" disabled={pending} className="bg-[#2B2B2B]">
//       Tạo
//     </Button>
//   );
// }

export function CreateBlogForm() {
  const [formState, formAction] = useFormState(CreateBlogAction, INITIAL_STATE);
  const form = useForm<z.infer<typeof BlogSchema>>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  console.log(formState, "client");

  // const { errors } = useFormState({
  //   control: form.control,
  // });

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-8">
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
              {/* <FormMessage>{errors.content?.message}</FormMessage> */}
            </FormItem>
          )}
        />
        <Button type="submit">Tạo</Button>
      </form>
    </Form>
  );
}
