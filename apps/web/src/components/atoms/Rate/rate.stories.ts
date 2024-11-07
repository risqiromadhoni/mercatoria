import type { Meta, StoryObj } from "@storybook/react";
import Rate from "./rate";

const meta = {
	title: "Components/Atoms/Rate",
	component: Rate,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Rate>;

export default meta;
type RateStory = StoryObj<typeof meta>;

export const MoleculeRate: RateStory = {
	args: {
		rating: 2.5,
		maxRating: 5,
	},
};
