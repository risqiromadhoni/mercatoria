import {
	char,
	date,
	index,
	pgEnum,
	pgTable,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";
import type { UnionToTuple } from "type-fest";

import {
	GENDER_ENUM,
	SSO_PROVIDER_ENUM,
	USER_ROLE_ENUM,
} from "@/utils/constant";
import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";

const USER_ROLE = Object.values(USER_ROLE_ENUM) as UnionToTuple<USER_ROLE_ENUM>;
const USER_GENDER = Object.values(GENDER_ENUM) as UnionToTuple<GENDER_ENUM>;
const SSO_PROVIDER = Object.values(
	SSO_PROVIDER_ENUM,
) as UnionToTuple<SSO_PROVIDER_ENUM>;

export const userRole = pgEnum("role", USER_ROLE);
export const userGender = pgEnum("gender", USER_GENDER);
export const ssoProvider = pgEnum("sso_provider", SSO_PROVIDER);

const idPk = varchar("id")
	.$defaultFn(() => createId())
	.primaryKey();

export const users = pgTable(
	"users",
	{
		id: idPk,
		phoneNumber: varchar("phone_number").notNull().unique(),
		email: varchar("email").notNull().unique(),
		fullName: varchar("full_name").notNull(),
		password: varchar("password"),
		salt: varchar("salt", { length: 64 }),
		birthDate: date("birth_date").notNull(),
		role: userRole("role").notNull().default(USER_ROLE_ENUM.USER),
		gender: userGender("gender"),
		googleId: varchar("google_id").unique(),
		facebookId: varchar("facebook_id").unique(),
		ssoProvider: ssoProvider("sso_provider"),
		verifiedAt: timestamp("verified_at"),
		createdAt: timestamp("created_at").defaultNow().notNull(),
		updatedAt: timestamp("updated_at"),
		deletedAt: timestamp("deleted_at"),
	},
	(tbl) => [
		index("users_email_idx").using("hash", tbl.email),
		index("users_phone_number_idx").using("hash", tbl.phoneNumber),
		index("users_role_idx").using("hash", tbl.role),
		index("users_gender_idx").using("hash", tbl.gender),
		index("users_birth_date_idx").on(tbl.birthDate),
		index("users_verified_at_idx").on(tbl.verifiedAt),
	],
);

export const bankAccounts = pgTable(
	"bank_accounts",
	{
		id: idPk,
		userId: varchar("user_id")
			.notNull()
			.references(() => users.id),
		bankName: varchar("bank_name").notNull(),
		accountNumber: varchar("account_number").notNull().unique(),
		accountHolder: varchar("account_holder").notNull(),
		createdAt: timestamp("created_at").defaultNow().notNull(),
	},
	(tbl) => [index("users_user_id_idx").using("hash", tbl.userId)],
);

export const devices = pgTable(
	"devices",
	{
		id: idPk,
		userId: varchar("user_id").references(() => users.id),
		macAddress: varchar("mac_address").notNull().unique(),
		userAgent: varchar("user_agent").notNull(),
		createdAt: timestamp("created_at").defaultNow().notNull(),
	},
	(tbl) => [
		index("devices_user_id_idx").using("hash", tbl.userId),
		index("devices_mac_address_idx").on(tbl.macAddress),
		index("devices_user_agent_idx").on(tbl.userAgent),
	],
);

export const otps = pgTable(
	"otps",
	{
		id: idPk,
		deviceId: varchar("device_id")
			.notNull()
			.references(() => devices.id),
		otp: char("otp", {
			length: 6,
		}).notNull(),
		expiredAt: timestamp("expired_at").notNull(),
		verifyAt: timestamp("verify_at"),
		createdAt: timestamp("created_at").defaultNow().notNull(),
	},
	(tbl) => [
		index("otps_device_id_idx").using("hash", tbl.deviceId),
		index("otps_expired_at_idx").on(tbl.expiredAt),
		index("otps_verify_at_idx").on(tbl.verifyAt),
	],
);

export const userRelations = relations(users, ({ many, one }) => ({
	devices: many(devices, { relationName: "devices" }),
	bankAccount: one(bankAccounts, {
		fields: [users.id],
		references: [bankAccounts.userId],
	}),
}));

export const deviceRelations = relations(devices, ({ many, one }) => ({
	otps: many(otps, { relationName: "otps" }),
	user: one(users, {
		fields: [devices.userId],
		references: [users.id],
	}),
}));

export const bankAccountsUser = relations(bankAccounts, ({ one }) => ({
	user: one(users, {
		fields: [bankAccounts.userId],
		references: [users.id],
	}),
}));

export const otpDevice = relations(otps, ({ one }) => ({
	device: one(devices, {
		fields: [otps.deviceId],
		references: [devices.id],
	}),
}));

export const Table = {
	users,
	devices,
	bankAccounts,
	otps,
} as const;

export type Table = typeof Table;
