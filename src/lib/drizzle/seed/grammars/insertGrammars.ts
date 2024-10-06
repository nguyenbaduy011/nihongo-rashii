import { N5Grammars } from "@/lib/drizzle/placeholder-data/grammars/n5Grammars";
import { N4Grammars } from "@/lib/drizzle/placeholder-data/grammars/n4Grammars";
import { N3Grammars } from "@/lib/drizzle/placeholder-data/grammars/n3Grammars";
import { N2Grammars } from "@/lib/drizzle/placeholder-data/grammars/n2Grammars";
import { N1Grammars } from "@/lib/drizzle/placeholder-data/grammars/n1Grammars";

import { db } from "@/lib/drizzle/db";
import { grammars } from "@/lib/drizzle/seed/schema";

export async function InsertN5Grammars() {
  try {
    const insertedGrammars = await Promise.all(
      N5Grammars.map(async (grammar) => {
        return await db.insert(grammars).values({
          id: grammar.id,
          romajiRead: grammar.romajiRead,
          japaneseRead: grammar.japaneseRead,
          level: grammar.level,
          explain: grammar.explain,
          meaning: grammar.meaning,
          usingWay: grammar.usingWay,
        });
      }),
    );
    return insertedGrammars;
  } catch (error) {
    console.error("Error inserting N5 grammar examples:", error);
    throw error;
  }
}
