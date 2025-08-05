import { sql } from "drizzle-orm";
import { boolean, decimal, text } from "drizzle-orm/gel-core";
import {
  mysqlTable,
  foreignKey,
  int,
  varchar,
  timestamp,
  date,
  mysqlEnum,
} from "drizzle-orm/mysql-core";

export const usersTable = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  userName: varchar("user_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }),
  isEmailValid: boolean("is_email_valid").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export const sessionTable = mysqlTable(
  "session_table",
  {
    id: int("id").autoincrement().primaryKey(),
    userId: int("user_id").notNull(),
    valid: boolean().default(true).notNull(),
    userAgent: text("user_agent"),
    ip: varchar({ length: 255 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  },
  (session_table) => ({
    userIdFk: foreignKey({
      columns: [sessionTable.userId],
      foreignColumns: [usersTable.id],
      onDelete: "cascade",
    }),
  })
);

export const subscriptionTable = mysqlTable("subscription_table", {
  id: int("id").autoincrement().primaryKey(),
  month: varchar("month", { length: 255 }),
  days: int("days"),
  price: decimal("price", { precision: 10, scale: 2 }),
});

export const membershipTable = mysqlTable(
  "membership_table",
  {
    id: int("id").autoincrement().primaryKey(),
    userId: int("user_id").notNull(),
    month: varchar("month", { length: 255 }).notNull(),
    days: int("days").notNull(),
    startDate: date("start_date"),
    expiryDate: date("expiry_date"),
    price: int("price").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (membership_table) => ({
    userIdFk: foreignKey({
      columns: [membershipTable.userId],
      foreignColumns: [usersTable.id],
      onDelete: "cascade",
    }),
  })
);

export const personalDetailsTable = mysqlTable(
  "personal_details_table",
  {
    id: int("id").autoincrement().primaryKey(),
    userId: int("user_id").notNull(),
    fullName: varchar("full_name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    phone: varchar("phone", { length: 10 }).notNull(),
    address: varchar("address", { length: 1024 }).notNull(),
    city: varchar("city", { length: 255 }).notNull(),
    pinCode: varchar("pin_code", { length: 100 }).notNull(),
    state: varchar("state", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (personalDetailsTable) => ({
    userIdFk: foreignKey({
      columns: [personalDetailsTable.userId],
      foreignColumns: [usersTable.id],
      onDelete: "cascade",
    }),
  })
);

export const paymentTable = mysqlTable(
  "payment_table",
  {
    id: int("id").autoincrement().primaryKey(),
    userId: int("user_id").notNull(),
    fullName: varchar("full_name", { length: 255 }).notNull(),
    paymentId: varchar("strip_id", { length: 256 }).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (paymentTable) => ({
    userIdFk: foreignKey({
      columns: [paymentTable.userId],
      foreignColumns: [usersTable.id],
      onDelete: "cascade",
    }),
  })
);

export const oauthAccountsTable = mysqlTable(
  "oauth_accounts",
  {
    id: int().autoincrement().primaryKey(),
    userId: int("user_id").notNull(),
    provider: mysqlEnum("provider", ["google", "facebook"]).notNull(),
    providerAccountId: varchar("provider_account_id", { length: 255 })
      .notNull()
      .unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (oauthAccountsTable) => ({
    userIdFk: foreignKey({
      columns: [oauthAccountsTable.userId],
      foreignColumns: [usersTable.id],
      onDelete: "cascade",
    }),
  })
);

export const contactTable = mysqlTable(
  "contact_table",
  {
    id: int("id").autoincrement().primaryKey(),
    userId: int("user_id").notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    message: varchar("message", { length: 1024 }).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  },
  (contact_table) => ({
    userIdFk: foreignKey({
      columns: [contactTable.userId],
      foreignColumns: [usersTable.id],
      onDelete: "cascade",
    }),
  })
);

// forgot password to send token in email
export const passwordResetTokenTables = mysqlTable(
  "password_reset_tokens",
  {
    id: int("id").autoincrement().primaryKey(),
    userId: int("user_id").notNull(),
    tokenHash: text("token_hash").notNull(),
    expiresAt: timestamp("expires_at")
      .default(sql`(CURRENT_TIMESTAMP + INTERVAL 1 HOUR)`)
      .notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (password_reset_tokens) => ({
    userIdFk: foreignKey({
      columns: [passwordResetTokenTables.userId],
      foreignColumns: [usersTable.id],
      onDelete: "cascade",
    }),
  })
);
