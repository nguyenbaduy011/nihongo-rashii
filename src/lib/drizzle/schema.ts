import { varchar } from "drizzle-orm/mysql-core";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

// export const users = pgTable("users", {
//   userName: text("username").primaryKey(),
//   name: text("name").notNull(),
//   age: integer("age").notNull(),
//   phoneNumber: text("phoneNumber").notNull().unique(),
//   email: text("email").notNull().unique(),
// });

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  image: text("image").notNull(),
  content: text("content").notNull(),
  date: timestamp("date").defaultNow().notNull(),
  // category: text("category").notNull(),
  // author: text("author").notNull().references(()=>users.name, {onDelete: "cascade"})
});

export const levels = pgTable("levels", {
  id: text("id").notNull().primaryKey(),
  levelName: text("levelName").notNull(),
  content: text("content").notNull()
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
  grammarID: text("grammarID").notNull().references(()=> grammars.id, { onDelete: "cascade"}),
  vietnameseRead: text("vietnameseRead").notNull(),
  japaneseRead: text("japaneseRead").notNull(),
  romajiRead: text("romajiRead").notNull(),
});

//  export const categories = pgTable("categories", {
//  });

// export const blogCategory = pgTable("blogCategory", {
// });

// export const comments = pgTable("comments", {});
// export const likes = pgTable("likes", {});

