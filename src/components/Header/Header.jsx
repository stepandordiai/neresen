import { NavLink } from "react-router-dom";
import logoIconWhite from "./../../assets/logo/mountain-white.png";
import logoIconBlack from "./../../assets/logo/mountain-black.png";
import "./Header.scss";
import { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (
                window.scrollY > window.innerHeight - 100 &&
                window.scrollY <
                    document.documentElement.scrollHeight -
                        (document.documentElement.clientHeight + 100)
            ) {
                document.querySelector(".header__logo-name").style.color =
                    "black";
                document.querySelector(
                    ".custom-divider"
                ).style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                document.querySelector(".header__logo-icon").src =
                    logoIconBlack;
            } else if (window.scrollY < window.innerHeight - 100) {
                document.querySelector(".header__logo-name").style.color =
                    "white";
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
                document.querySelector(".header__logo-name").style.color =
                    "white";
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
                <div className="custom-divider"></div>
            </header>
        </>
    );
};

export default Header;
