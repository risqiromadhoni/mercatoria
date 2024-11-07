import { cn } from "@/lib/utils";
import type { FC } from "react";
import type { ProductHeadProps } from "./type";

const ProductHead: FC<ProductHeadProps> = (props) => {
	const { variant = "new-arrival" } = props;
	return (
		<div className="relative overflow-hidden bg-gradient-products w-[330px] h-[350px] rounded-3xl rounded-br-none rounded-tl-none">
			<div className="rounded-3xl rounded-br-none rounded-tl-none absolute z-10 inset-0 h-full w-full bg-transparent bg-gradient-products-squared bg-[size:6rem_4rem]" />
			<h2 className="w-1/2 absolute bottom-1/3 left-5 z-20 text-white uppercase font-bold leading-snug text-5xl [text-shadow:-1px_0_black,0_1px_black,1px_0_black,0_-1px_black]">
				{variant === "new-arrival" ? "New Arrival" : "Produk Populer"}
			</h2>
			<div
				className={cn({
					"h-[150px] absolute z-10 bottom-1/2 left-1/3":
						variant === "new-arrival",
					"h-[225px] absolute z-10 -bottom-20 -left-12 transform scale-x-[-1]":
						variant === "best-seller",
				})}
			>
				<img
					src={
						variant === "new-arrival"
							? "/images/new-arrival.png"
							: "/images/product-popular.png"
					}
					className="w-fit h-full object-fill"
					alt={variant}
				/>
			</div>
		</div>
	);
};

export default ProductHead;
