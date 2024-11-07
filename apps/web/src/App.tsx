import { RouterProvider, createRouter } from "@tanstack/react-router";
import PWABadge from "./PWABadge.tsx";

import { Toaster } from "sonner";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

function App() {
	return (
		<>
			<RouterProvider router={router} />
			<Toaster />
			<PWABadge />
		</>
	);
}

export default App;
