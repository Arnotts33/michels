import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./MenuToggle.module.css";

type MenuToggleProps = {
	category: string;
	items: { name: string; side?: string; price: string }[];
};

const MenuToggle = ({ category, items }: MenuToggleProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.menuCardWrapper}>
			<div className={styles.menuCard} onClick={() => setIsOpen(!isOpen)}>
				<h3 className={styles.menuTitle}>{category}</h3>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
					className={`${styles.menuToggleIcon} ${
						isOpen ? styles.menuToggleClose : ""
					}`}
				>
					<path d="M5 12h14" />
					<path d="M12 5v14" />
				</svg>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className={styles.menuCardContent}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
					>
						<ul>
							{items.map((item, index) => (
								<li key={index} className={styles.menuItem}>
									<h4 className={styles.dishName}>{item.name}</h4>
									<span className={styles.dots}></span>
									<p className={styles.dishPrice}>{item.price}</p>
									<p className={styles.dishSide}>{item.side}</p>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
export default MenuToggle;
