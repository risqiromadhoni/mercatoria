import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";

const ConfigType = Type.Object({
	DATABASE_URL: Type.String(),
	SECRET_KEY: Type.String(),
	DEV: Type.Boolean({ default: false }),
});

type Config = Static<typeof ConfigType>;

const configValue: Readonly<Config> = {
	DATABASE_URL: process.env.DATABASE_URL,
	SECRET_KEY: process.env.SECRET_KEY,
	DEV: process.env.NODE_ENV === "development",
} as const;

const validateConfig = () => {
	const isValid = Value.Check(ConfigType, configValue);
	if (!isValid) {
		const errorFields = Value.Errors(ConfigType, configValue);
		throw new Error(`Invalid config: ${errorFields}`);
	}
	return configValue;
};

const config = validateConfig();

export default config;
