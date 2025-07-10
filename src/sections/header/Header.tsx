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

					<div
						className={styles.burgerMenu}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
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

				<nav
					className={`${styles.navBar} ${isMobileMenuOpen ? styles.open : ""}`}
				>
					<ul className={styles.navList}>
						<li>
							<a href="/" onClick={() => setIsMobileMenuOpen(false)}>
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
