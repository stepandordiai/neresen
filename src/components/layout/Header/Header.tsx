"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import linksData from "@/data/links-data.json";
import Link from "next/link";
import "./Header.scss";

const Header = () => {
	const pathname = usePathname();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// FIXME:
	useEffect(() => {
		closeMenu();
	}, [pathname]);

	function toggleMenu() {
		setIsMenuOpen((prev) => !prev);

		document.body.classList.toggle("body--hidden");
	}

	// menu
	const closeMenu = () => {
		setIsMenuOpen(false);

		document.body.classList.remove("body--hidden");

		document.querySelectorAll(".menu__link").forEach((link, index) => {
			setTimeout(() => {
				link.classList.remove("menu__link--active");
			}, 100 * index);
		});

		document.querySelectorAll(".text-line-opac").forEach((link, index) => {
			setTimeout(() => {
				link.classList.remove("text-line-opac--active");
			}, 100 * index);
		});
	};

	// Close menu on Esc
	useEffect(() => {
		const closeMenuOnEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				closeMenu();
			}
		};

		document.addEventListener("keydown", closeMenuOnEsc);

		return () => document.removeEventListener("keydown", closeMenuOnEsc);
	}, []);

	return (
		<>
			<header className="header">
				<div className="header-inner">
					<Link onClick={closeMenu} href="/" className="header__logo">
						<img
							className="header__logo-icon js-logo-icon"
							src="/logo/mountain-black.png"
							alt="Neresen logo"
						/>
						<span className="header__logo-name">Neresen</span>
					</Link>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							gap: "0.75rem",
						}}
					>
						<nav className="nav">
							{linksData.map((link) => {
								return link.path.includes("#") ? (
									<Link key={link.id} className="nav__link" href={link.path}>
										{link.name}
									</Link>
								) : (
									<Link key={link.id} className="nav__link" href={link.path}>
										{link.name}
									</Link>
								);
							})}
						</nav>
						<Link href="/kontakt" className="header__link">
							Kontaktujte nas
						</Link>
						{/* burger btn */}
						<button
							onClick={toggleMenu}
							className={`burger-btn ${isMenuOpen ? "burger-btn--active" : ""}`}
							aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"}
							aria-controls="menu"
							aria-expanded={isMenuOpen}
						>
							<span
								className={`burger-btn__center-line ${
									isMenuOpen ? "burger-btn__center-line--active" : ""
								}`}
							></span>
						</button>
					</div>
				</div>
			</header>
			{/* menu */}
			<nav
				className={`menu ${isMenuOpen ? "menu--active" : ""}`}
				id="menu"
				hidden={!isMenuOpen}
			>
				<div className="menu__nav">
					{linksData.map((link) => {
						return link.path.includes("#") ? (
							<Link
								key={link.id}
								className="nav__link menu-nav__link"
								onClick={closeMenu}
								href={link.path}
							>
								{link.name}
							</Link>
						) : (
							<Link
								key={link.id}
								onClick={closeMenu}
								className="nav__link menu-nav__link"
								href={link.path}
							>
								{link.name}
							</Link>
						);
					})}
				</div>

				<div className="menu__contacts">
					<div>
						<p className="menu__contacts-title text-line-opac">E-mail</p>
						<a
							className="menu__contacts-link text-line-opac"
							href="mailto:info@neresen.cz"
						>
							info@neresen.cz
						</a>
					</div>
					<div>
						<p className="menu__contacts-title text-line-opac">
							Telefonní číslo
						</p>
						<a
							className="menu__contacts-link text-line-opac"
							href="tel:+420773802166"
						>
							+420 773 802 166
						</a>
					</div>
				</div>
				<Link href="/kontakt" className="menu__link">
					Kontaktujte nas
				</Link>
			</nav>
		</>
	);
};

export default Header;
