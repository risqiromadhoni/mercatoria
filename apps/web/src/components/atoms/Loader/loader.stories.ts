import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, within } from "@storybook/test";
import Loader from "./loader";

const meta = {
	title: "Components/Atoms/Loader",
	component: Loader,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: { onClick: fn() },
} satisfies Meta<typeof Loader>;

export default meta;
type LoaderStory = StoryObj<typeof meta>;

export const MoleculeLoader: LoaderStory = {
	args: {
		size: "sm",
		color: "primary",
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const title = canvas.getByTitle(/Loader/);
		await expect(title).toBeInTheDocument();
		const svg = canvas.getByTestId("loader");
		await expect(svg).toBeInTheDocument();
		await expect(svg).toHaveClass("animate-spin");
		const circle = canvas.getByTestId("loader-circle");
		await expect(circle).toBeInTheDocument();
		const path = canvas.getByTestId("loader-path");
		await expect(path).toBeInTheDocument();
	},
};
