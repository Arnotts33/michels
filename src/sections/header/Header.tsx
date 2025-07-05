import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.innerHeader}>
				<a href="/">
					<img
						src="/assets/images/michels-logo.svg"
						alt="Bistrot Michel's Logo"
					/>
				</a>
			</div>
		</header>
	);
};
export default Header;
