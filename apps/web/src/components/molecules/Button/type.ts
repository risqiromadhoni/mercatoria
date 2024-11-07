export interface ButtonProps extends React.ComponentProps<"button"> {
	/**
	 * @description The color of the button
	 * @default "primary"
	 */
	color?: "primary" | "secondary" | "neutral" | "accent";
	/**
	 * @description The style of the button
	 * @default "solid"
	 */
	variant?: "solid" | "outline" | "link" | "ghost";
	/**
	 * @description The size of the button
	 * @default "md"
	 */
	size?: "xs" | "sm" | "md" | "lg";
	/**
	 * @description The full of width of the button
	 * @default false
	 */
	fullWidth?: boolean;
	/**
	 * @description The loading state of the button
	 * @default false
	 */
	loading?: boolean;
	/**
	 * @description The icon of the button
	 * @default false
	 */
	iconOnly?: boolean;
}
