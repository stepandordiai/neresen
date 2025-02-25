import { NavLink } from "react-router-dom";
import logoIconWhite from "./../../assets/logo/mountain-white.png";
import logoIconBlack from "./../../assets/logo/mountain-black.png";
import "./Header.scss";
import { useEffect } from "react";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                document.querySelector(".header").classList.add("header--blur");
            } else {
                document
                    .querySelector(".header")
                    .classList.remove("header--blur");
            }

            //

            if (
                window.scrollY > window.innerHeight - 100 &&
                window.scrollY <
                    document.documentElement.scrollHeight -
                        (document.documentElement.clientHeight + 100)
            ) {
                document
                    .querySelector(":root")
                    .style.setProperty("--header-clr-mode", "#000");

                document.querySelector(
                    ".custom-divider"
                ).style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                document.querySelector(".header__logo-icon").src =
                    logoIconBlack;
            } else if (window.scrollY < window.innerHeight - 100) {
                document
                    .querySelector(":root")
                    .style.setProperty("--header-clr-mode", "#fff");
                document.querySelector(
                    ".custom-divider"
                ).style.backgroundColor = "rgba(255, 255, 255, 0.5)";
                document.querySelector(".header__logo-icon").src =
                    logoIconWhite;
            } else if (
                window.scrollY >
                document.documentElement.scrollHeight -
                    (document.documentElement.clientHeight + 100)
            ) {
                document
                    .querySelector(":root")
                    .style.setProperty("--header-clr-mode", "#fff");
                document.querySelector(
                    ".custom-divider"
                ).style.backgroundColor = "rgba(255, 255, 255, 0.5)";
                document.querySelector(".header__logo-icon").src =
                    logoIconWhite;
            }
        });
    });

    return (
        <>
            <header className="header">
                <NavLink to={"/"} className="header__logo">
                    <img
                        className="header__logo-icon"
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
                <div className="custom-divider"></div>
            </header>
        </>
    );
};

export default Header;
