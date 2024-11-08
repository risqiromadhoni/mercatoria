import { randomBytes } from "node:crypto";

export const genSalt = (length = 16): string =>
	randomBytes(Math.ceil(length / 2))
		.toString("hex")
		.slice(0, length);
