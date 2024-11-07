import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import AppBar from "./app-bar";

const meta = {
	title: "Components/Organisms/AppBar",
	component: AppBar,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	args: { onClick: fn() },
} satisfies Meta<typeof AppBar>;

export default meta;
type AppBarStory = StoryObj<typeof meta>;

export const MoleculeAppBar: AppBarStory = {
	args: {
		isAuthenticated: false,
		className: "w-screen",
	},
};
