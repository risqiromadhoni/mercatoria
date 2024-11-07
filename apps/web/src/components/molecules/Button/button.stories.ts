import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, within } from "@storybook/test";
import Button from "./button";

const meta = {
	title: "Components/Molecules/Button",
	component: Button,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type ButtonStory = StoryObj<typeof meta>;

export const MoleculeButton: ButtonStory = {
	args: {
		children: "Button",
		color: "primary",
		variant: "solid",
		size: "md",
		fullWidth: false,
		loading: false,
		iconOnly: false,
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const label = args.children?.toString() || "Button";
		const labelRgExp = new RegExp(label, "i");
		const button = canvas.getByRole("button", { name: labelRgExp });
		await expect(button).toBeInTheDocument();
	},
};

export const MoleculeIconOnlyButton: ButtonStory = {
	args: {
		children: "🚀",
		color: "primary",
		variant: "solid",
		size: "md",
		fullWidth: false,
		loading: false,
		iconOnly: true,
	},
};
