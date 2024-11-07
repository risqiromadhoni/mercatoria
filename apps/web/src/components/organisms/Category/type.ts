export interface CategoryItem {
	/**
	 * The category item title.
	 */
	title: string;
	/**
	 * The category item image.
	 */
	image: string;
	/**
	 * The category item link.
	 */
	link: string;
}

export interface CategoryProps {
	/**
	 * The category variant.
	 * @default "minimal"
	 */
	variant?: "minimal" | "full";
	/**
	 * The category items.
	 */
	items: CategoryItem[];
}
