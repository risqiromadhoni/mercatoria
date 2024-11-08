import { t } from "elysia";
import type { OpenAPIV3 } from "openapi-types";

const securitySchemes: OpenAPIV3.ComponentsObject["securitySchemes"] = {
	DeviceId: {
		type: "apiKey",
		in: "header",
		name: "x-device-id",
		description: "Device ID for the request",
	},
	AuthToken: {
		type: "apiKey",
		in: "cookie",
		name: "AuthToken",
		description: "Authentication token for the request",
	},
};

const schemas: OpenAPIV3.ComponentsObject["schemas"] = {
	ResponseSingleMessage: t.Object(
		{
			success: t.Boolean(),
			messages: t.String(),
		},
		{
			examples: {
				success: {
					success: true,
					messages: "Success",
				},
				error: {
					success: false,
					messages: "Error",
				},
			},
		},
	),
	ResponseSingleMessageData: t.Object(
		{
			success: t.Boolean(),
			messages: t.String(),
			data: t.Any(),
		},
		{
			examples: {
				success: {
					success: true,
					messages: "Success",
					data: {
						id: 1,
					},
				},
				error: {
					success: false,
					messages: "Error",
					data: {},
				},
			},
		},
	),
	ResponseMultipleMessages: t.Object(
		{
			success: t.Boolean(),
			messages: t.Record(t.String(), t.Array(t.String())),
		},
		{
			examples: {
				error: {
					success: false,
					messages: {
						email: ["Email is required"],
						password: ["Password is required"],
					},
				},
			},
		},
	),
};

export const components: OpenAPIV3.ComponentsObject = {
	securitySchemes,
	schemas,
};
