import { Levels } from "@/lib/drizzle/placeholder-data/levels/levels";

import { db } from "@/lib/drizzle/db";
import { levels } from "@/lib/drizzle/seed/schema";

export async function InsertLevels() {
  try {
    const insertedLevels = await Promise.all(
      Levels.map(async (level) => {
        return await db.insert(levels).values({
          id: level.id,
          levelName: level.levelName,
          content: level.content,
        });
      }),
    );
    return insertedLevels;
  } catch (error) {
    console.error("Error inserting levels:", error);
    throw error;
  }
}
