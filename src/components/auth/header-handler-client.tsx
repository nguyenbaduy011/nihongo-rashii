"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export function SignClient() {
  const { data: session, status } = useSession(); // Thêm status
  if (!session?.user) {
    return (
      <Link href="/signin">
        <div>Đăng nhập</div>
      </Link>
    );
  }

  return (
    <Link href="/signout">
      <div>Đăng xuất</div>
    </Link>
  );
}
