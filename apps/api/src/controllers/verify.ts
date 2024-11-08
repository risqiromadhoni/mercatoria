import {
	DeviceIdHeaderSchema,
	SendVerificationCodeBodySchema,
	VerifyParamsSchema,
	VerifyVerificationCodeBodySchema,
} from "@/schemas";
import { verificationService } from "@/services";
import Elysia, { StatusMap } from "elysia";

export const verifyController = new Elysia({ prefix: "/verify" })
	.post(
		"/:type/send",
		({ set, params }) => {
			set.status = StatusMap.Created;
			return verificationService.send(params);
		},
		{
			headers: DeviceIdHeaderSchema,
			params: VerifyParamsSchema,
			body: SendVerificationCodeBodySchema,
			detail: {
				tags: ["Verification"],
				security: [
					{
						DeviceId: [],
					},
				],
				summary: "Send verification code",
			},
		},
	)
	.post(
		"/:type/resend",
		({ set, params }) => {
			set.status = StatusMap.OK;
			return verificationService.resend(params);
		},
		{
			headers: DeviceIdHeaderSchema,
			params: VerifyParamsSchema,
			body: SendVerificationCodeBodySchema,
			detail: {
				tags: ["Verification"],
				security: [
					{
						DeviceId: [],
					},
				],
				summary: "Resend verification code",
			},
		},
	)
	.post(
		"/:type",
		({ set, params }) => {
			set.status = StatusMap.OK;
			return verificationService.verify(params);
		},
		{
			headers: DeviceIdHeaderSchema,
			params: VerifyParamsSchema,
			body: VerifyVerificationCodeBodySchema,
			detail: {
				tags: ["Verification"],
				security: [
					{
						DeviceId: [],
					},
				],
				summary: "Verify code",
			},
		},
	);
