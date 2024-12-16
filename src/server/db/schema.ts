import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const konkEntry = pgTable("konk_entry", {
    id: serial().primaryKey(),
    navn: text().notNull(),
    efternavn: text().notNull(),
    email: text().notNull().unique(),
    phone: integer().notNull(),
})