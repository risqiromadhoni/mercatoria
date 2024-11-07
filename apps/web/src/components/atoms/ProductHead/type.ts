export interface ProductHeadProps extends React.ComponentProps<"div"> {
	/**
	 * Variant of the product head
	 * @default "new-arrival"
	 */
	variant?: "new-arrival" | "best-seller";
}
