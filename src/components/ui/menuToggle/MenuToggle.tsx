import styles from "./MenuToggle.module.css";

type MenuToggleProps = {
	category: string;
	items: { name: string; price: string }[];
};

const MenuToggle = ({ category }: MenuToggleProps) => {
	return (
		<div className={styles.menuCardWrapper}>
			<div className={styles.menuCard}>
				<h3 className={styles.menuTitle}>{category}</h3>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
					className={styles.menuToggleIcon}
				>
					<path d="M5 12h14" />
					<path d="M12 5v14" />
				</svg>
			</div>
		</div>
	);
};
export default MenuToggle;
