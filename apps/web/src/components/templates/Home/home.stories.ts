import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import HomeTemplates from "./home";

const meta = {
	title: "Components/Templates/Home",
	component: HomeTemplates,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	args: { onClick: fn() },
} satisfies Meta<typeof HomeTemplates>;

export default meta;
type HomeTemplateStory = StoryObj<typeof meta>;

export const MoleculeAppBar: HomeTemplateStory = {};
