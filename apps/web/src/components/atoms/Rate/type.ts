export interface RateProps extends React.ComponentProps<"div"> {
	/**
	 * Numeric rating value to be displayed
	 * @default 0
	 */
	rating?: number;
	/**
	 * Maximum rating value
	 * @default 5
	 */
	maxRating?: number;
}
