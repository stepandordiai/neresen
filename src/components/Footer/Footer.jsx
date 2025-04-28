import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { projectsData } from "../../data/projectsData";
import TextLine from "../TextLine/TextLine";
import facebookIcon from "/icons/facebook.png";
import instagramIcon from "/icons/instagram.png";
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
						<HashLink className={"footer__nav-link"} to="/#projects" smooth>
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
						{projectsData.map(({ name, id }, index) => {
							return (
								<NavLink
									key={index}
									className={({ isActive }) =>
										isActive ? activeLink : inactiveLink
									}
									to={`/project-page/${id}`}
								>
									<TextLine>{name}</TextLine>
								</NavLink>
							);
						})}
					</div>
				</div>
				<div className="footer-top__container">
					<div>
						<div className="footer__nav-title">
							<TextLine>Kontakty</TextLine>
						</div>
						<div className="footer__nav">
							<a className="footer__nav-link" href="tel:+420773802166">
								+420 773 802 166
							</a>
							<a className="footer__nav-link" href="mailto:info@neresen.cz">
								info@neresen.cz
							</a>
						</div>
					</div>
					<div>
						<div className="footer__nav-title">
							<TextLine>Sociální sítě</TextLine>
						</div>
						<div className="footer__nav-socials">
							<a
								href="https://www.facebook.com/profile.php?id=61575622597789&mibextid=wwXIfr&rdid=Fudc2wWAiGqfWI1d&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AWJjQUX1G%2F%3Fmibextid%3DwwXIfr#"
								target="_blank"
							>
								<img width={30} src={facebookIcon} alt="" />
							</a>
							<a
								href="https://www.facebook.com/profile.php?id=61575622597789&mibextid=wwXIfr&rdid=Fudc2wWAiGqfWI1d&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AWJjQUX1G%2F%3Fmibextid%3DwwXIfr#"
								target="_blank"
							>
								<img width={30} src={instagramIcon} alt="" />
							</a>
						</div>
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
