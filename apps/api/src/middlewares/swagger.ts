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
		components: {
			securitySchemes: {
				DeviceId: {
					type: "apiKey",
					in: "header",
					name: "X-Device-Id",
					description: "Device ID for the request",
				},
				AuthToken: {
					type: "apiKey",
					in: "cookie",
					name: "AuthToken",
					description: "Authentication token for the request",
				},
			},
		},
	},
});
