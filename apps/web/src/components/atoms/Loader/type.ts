export interface LoaderProps extends React.ComponentProps<"svg"> {
	/**
	 * Size of loader
	 * @default "md"
	 */
	size?: "xs" | "sm" | "md" | "lg";
	/**
	 * Size of loader
	 * @default "primary"
	 */
	color?: "primary" | "secondary" | "accent" | "neutral";
}
