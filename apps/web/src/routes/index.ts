import { HomeTemplate } from "@/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: HomeTemplate,
});
