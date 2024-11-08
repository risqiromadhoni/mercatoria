import { components, tags } from "@/swaggers";
import swagger from "@elysiajs/swagger";

export default swagger({
	path: "/docs",
	documentation: {
		info: {
			title: "Mercatoria API Documentation",
			description: "API Documentation for the Mercatoria API",
			version: "1.0.0",
			contact: {
				email: "risqi.romadhoni96@gmail.com",
				name: "Risqi Romadhoni",
				url: "https://www.heyris.me",
			},
		},
		tags,
		components,
	},
});
