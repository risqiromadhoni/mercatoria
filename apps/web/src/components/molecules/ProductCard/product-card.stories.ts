import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ProductCard from "./product-card";

const meta = {
	title: "Components/Molecules/ProductCard",
	component: ProductCard,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		onClick: fn(),
		className: "w-80",
	},
} satisfies Meta<typeof ProductCard>;

export default meta;
type ProductCardStory = StoryObj<typeof meta>;

export const MoleculeProductCard: ProductCardStory = {
	args: {
		isWishlist: false,
	},
};
