import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Footer.scss";

const Footer = () => {
    const inactiveLink = "footer__nav-link";
    const activeLink = "footer__nav-link footer__nav-link--active";

    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__nav-wrapper">
                    <p className="footer__nav-title">Navigation</p>
                    <div className="footer__nav">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLink : inactiveLink
                            }
                            to={"/"}
                        >
                            Úvodní stránka
                        </NavLink>
                        <HashLink
                            className={"footer__nav-link"}
                            to="/#projects"
                            smooth
                        >
                            Realizace
                        </HashLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLink : inactiveLink
                            }
                            to="/carrera"
                        >
                            Kariéra
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLink : inactiveLink
                            }
                            to={"/contacts"}
                        >
                            Kontakty
                        </NavLink>
                    </div>
                </div>
                <div className="footer__nav-wrapper">
                    <p className="footer__nav-title">Realizace</p>
                    <div className="footer__nav">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLink : inactiveLink
                            }
                            to={"/project-one"}
                        >
                            Bytový dům
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLink : inactiveLink
                            }
                            to="/project-two"
                        >
                            Rekonstrukce
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLink : inactiveLink
                            }
                            to="/project-three"
                        >
                            Domov pro seniory
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="footer__custom-divider"></div>
            <div className="footer__bottom">
                <div className="copyright">&copy; 2025 Neresen</div>
                <div className="creator">
                    Designed and developed by{" "}
                    <a
                        className="creator__link"
                        href="https://heeeyooo-studio.netlify.app"
                        target="_blank"
                    >
                        heeeyooo.studio
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
