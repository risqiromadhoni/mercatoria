import { IconDots } from "@tabler/icons-react";
import type { FC } from "react";
import styles from "./style.module.css";
import type { CategoryProps } from "./type";

const Category: FC<CategoryProps> = (props) => {
	const { items, variant = "minimal" } = props;
	return (
		<div className={styles.categories}>
			{items.map((item) => (
				<div key={item.title} className={styles.card}>
					<div className={styles.card_img}>
						<img src={item.image} alt={item.title} />
					</div>
					<div className={styles.card_label}>{item.title}</div>
				</div>
			))}
			{variant === "minimal" ? (
				<div className={styles.card}>
					<div className={styles.card_img}>
						<IconDots />
					</div>
					<div className={styles.card_label}>Lihat Semua</div>
				</div>
			) : null}
		</div>
	);
};

export default Category;
