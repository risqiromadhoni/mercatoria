import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/i18n/config";
import "@fontsource-variable/plus-jakarta-sans";
import "./index.css";

const root = document.getElementById("root");

if (root && !root?.innerHTML) {
	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
}
