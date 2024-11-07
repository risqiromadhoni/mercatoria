import "i18next";
import type { translation } from "./id";

declare module "i18next" {
	interface CustomTypeOptions {
		resources: {
			translation: typeof translation;
		};
	}
}
