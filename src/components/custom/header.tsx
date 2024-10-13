"use client";

import { Menu, Search, Plus } from "lucide-react";
import { SideBar } from "../navBar";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { CreateBlogForm } from "../blogs/createBlogDialog";
import { SignClient } from "../auth/header-handler-client";

export function Header() {
  // const [openSideBar, setOpenSideBar] = useState(false);
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between bg-[#2B2B2B] px-10 text-lg text-white">
      <div className="flex items-center space-x-32">
        {/* <Link href="/">日本語らしい</Link> */}
        <Link href="/">
          <Image
            src="/nihongo_rashii_white.svg"
            width={140}
            height={70}
            className="object-contain"
            alt="Nihongo rashii"
          />
        </Link>
        <div className="flex items-center font-medium">
          <Link href="/N5">
            <div
              className={cn("p-7 hover:bg-[#Ffaaaa] hover:text-[#2B2B2B]", {
                "bg-[#Ffaaaa]": pathname === "/N5",
              })}
            >
              N5
            </div>
          </Link>
          <Link href="/N4">
            <div
              className={cn("p-7 hover:bg-[#Ffaaaa] hover:text-[#2B2B2B]", {
                "bg-[#Ffaaaa]": pathname === "/N4",
              })}
            >
              N4
            </div>
          </Link>
          <Link href="/N3">
            <div
              className={cn("p-7 hover:bg-[#Ffaaaa] hover:text-[#2B2B2B]", {
                "bg-[#Ffaaaa]": pathname === "/N3",
              })}
            >
              N3
            </div>
          </Link>
          <Link href="/N2">
            <div
              className={cn("p-7 hover:bg-[#Ffaaaa] hover:text-[#2B2B2B]", {
                "bg-red-300": pathname === "/N2",
              })}
            >
              N2
            </div>
          </Link>
          <Link href="/N1">
            <div
              className={cn("p-7 hover:bg-red-300 hover:text-[#2B2B2B]", {
                "bg-red-300": pathname === "/N1",
              })}
            >
              N1
            </div>
          </Link>
          <a className="p-7 hover:bg-red-300 hover:text-[#2B2B2B]">KANJI</a>
          <a
            className="p-7 hover:bg-red-300 hover:text-[#2B2B2B]"
            href="/components/blogs/createBlog"
          >
            BLOG
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-16">
        <CreateBlogForm />
        <SignClient />
        {/* <Search className="size-5" /> */}
        {/* <Menu onClick={() => setOpenSideBar(!openSideBar)} />
        {openSideBar && <SideBar />} */}
      </div>
    </div>
  );
}
