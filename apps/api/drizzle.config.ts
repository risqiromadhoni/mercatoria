import "dotenv/config";
import type { Config } from "drizzle-kit";
import { defineConfig } from "drizzle-kit";

const drizzleConfig = {
	out: "./drizzle",
	schema: "./src/db/schema.ts",
	dialect: "postgresql",
	casing: "snake_case",
	dbCredentials: {
		url: String(process.env.DATABASE_URL),
	},
	migrations: {
		table: "migrations",
		schema: "public",
	},
} satisfies Config;

export default defineConfig(drizzleConfig);
