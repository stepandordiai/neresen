"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import linksData from "../../../assets/data/links-data.json";
import Link from "next/link";
import { handleHeaderMode } from "@/app/global/handleHeaderMode";
import "./Header.scss";

const Header = () => {
	const pathname = usePathname();

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isHeaderBlurred, setIsHeaderBlurred] = useState(false);
	const [heightPosition, setHeightPosition] = useState(0);

	useEffect(() => {
		document.addEventListener("scroll", handleHeaderMode);
	}, []);

	useEffect(() => {
		const calculateHeightPosition = () => {
			// TODO: learn this
			const pageHeight = document.documentElement.scrollHeight;
			const windowHeight = window.innerHeight;
			const scrollY = window.scrollY;
			const calcHeight = pageHeight - windowHeight;

			setHeightPosition(Math.min((scrollY * 100) / calcHeight, 100));
		};

		window.addEventListener("scroll", calculateHeightPosition);

		return () => window.removeEventListener("scroll", calculateHeightPosition);
	}, [pathname]);

	// FIXME:
	useEffect(() => {
		closeMenu();
	}, [pathname]);

	// Add blur background for header on scroll
	useEffect(() => {
		const handleHeaderOnScroll = () => setIsHeaderBlurred(window.scrollY > 0);

		window.addEventListener("scroll", handleHeaderOnScroll);

		return () => window.removeEventListener("scroll", handleHeaderOnScroll);
	}, []);

	function toggleMenu() {
		setIsMenuOpen((prev) => !prev);

		document.body.classList.toggle("body--hidden");

		document.querySelectorAll(".menu__link").forEach((link, index) => {
			setTimeout(() => {
				link.classList.toggle("menu__link--active");
			}, 100 * index);
		});

		document.querySelectorAll(".text-line-opac").forEach((link, index) => {
			setTimeout(() => {
				link.classList.toggle("text-line-opac--active");
			}, 100 * index);
		});
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
			<header className={`header ${isHeaderBlurred ? "header--blur" : ""}`}>
				<div className="header-inner">
					<Link onClick={closeMenu} href="/" className="header__logo">
						<img
							className="header__logo-icon js-logo-icon"
							src="/logo/mountain-white.png"
							alt="Neresen logo"
						/>
						<span className="header__logo-name">Neresen</span>
					</Link>
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
					<div className="custom-divider js-custom-divider">
						<span
							className="js-custom-divider-inner"
							style={{
								display: "inline-block",
								height: "1px",
								width: heightPosition + "%",
								backgroundColor: "#fff",
							}}
						></span>
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
								className="nav__link menu__link"
								onClick={closeMenu}
								href={link.path}
							>
								{link.name}
							</Link>
						) : (
							<Link
								key={link.id}
								onClick={closeMenu}
								className="nav__link menu__link"
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
			</nav>
		</>
	);
};

export default Header;
