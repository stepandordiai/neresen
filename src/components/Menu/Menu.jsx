import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
    };

    const inactiveLink = "nav__link";
    const activeLink = "nav__link nav__link--active";

    return (
        <div className="menu">
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
                className="nav__link"
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
    );
};

export default Menu;
