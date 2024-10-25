import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import * as middlewares from "./middlewares";

const app = new Elysia();

for (const middleware of Object.values(middlewares)) {
	app.use(middleware);
}

app.get("/", () => ({ message: "Hello Elysia" }), {
	detail: {
		summary: "Welcome to Elysia",
		responses: {
			200: {
				description: "Welcome message",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								message: {
									type: "string",
								},
							},
						},
						example: {
							message: "Hello Elysia",
						},
					},
				},
			},
		},
	},
});

app.listen(3001);

const isDev = Bun.env.NODE_ENV === "development";
if (isDev) {
	console.log(
		`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
	);
}
