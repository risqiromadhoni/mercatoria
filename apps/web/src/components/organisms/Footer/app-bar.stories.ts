import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Footer from "./footer";

const meta = {
	title: "Components/Organisms/Footer",
	component: Footer,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	args: { onClick: fn() },
} satisfies Meta<typeof Footer>;

export default meta;
type FooterStory = StoryObj<typeof meta>;

export const MoleculeFooter: FooterStory = {};
