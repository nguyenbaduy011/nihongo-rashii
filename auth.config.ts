import { NextAuthConfig } from "next-auth";
import ResendProvider from "next-auth/providers/resend";
export const config = {
  providers: [ResendProvider],
} satisfies NextAuthConfig;