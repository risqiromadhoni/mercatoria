import { z } from "zod";

export const AuthLoginSchema = z.object({
	identifier: z.string(),
	password: z.string(),
});
