"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
export function SignInClient() {
  return (
    <Button
      className="flex items-center justify-center gap-2 bg-[#2B2B2B] px-20 py-2 text-center"
      onClick={() => signIn("google", { redirectTo: "/" })}
    >
      <FaGoogle className="h-5 w-5" />
      <span className="text-center">Đăng nhập với Google</span>{" "}
    </Button>
  );
}
