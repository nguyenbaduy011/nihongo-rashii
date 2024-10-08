"use client";

import { Menu, Search, Plus } from "lucide-react";
import { SideBar } from "../sideBar";
import { useState } from "react";
import Image from "next/image";
import { ToggleCreateBlog } from "../blogs/toggleCreateBlog";
import Link from "next/link";

export function Header() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className="sticky top-0 z-10 flex h-20 items-center justify-between bg-[#2B2B2B] px-10 py-[1.375rem] text-lg text-white">
      <div className="flex space-x-32">
        {/* <Link href="/">日本語らしい</Link> */}

        <Link href="/">
          <Image
            src="/nihongo_rashii_white.svg"
            width={160}
            height={80}
            className="object-contain"
            alt="Nihongo rashii"
          />
        </Link>
        <div className="flex items-center space-x-16 font-medium">
          <Link href="/N5">N5</Link>
          <Link href="/N4">N4</Link>
          <Link href="/N3">N3</Link>
          <Link href="/N2">N2</Link>
          <Link href="/N1">N1</Link>
          <a>BLOG</a>
        </div>
      </div>
      <div className="flex items-center space-x-16">
        <Link href="/signin">Sign in</Link>
        <form action="">
          <button type="submit">Sign out</button>
        </form>
        <Search className="size-5" />
        <ToggleCreateBlog />
        <Menu onClick={() => setOpenSideBar(!openSideBar)} />
        {openSideBar && <SideBar />}
      </div>
    </div>
  );
}
