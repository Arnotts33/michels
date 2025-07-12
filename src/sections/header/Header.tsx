import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.css";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className={styles.header}>
			<div className={styles.innerHeader}>
				<div className={styles.headerTop}>
					<div className={styles.logoContainer}>
						<a href="/">
							<img
								src="assets/images/michels-logo.svg"
								alt="Bistrot Michel's Logo"
							/>
						</a>
					</div>

					<button
						className={styles.burgerMenu}
						aria-label="Menu"
						aria-expanded={isMobileMenuOpen}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						<svg
							className={`${styles.burgerIcon} ${
								isMobileMenuOpen ? styles.open : ""
							}`}
							viewBox="0 0 100 100"
						>
							<rect className={styles.topLine} />
							<rect className={styles.middleLine} />
							<rect className={styles.bottomLine} />
						</svg>
					</button>
				</div>

				<nav
					className={`${styles.navBar} ${isMobileMenuOpen ? styles.open : ""}`}
				>
					<ul className={styles.navList}>
						<li>
							<a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
								Accueil
							</a>
						</li>
						<li>
							<a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
								Le Michel's
							</a>
						</li>
						<li>
							<a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>
								La Carte
							</a>
						</li>
						<li>
							<a
								href="https://maps.app.goo.gl/GshxztFuF14FQgDn7"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.linkButton}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Venir Chez Nous
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
