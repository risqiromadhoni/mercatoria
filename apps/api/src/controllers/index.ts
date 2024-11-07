import type { Elysia } from "elysia";

class MainController {
	#app: Elysia;

	constructor(app: Elysia) {
		this.#app = app;
	}

	configureRoutes() {
		this.#configureRoutes();
	}

	#configureRoutes() {
		this.#getRoot();
	}

	#getRoot() {
		this.#app.get("/", () => ({ message: "Hello Elysia" }), {
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
	}
}

export default MainController;
