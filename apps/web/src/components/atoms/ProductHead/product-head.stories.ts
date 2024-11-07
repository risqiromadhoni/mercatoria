import type { Meta, StoryObj } from "@storybook/react";
import ProductHead from "./product-head";

const meta = {
	title: "Components/Atoms/ProductHead",
	component: ProductHead,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ProductHead>;

export default meta;
type ProductHeadStory = StoryObj<typeof meta>;

export const NewArrivalProductHead: ProductHeadStory = {
	args: {
		variant: "new-arrival",
	},
};

export const BestSellerProductHead: ProductHeadStory = {
	args: {
		variant: "best-seller",
	},
};
