import { Table } from "@/db";
import { createInsertSchema } from "drizzle-typebox";
import type { Static } from "elysia";
import { t } from "elysia";

/**
 * Password should have min length 9 character,
 * at least 1 uppercase, 1 lowercase, 1 number, and 1 special character
 *
 * @example
 * - Abcdefg1!
 * - Abcdefg1!@#
 */
const passwordPattern =
	"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{9,})";

export const _registerUserSchema = createInsertSchema(Table.users, {
	password: t.String({ minLength: 9, pattern: passwordPattern }),
	email: t.String({ format: "email" }),
	birthDate: t.String({ format: "date" }),
	verifiedAt: t.String({ format: "date-time" }),
});

export const _bankAccountSchema = createInsertSchema(Table.bankAccounts);

export const BodyRegisterUserSchema = t.Intersect([
	t.Omit(_registerUserSchema, [
		"id",
		"salt",
		"createdAt",
		"updatedAt",
		"deletedAt",
	]),
	t.Omit(_bankAccountSchema, ["id", "userId", "createdAt"]),
]);

export type BodyRegisterUserSchema = Static<typeof BodyRegisterUserSchema>;

export const AuthLoginBodySchema = t.Object({
	identifier: t.String(),
	password: t.String(),
});

export type AuthLoginBodySchema = Static<typeof AuthLoginBodySchema>;

export const RegisterDeviceSchema = t.Object({
	"x-mac-address": t.String(),
	"user-agent": t.String(),
});

export type RegisterDeviceSchema = Static<typeof RegisterDeviceSchema>;

export const DeviceIdHeaderSchema = t.Object({
	"x-device-id": t.String(),
});

export type DeviceIdHeaderSchema = Static<typeof DeviceIdHeaderSchema>;
