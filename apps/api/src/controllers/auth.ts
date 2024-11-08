import {
	AuthLoginBodySchema,
	BodyRegisterUserSchema,
	DeviceIdHeaderSchema,
	RegisterDeviceSchema,
} from "@/schemas";
import { authService } from "@/services";
import { i18n } from "@/utils/i18n";
import Elysia, { StatusMap, t } from "elysia";

export const authController = new Elysia({ prefix: "/auth" })
	.post(
		"/device",
		({ set, headers }) => {
			set.status = StatusMap.OK;
			return authService.device(headers);
		},
		{
			headers: RegisterDeviceSchema,
			detail: {
				tags: ["Auth"],
				summary: "Register device",
				description: "Register device with provided data",
				responses: {
					[StatusMap.Created]: {
						description: i18n.success.auth.post.device,
						content: {
							"application/json": {
								schema: t.Ref("#/components/schemas/ResponseSingleMessageData"),
								example: {
									success: true,
									messages: i18n.success.auth.post.device,
									data: {
										id: "hultdg4ssr8eh3gtyhfc2pqa",
									},
								},
							},
						},
					},
					[StatusMap["Bad Request"]]: {
						description: i18n.error.auth.post.device,
						content: {
							"application/json": {
								schema: t.Ref("#/components/schemas/ResponseSingleMessage"),
								example: {
									success: false,
									messages: i18n.error.auth.post.device,
								},
							},
						},
					},
				},
			},
		},
	)
	.post(
		"/register",
		({ set, headers, body }) => {
			set.status = StatusMap.Created;
			return authService.register(headers, body);
		},
		{
			body: BodyRegisterUserSchema,
			headers: DeviceIdHeaderSchema,
			detail: {
				tags: ["Auth"],
				security: [
					{
						DeviceId: [],
					},
				],
				summary: "Register new user",
				description: "Register new user with provided data",
				responses: {
					[StatusMap.Created]: {
						description: i18n.success.auth.post.register,
						content: {
							"application/json": {
								schema: t.Ref("#/components/schemas/ResponseSingleMessage"),
								example: {
									success: true,
									messages: i18n.success.auth.post.register,
								},
							},
						},
					},
					[StatusMap.Conflict]: {
						description: i18n.error.auth.post.duplicate,
						content: {
							"application/json": {
								schema: t.Ref("#/components/schemas/ResponseSingleMessage"),
								example: {
									success: true,
									messages: i18n.error.auth.post.duplicate,
								},
							},
						},
					},
					[StatusMap["Bad Request"]]: {
						description: i18n.error.auth.post.register,
						content: {
							"application/json": {
								schema: t.Ref("#/components/schemas/ResponseSingleMessage"),
								example: {
									success: false,
									messages: i18n.error.auth.post.register,
								},
							},
						},
					},
				},
			},
		},
	)
	.post(
		"/login",
		({ set, headers, body }) => {
			set.status = StatusMap.OK;
			return authService.login(headers, body);
		},
		{
			headers: DeviceIdHeaderSchema,
			body: AuthLoginBodySchema,
			detail: {
				tags: ["Auth"],
				security: [
					{
						DeviceId: [],
					},
				],
				summary: "Login user",
				description: "Login user with provided data",
				responses: {
					[StatusMap.OK]: {
						description: i18n.success.auth.post.login,
						content: {
							"application/json": {
								schema: t.Ref("#/components/schemas/ResponseSingleMessage"),
								example: {
									success: true,
									messages: i18n.success.auth.post.login,
								},
							},
						},
					},
					[StatusMap["Bad Request"]]: {
						description: i18n.error.auth.post.login,
						content: {
							"application/json": {
								schema: t.Ref("#/components/schemas/ResponseSingleMessage"),
								example: {
									success: false,
									messages: i18n.error.auth.post.login,
								},
							},
						},
					},
				},
			},
		},
	);
