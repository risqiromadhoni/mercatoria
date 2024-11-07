import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/sign-in")({
	component: lazyRouteComponent(
		() => import("@/components/templates/AuthSignIn"),
	),
});
