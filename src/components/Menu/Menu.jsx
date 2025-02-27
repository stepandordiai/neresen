import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import TextLine from "../TextLine/TextLine";
import "./Menu.scss";

const Menu = () => {
    const hideMenu = () => {
        // BurgerBtn

        document
            .querySelector(".burger-14")
            .classList.remove("burger-14--active");
        document
            .querySelector(".burger-14__center-line")
            .classList.remove("burger-14__center-line--active");

        // Menu

        document.querySelector(".menu").classList.remove("menu--active");

        document.body.classList.remove("body--hidden");

        document.querySelectorAll(".menu__link").forEach((link, index) => {
            setTimeout(() => {
                link.classList.remove("menu__link--active");
            }, 100 * index);
        });
    };

    const inactiveLink = "nav__link menu__link";
    const activeLink = "nav__link menu__link nav__link--active";

    return (
        <div className="menu">
            <div className="menu__nav">
                <NavLink
                    onClick={hideMenu}
                    className={({ isActive }) =>
                        isActive ? activeLink : inactiveLink
                    }
                    to={"/"}
                >
                    Úvodní stránka
                </NavLink>
                <HashLink
                    className="nav__link menu__link"
                    onClick={hideMenu}
                    to="/#projects"
                    smooth
                >
                    Realizace
                </HashLink>
                <NavLink
                    onClick={hideMenu}
                    to="/carrera"
                    className={({ isActive }) =>
                        isActive ? activeLink : inactiveLink
                    }
                >
                    Kariéra
                </NavLink>
                <NavLink
                    onClick={hideMenu}
                    className={({ isActive }) =>
                        isActive ? activeLink : inactiveLink
                    }
                    to={"/contacts"}
                >
                    Kontakty
                </NavLink>
            </div>
            <div className="menu__contacts">
                <div>
                    <p className="menu__contacts-title text-line-opac">
                        E-mail
                    </p>
                    <a
                        className="menu__contacts-link text-line-opac"
                        href="mailto:info@neresen.cz"
                    >
                        info@neresen.cz
                    </a>
                </div>
                <div>
                    <p className="menu__contacts-title text-line-opac">
                        Phone number
                    </p>
                    <a
                        className="menu__contacts-link text-line-opac"
                        href="tel:+420773802166"
                    >
                        +420 773 802 166
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Menu;
