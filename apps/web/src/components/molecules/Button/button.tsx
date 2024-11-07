import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Loader } from "../../atoms/Loader";
import type { ButtonProps } from "./type";

/**
 * Button UI Component
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const {
		color = "primary",
		variant = "solid",
		size = "md",
		fullWidth = false,
		loading = false,
		iconOnly = false,
		className,
		children,
		...btnProps
	} = props;
	return (
		<button
			ref={ref}
			type="button"
			className={cn(
				"btn",
				{
					"btn-primary": color === "primary",
					"btn-secondary": color === "secondary",
					"btn-neutral": color === "neutral",
					"btn-accent": color === "accent",
					"btn-outline": variant === "outline",
					"btn-link": variant === "link",
					"btn-ghost": variant === "ghost",
					"btn-disabled": btnProps.disabled || loading,
					"btn-xs": size === "xs",
					"btn-sm": size === "sm",
					"btn-md": size === "md",
					"btn-lg": size === "lg",
					"btn-circle": iconOnly,
				},
				className,
			)}
			{...btnProps}
		>
			{loading ? <Loader color="neutral" /> : null}
			{children}
		</button>
	);
});

Button.displayName = "Button";

export default Button;
