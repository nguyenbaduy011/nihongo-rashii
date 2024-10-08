import { varchar } from "drizzle-orm/mysql-core";
import { pgTable, primaryKey, serial, text, timestamp } from "drizzle-orm/pg-core";

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  // image: text("image").notNull(),
  content: text("content").notNull(),
  date: timestamp("date").defaultNow(),
  // category: text("category").notNull(),
  // author: text("author").notNull().references(()=>users.name, {onDelete: "cascade"})
});

export const levels = pgTable("levels", {
  id: text("id").notNull().primaryKey(),
  levelName: text("levelName").notNull(),
  content: text("content").notNull(),
});

export const grammars = pgTable("grammars", {
  id: text("id").notNull().primaryKey(),
  romajiRead: text("romajiRead").notNull(),
  japaneseRead: text("japaneseRead").notNull(),
  level: text("level")
    .notNull()
    .references(() => levels.id, { onDelete: "cascade" }),
  explain: text("explain").notNull(),
  meaning: text("meaning").notNull(),
  usingWay: text("usingWay").notNull(),
});

export const grammarExamples = pgTable("grammarExamples", {
  id: text("id").notNull().primaryKey(),
  grammarID: text("grammarID")
    .notNull()
    .references(() => grammars.id, { onDelete: "cascade" }),
  vietnameseRead: text("vietnameseRead").notNull(),
  japaneseRead: text("japaneseRead").notNull(),
  romajiRead: text("romajiRead").notNull(),
});

export const grammarHomophone = pgTable("grammarHomophone", {});

export const grammarSynophone = pgTable("grammarHomophone", {});
//  export const categories = pgTable("categories", {
//  });

// export const blogCategory = pgTable("blogCategory", {
// });

// export const comments = pgTable("comments", {});
// export const likes = pgTable("likes", {});

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});


export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (verificationToken) => ({
    compositePk: primaryKey({
      columns: [verificationToken.identifier, verificationToken.token],
    }),
  }),
);
