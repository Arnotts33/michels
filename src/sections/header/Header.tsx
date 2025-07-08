import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.nav
							className={styles.navBar}
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
						>
							<ul
								className={styles.navList}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<li>
									<a href="/">Accueil</a>
								</li>
								<li>
									<a href="#about">Le Michel's</a>
								</li>
								<li>
									<a href="#menu">La Carte</a>
								</li>
								<li>
									<a
										href="https://maps.app.goo.gl/GshxztFuF14FQgDn7"
										target="_blank"
										className={styles.linkButton}
									>
										Venir Chez Nous
									</a>
								</li>
							</ul>
						</motion.nav>
					)}
				</AnimatePresence>
			</div>
		</header>
	);
};
export default Header;
