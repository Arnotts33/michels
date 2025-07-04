import Image from "astro/components/Image.astro";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div>
				<a href="/">
					<img
						src="/src/assets/images/logo/michels-logo.svg"
						alt="Bistrot Michel's Logo"
					/>
				</a>
			</div>
		</header>
	);
};
export default Header;
