import { carouselItems } from "@/mocks/carousel";
import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "./carousel";

const meta = {
	title: "Components/Molecules/Carousel",
	component: Carousel,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof Carousel>;

export default meta;
type CarouselStory = StoryObj<typeof meta>;

export const MoleculesCarousel: CarouselStory = {
	args: {
		items: carouselItems,
	},
};
