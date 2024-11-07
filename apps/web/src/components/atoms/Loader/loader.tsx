import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { LoaderProps } from "./type";

const Loader = forwardRef<SVGSVGElement, LoaderProps>((props, ref) => {
	const { size = "md", color = "primary", className, ...svgProps } = props;
	return (
		<svg
			ref={ref}
			data-testid="loader"
			className={cn("animate-spin", {
				"h-4 w-4": size === "xs",
				"h-5 w-5": size === "sm",
				"h-6 w-6": size === "md",
				"h-7 w-7": size === "lg",
				"text-primary": color === "primary",
				"text-secondary": color === "secondary",
				"text-accent": color === "accent",
				"text-neutral": color === "neutral",
			})}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			{...svgProps}
		>
			<title>Loader</title>
			<circle
				data-testid="loader-circle"
				className="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				stroke-width="4"
			/>
			<path
				data-testid="loader-path"
				className="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			/>
		</svg>
	);
});

Loader.displayName = "Loader";

Loader.defaultProps = {
	size: "sm",
	color: "primary",
};

export default Loader;
