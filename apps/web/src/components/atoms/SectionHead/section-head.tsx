import { cn } from "@/lib/utils";
import { IconChevronRight } from "@tabler/icons-react";
import type { FC } from "react";
import styles from "./style.module.css";
import type { SectionHeadProps } from "./type";

const SectionHead: FC<SectionHeadProps> = (props) => {
	const {
		title,
		variant = "minimal",
		toSeeMore = "#",
		className,
		...divProps
	} = props;
	return (
		<div className={cn(className, styles.section_head)} {...divProps}>
			<h2
				className={cn({
					"w-full divider after:bg-toreaBay before:bg-toreaBay":
						variant === "default",
					"flex-1 divider divider-start after:bg-toreaBay before:bg-toreaBay":
						variant === "minimal",
				})}
			>
				{title}
			</h2>
			{variant === "minimal" ? (
				<a href={toSeeMore} className="btn btn-link no-underline">
					<span>Lihat Semua</span>
					<IconChevronRight className="w-6 h-6 text-toreaBay" />
				</a>
			) : null}
		</div>
	);
};

export default SectionHead;
