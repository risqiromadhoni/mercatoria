import { Elysia } from "elysia";
import MainController from "./controllers";
import * as middlewares from "./middlewares";

try {
	const app = new Elysia();

	for (const middleware of Object.values(middlewares)) {
		app.use(middleware);
	}

	const controller = new MainController(app);
	controller.configureRoutes();

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
