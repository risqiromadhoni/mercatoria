import { Elysia, t } from "elysia";
import controllers from "./controllers";
import * as middlewares from "./middlewares";

try {
	const app = new Elysia();

	app.use(middlewares.midSwagger);

	if (controllers) {
		for (const controller of Object.values(controllers)) {
			app.use(controller);
		}
	}

	app.get("/", () => ({ message: "Hello Elysia" }), {
		detail: {
			tags: ["Main"],
			summary: "Welcome to Elysia",
			responses: {
				200: {
					description: "Welcome message",
					content: {
						"application/json": {
							schema: t.Ref("#/components/schemas/ResponseSingleMessage"),
							example: {
								messages: "Hello Elysia",
							},
						},
					},
				},
			},
		},
	});

	app.listen({
		port: 3000,
	});

	console.log(
		`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
	);
} catch (error) {
	console.error(error);
	process.exit(1);
}
