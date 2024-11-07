import type { Meta, StoryObj } from "@storybook/react";
import SectionHead from "./section-head";

const meta = {
	title: "Components/Atoms/SectionHead",
	component: SectionHead,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: { className: "!w-screen" },
} satisfies Meta<typeof SectionHead>;

export default meta;
type SectionHeadStory = StoryObj<typeof meta>;

export const MinimalSectionHead: SectionHeadStory = {
	args: {
		title: "Minimal Section Head",
		variant: "minimal",
	},
};

export const DefaultSectionHead: SectionHeadStory = {
	args: {
		title: "Section Head",
		variant: "default",
	},
};
