"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { CreateBlogForm } from "../forms/createBlogForm";
import { useEffect, useRef, useState } from "react";

export function TitleInput() {
  return <Input type="title" placeholder="Nhập tiêu đề" />;
}

export function CreateBlog() {
  const [isDivVisible, setIsDivVisible] = useState(true);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsDivVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isDivVisible) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
      <div
        className="flex h-auto w-[600px] rounded-lg bg-white p-8 shadow-lg"
        style={{ maxHeight: `calc(100vh - 80px)` }}
        ref={divRef}
      >
        <Tabs defaultValue="content" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="content">Nội dung</TabsTrigger>
            <TabsTrigger value="image">Ảnh</TabsTrigger>
          </TabsList>
          <TabsContent value="content">
            <CreateBlogForm />
          </TabsContent>
          <TabsContent value="image">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
