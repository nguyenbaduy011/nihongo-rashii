import { db } from "@/lib/drizzle/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import { config } from "./auth.config";

export const {
  auth,
  handlers,
  signIn,
  signOut,
  unstable_update: update,
} = NextAuth({
  adapter: DrizzleAdapter(db),
  session: {
    strategy: "database",
    maxAge: 24 * 60 * 60,
  },
  ...config,
});