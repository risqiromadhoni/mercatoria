import { t } from "elysia";
import type { Static } from "elysia";

export const VERIFY_TYPE = {
	EMAIL: "email",
	PHONE: "phone",
} as const;

export const VerifyParamsSchema = t.Object({
	type: t.Union([t.Literal(VERIFY_TYPE.EMAIL), t.Literal(VERIFY_TYPE.PHONE)]),
});

export type VerifyParamsSchema = Static<typeof VerifyParamsSchema>;

export const SendVerificationCodeBodySchema = t.Object({
	contact: t.String({
		description:
			"Email or phone number, e.g: 082331725998, +6282331725998, risqi@mail.com",
	}),
});

export type SendVerificationCodeBodySchema = Static<
	typeof SendVerificationCodeBodySchema
>;

export const VerifyVerificationCodeBodySchema = t.Object({
	code: t.String({ minLength: 6, maxLength: 6 }),
});

export type VerifyVerificationCodeBodySchema = Static<
	typeof VerifyVerificationCodeBodySchema
>;

export const CheckVerificationCodeBodySchema = t.Object({
	deviceId: t.String(),
	userId: t.String(),
});

export type CheckVerificationCodeBodySchema = Static<
	typeof CheckVerificationCodeBodySchema
>;
