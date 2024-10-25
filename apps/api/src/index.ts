import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import MainController from "./controllers";
import * as middlewares from "./middlewares";

const app = new Elysia();

for (const middleware of Object.values(middlewares)) {
	app.use(middleware);
}

const controller = new MainController(app);
controller.configureRoutes();

app.listen(3001);

const isDev = Bun.env.NODE_ENV === "development";
if (isDev) {
	console.log(
		`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
	);
}
