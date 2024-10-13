"use server"
import { auth } from "@/lib/auth";
import { useSession } from "next-auth/react";
export async function Sign() {
  //   const { data: session } = useSession();
  //   if (!session?.user) return <div>Đăng nhập</div>;
  //   return <div>Đăng ký</div>;

  const session = await auth();
  if (!session?.user) return <div>Đăng nhập</div>;
  return <div>Đăng ký</div>;
}
