import type { OpenAPIV3 } from "openapi-types";

export const tags: OpenAPIV3.TagObject[] = [
	{
		name: "Main",
		description: "Main routes",
	},
	{
		name: "Auth",
		description: "Authentication routes",
	},
	{
		name: "Verification",
		description: "Verification routes",
	},
];
