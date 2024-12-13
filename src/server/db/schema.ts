import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const konkEntry = pgTable("konk_entry", {
    id: serial().primaryKey(),
    name: text().notNull(),
    email: text().notNull(), 
})