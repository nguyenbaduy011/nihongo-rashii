"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { CreateBlog } from "./createBlog";

export function ToggleCreateBlog() {
  const [isCreateBlogVisible, setCreateBlogVisible] = useState(false);

  const handleToggle = () => {
    setCreateBlogVisible(!isCreateBlogVisible);
  };

  return (
    <>
      <button
        onClick={handleToggle}
      >
        <Plus />
      </button>
      {isCreateBlogVisible && <CreateBlog />}
    </>
  );
}
