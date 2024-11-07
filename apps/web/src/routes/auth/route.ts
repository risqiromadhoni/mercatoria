import {
	createFileRoute,
	lazyRouteComponent,
	redirect,
} from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
	beforeLoad: (ctx) => {
		const { pathname } = ctx.location;
		if (pathname === "/auth") {
			throw redirect({
				to: "/auth/sign-in",
			});
		}
	},
	component: lazyRouteComponent(
		() => import("@/components/templates/AuthLayout"),
	),
});
