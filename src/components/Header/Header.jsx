import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { HashLink } from "react-router-hash-link";
import logoIconWhite from "/logo/mountain-white.png";
import "./Header.scss";

const Header = () => {
	useEffect(() => {
		document.addEventListener("scroll", () => {
			if (window.scrollY > 50) {
				document.querySelector(".header").classList.add("header--blur");
			} else {
				document.querySelector(".header").classList.remove("header--blur");
			}
		});
	}, []);

	return (
		<header className="header js-header">
			<NavLink to={"/"} className="header__logo">
				<img
					className="header__logo-icon js-logo-icon"
					src={logoIconWhite}
					alt="Logo"
				/>
				<span className="header__logo-name">Neresen</span>
			</NavLink>
			<nav className="nav">
				<NavLink className={"nav__link"} to={"/"}>
					Úvod
				</NavLink>
				<HashLink className={"nav__link"} to="/#about" smooth>
					O nás
				</HashLink>
				<HashLink className={"nav__link"} to="/#projects" smooth>
					Realizace
				</HashLink>
				<HashLink className={"nav__link"} to="/#projects-map" smooth>
					Mapa
				</HashLink>
				<NavLink className={"nav__link"} to={"/contacts"}>
					Kontakty
				</NavLink>
			</nav>
			<BurgerBtn />
			<div className="custom-divider js-custom-divider"></div>
		</header>
	);
};

export default Header;
