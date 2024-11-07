export interface ProductCardProps
	extends Omit<React.ComponentProps<"div">, "children"> {
	/**
	 * Determines whether the product is in the wishlist
	 * @default false
	 */
	isWishlist?: boolean;
}
