import { cn } from "@/lib/utils";
import { IconStarFilled } from "@tabler/icons-react";
import type { FC } from "react";
import type { RateProps } from "./type";

const Rate: FC<RateProps> = (props) => {
	const { rating = 0, maxRating = 5, className, ...divProps } = props;
	const clampedRating = Math.max(0, Math.min(rating, maxRating));
	const percentage = (clampedRating / maxRating) * 100;
	return (
		<div className={cn("flex items-center space-x-2", className)} {...divProps}>
			<div className="relative w-6 h-6">
				<IconStarFilled className="w-6 h-6 text-stormGray" strokeWidth={1.5} />

				<div
					className="absolute inset-0 overflow-hidden"
					style={{ clipPath: `inset(0 ${100 - percentage}% 0 0)` }}
				>
					<IconStarFilled
						className="w-6 h-6 text-yellow-500"
						fill="currentColor"
						strokeWidth={1.5}
					/>
				</div>
			</div>

			<span
				className="font-medium text-xs text-stormGray"
				aria-label={`${clampedRating.toFixed(1)} out of ${5} stars`}
			>
				{clampedRating.toFixed(1)}
			</span>
		</div>
	);
};

export default Rate;
