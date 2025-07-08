import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.innerHeader}>
				<a href="/">
					<img
						src="assets/images/michels-logo.svg"
						alt="Bistrot Michel's Logo"
					/>
				</a>
				<div className={styles.burgerMenu}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="50"
						height="50"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className={styles.open}
					>
						<path d="M4 6h16" className={styles.topLine} />
						<path d="M4 12h16" className={styles.middleLine} />
						<path d="M4 18h16" className={styles.bottomLine} />
					</svg>
				</div>
			</div>
		</header>
	);
};
export default Header;
