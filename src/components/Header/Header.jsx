import { NavLink } from "react-router-dom";
import logoIcon from "./../../assets/logo/mountain.png";
import "./Header.scss";

const Header = () => {
    return (
        <>
            <header className="header">
                <NavLink to={"/"} className="header__logo">
                    <img
                        className="header__logo-icon"
                        src={logoIcon}
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
