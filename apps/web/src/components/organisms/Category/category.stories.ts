import { categoryItems } from "@/mocks/category";
import type { Meta, StoryObj } from "@storybook/react";
import Category from "./category";

const meta = {
	title: "Components/Organisms/Category",
	component: Category,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof Category>;

export default meta;
type CategoryStory = StoryObj<typeof meta>;

export const MinimalCategory: CategoryStory = {
	args: {
		items: categoryItems,
		variant: "minimal",
	},
};
