import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    AUTH_RESEND_KEY: z.string().min(1),
    AUTH_SECRET: z.string().min(1),
    AUTH_URL: z.string().min(1).url(),
    DATABASE_URL: z.string().min(1).url(),
  },
  runtime: {
    AUTH_RESEND_KEY: process.env.AUTH_RESEND_KEY ,
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_URL: process.env.AUTH_URL ,
    DATABASE_URL: process.env.DATABASE_URL ,
  },
});
