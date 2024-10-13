import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from "./seed/schema";

declare global {
  var drizzleClient: ReturnType<typeof drizzle> | undefined;
}

config({ path: ".env.local" }); 

const sql = neon(process.env.DATABASE_URL!);

const client = drizzle(sql, { schema });

export const db = global.drizzleClient || client;

if (process.env.NODE_ENV !== "production") global.drizzleClient = db;

export default db
