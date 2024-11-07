import { Rate } from "@/components";
import { cn } from "@/lib/utils";
import { IconHeartFilled } from "@tabler/icons-react";
import type { FC } from "react";
import { Button } from "../Button";
import type { ProductCardProps } from "./type";

const ProductCard: FC<ProductCardProps> = (props) => {
	const { isWishlist = false, className, ...divProps } = props;
	return (
		<div
			className={cn(
				"card card-compact rounded-lg bg-base-100 border border-stormGray-200 hover:shadow-lg transition-shadow",
				className,
			)}
			{...divProps}
		>
			<figure className="relative">
				<img
					src="/images/genshin-impact-product.jpeg"
					alt="Genshin Impact"
					loading="lazy"
				/>
				<figcaption
					title="Genshin Impact"
					className="w-full h-9 leading-relaxed absolute bottom-0 text-center font-normal text-sm text-white bg-black/65 py-2 px-1 line-clamp-1"
				>
					Genshin Impact
				</figcaption>
			</figure>
			<div className="card-body">
				<article className="flex gap-1 justify-center items-center">
					<div
						className="tooltip flex-1"
						data-tip="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
							tenetur et aperiam debitis praesentium ratione dolorem
							repudiandae, nemo iure. Distinctio sint, nesciunt eius dolores
							accusantium sit incidunt. Maiores, quos adipisci."
					>
						<p className="font-normal text-sm text-start line-clamp-2">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
							tenetur et aperiam debitis praesentium ratione dolorem
							repudiandae, nemo iure. Distinctio sint, nesciunt eius dolores
							accusantium sit incidunt. Maiores, quos adipisci.
						</p>
					</div>
					<Button
						type="button"
						variant="ghost"
						iconOnly
						className={cn("group", {
							"hover:bg-red-100": !isWishlist,
						})}
					>
						<IconHeartFilled
							className={cn("w-6 h-6 text-stormGray", {
								"group-hover:text-red-500 text-stormGray": !isWishlist,
								"text-red-500": isWishlist,
							})}
						/>
					</Button>
				</article>
				<p className="font-bold text-base">Rp. 1.000.000</p>
				<div className="flex justify-between items-center w-full">
					<Rate rating={2} />
					<span className="font-normal text-sm text-stormGray">
						1RB Terjual
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
