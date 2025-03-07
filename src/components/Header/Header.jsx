import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { HashLink } from "react-router-hash-link";
import logoIconWhite from "./../../assets/logo/mountain-white.png";
import logoIconBlack from "./../../assets/logo/mountain-black.png";
import "./Header.scss";

const Header = () => {
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const homeWrapperRect = document
                .querySelector(".js-home-wrapper")
                .getBoundingClientRect();
            const projectsRect = document
                .querySelector(".js-projects")
                .getBoundingClientRect();
            const footerRect = document
                .querySelector(".js-footer")
                .getBoundingClientRect();
            const rootElement = document.querySelector(":root");
            const customDivider = document.querySelector(".js-custom-divider");
            const logoIcon = document.querySelector(".js-logo-icon");

            if (window.scrollY > 50) {
                document.querySelector(".header").classList.add("header--blur");
            } else {
                document
                    .querySelector(".header")
                    .classList.remove("header--blur");
            }

            //  45 is half of header's height

            if (homeWrapperRect.top <= 45 && homeWrapperRect.bottom >= 45) {
                rootElement.style.setProperty("--scroll-clr", "#fff");
                rootElement.style.setProperty("--scroll-bg-clr", "#000");
                customDivider.style.backgroundColor =
                    "rgba(255, 255, 255, 0.5)";
                logoIcon.src = logoIconWhite;
            } else if (projectsRect.top <= 45 && projectsRect.bottom >= 45) {
                rootElement.style.setProperty("--scroll-clr", "#fff");
                rootElement.style.setProperty("--scroll-bg-clr", "#000");
                customDivider.style.backgroundColor =
                    "rgba(255, 255, 255, 0.5)";
                logoIcon.src = logoIconWhite;
            } else if (footerRect.top <= 45 && footerRect.bottom >= 45) {
                rootElement.style.setProperty("--scroll-clr", "#fff");
                rootElement.style.setProperty("--scroll-bg-clr", "#000");
                customDivider.style.backgroundColor =
                    "rgba(255, 255, 255, 0.5)";
                logoIcon.src = logoIconWhite;
            } else {
                rootElement.style.setProperty("--scroll-clr", "#000");
                rootElement.style.setProperty("--scroll-bg-clr", "#fff");
                customDivider.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                logoIcon.src = logoIconBlack;
            }
        });
    });

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
                    Úvodní stránka
                </NavLink>
                <HashLink className={"nav__link"} to="/#projects" smooth>
                    Realizace
                </HashLink>
                <NavLink className={"nav__link"}>Kariéra</NavLink>
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
