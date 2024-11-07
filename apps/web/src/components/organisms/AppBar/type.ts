export interface AppBarProps extends React.ComponentProps<"header"> {
	/**
	 * Whether the user is authenticated.
	 * @default false
	 */
	isAuthenticated?: boolean;
}
