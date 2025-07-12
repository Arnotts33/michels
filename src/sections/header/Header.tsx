import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navRef = useRef<HTMLDivElement>(null);
	const burgerRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node;

			if (
				isMobileMenuOpen &&
				navRef.current &&
				!navRef.current.contains(target) &&
				burgerRef.current &&
				!burgerRef.current.contains(target)
			) {
				setIsMobileMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMobileMenuOpen]);

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
						ref={burgerRef}
						className={styles.burgerMenu}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label="Menu"
						aria-expanded={isMobileMenuOpen}
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
					ref={navRef}
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
