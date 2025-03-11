import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import TextLine from "../TextLine/TextLine";
import "./Footer.scss";

const Footer = () => {
    const inactiveLink = "footer__nav-link";
    const activeLink = "footer__nav-link footer__nav-link--active";

    return (
        <footer className="footer js-footer">
            <div className="footer__top">
                <div>
                    <div className="footer__nav-title">
                        <TextLine>Navigation</TextLine>
                    </div>
                    <div className="footer__nav">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLink : inactiveLink
                            }
                            to={"/"}
                        >
                            <TextLine>Úvodní stránka</TextLine>
                        </NavLink>
                        <HashLink
                            className={"footer__nav-link"}
                            to="/#projects"
                            smooth
                        >
                            <TextLine>Realizace</TextLine>
                        </HashLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLink : inactiveLink
                            }
                            to="/carrera"
                        >
                            <TextLine>Kariéra</TextLine>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLink : inactiveLink
                            }
                            to={"/contacts"}
                        >
                            <TextLine>Kontakty</TextLine>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <div className="footer__nav-title">
                        <TextLine>Realizace</TextLine>
                    </div>
                    <div className="footer__nav">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLink : inactiveLink
                            }
                            to={"/project-one"}
                        >
                            <TextLine>Bytový dům</TextLine>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLink : inactiveLink
                            }
                            to="/project-two"
                        >
                            <TextLine>Rekonstrukce</TextLine>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLink : inactiveLink
                            }
                            to="/project-three"
                        >
                            <TextLine>Domov pro seniory</TextLine>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="footer__custom-divider"></div>
            <div className="footer__bottom">
                <TextLine>
                    <p>&copy; 2025 Neresen</p>
                </TextLine>
                <TextLine>
                    <p>
                        <span>Site by </span>
                        <a
                            className="creator__link"
                            href="https://heeeyooo-studio.netlify.app"
                            target="_blank"
                        >
                            heeeyooo.studio
                        </a>
                    </p>
                </TextLine>
            </div>
        </footer>
    );
};

export default Footer;
