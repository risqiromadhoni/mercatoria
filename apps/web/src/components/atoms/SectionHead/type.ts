export interface SectionHeadProps extends React.ComponentProps<"div"> {
	/**
	 * The title of the section
	 * @default "default"
	 */
	variant?: "minimal" | "default";
	/**
	 * The title of the section
	 * @default "#"
	 */
	toSeeMore?: string;
	/**
	 * The title of the section
	 */
	title: string;
}
