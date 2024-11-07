import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translation } from "./id";

i18n
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		lng: "id",
		fallbackLng: "id",
		defaultNS: "translation",
		debug: import.meta.env.DEV,
		resources: {
			id: {
				translation,
			},
		},
	});

export default i18n;
