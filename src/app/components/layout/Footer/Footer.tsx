import workingHoursData from "../../../assets/data/working-hours-data.json";
import linksData from "../../../assets/data/links-data.json";
import React from "react";
import Link from "next/link";
import TextLine from "../../TextLine/TextLine";
import CopyBtn from "../../CopyBtn/CopyBtn";
import projectsData from "@/app/assets/data/projects.json";
import "./Footer.scss";

// TODO: learn this
const today = (new Date().getDay() + 6) % 7;

interface Project {
	id: string;
	name: string;
	details: string;
	seoDesc: string;
	location: string;
	accomodation?: string;
	constructionDesign: string;
	img: string[];
	type: string;
	position?: {
		lat: number;
		lon: number;
	};
	address?: string;
	addressLink?: string;
	inProcess?: boolean;
}

const Footer = () => {
	return (
		<footer className="footer js-footer">
			<div className="footer-inner">
				<div className="footer__top">
					<div className="footer__working-hours-wrapper">
						<div className="footer__nav-title">
							<TextLine>Pracovní doba</TextLine>
						</div>
						<div
							style={{ display: "flex", flexDirection: "column", gap: "7.5px" }}
						>
							{workingHoursData.map((day, i) => {
								return (
									<React.Fragment key={i}>
										<TextLine>
											<div
												className={`footer__working-hours ${today === i ? "footer__working-hours--active" : ""}`.trim()}
											>
												<p>{day.name}</p>
												<p>{day.hours}</p>
											</div>
										</TextLine>
									</React.Fragment>
								);
							})}
						</div>
					</div>
					<div>
						<div className="footer__nav-title">
							<TextLine>Navigace</TextLine>
						</div>
						<div className="footer__nav">
							{linksData.map((link) => {
								return link.path.includes("#") ? (
									<Link
										key={link.id}
										className="footer__nav-link"
										href={link.path}
									>
										<TextLine>{link.name}</TextLine>
									</Link>
								) : (
									<Link
										key={link.id}
										className="footer__nav-link"
										href={link.path}
									>
										<TextLine>{link.name}</TextLine>
									</Link>
								);
							})}
						</div>
					</div>
					<div>
						<div className="footer__nav-title">
							<TextLine>Naše projekty</TextLine>
						</div>
						<div className="footer__nav">
							{projectsData.map(({ name, id }) => {
								return (
									<Link
										key={id}
										className="footer__nav-link"
										href={`/projekty/${id}`}
									>
										<TextLine>{name}</TextLine>
									</Link>
								);
							})}
						</div>
					</div>
					<div className="footer-top__container">
						<div>
							<div className="footer__nav-title">
								<TextLine>Kontaktní údaje</TextLine>
							</div>
							<div className="footer__nav">
								<TextLine>
									<a className="footer__nav-link" href="tel:+420773802166">
										+420 773 802 166
									</a>
								</TextLine>
								<TextLine>
									<a className="footer__nav-link" href="mailto:info@neresen.cz">
										info@neresen.cz
									</a>
								</TextLine>
							</div>
						</div>
					</div>
					<div className="footer-top__container">
						<div>
							<div className="footer__nav-title">
								<TextLine>Neresen a.s.</TextLine>
							</div>
							<div className="footer__nav">
								<Link className="footer__nav-link" href="/gdpr">
									<TextLine>Osobní údaje</TextLine>
								</Link>
							</div>
						</div>
						<div>
							<div className="footer__nav-title">
								<TextLine>IČO</TextLine>
							</div>
							<TextLine>
								<CopyBtn txt="01458965" />
							</TextLine>
						</div>
					</div>
				</div>
				<div className="footer__custom-divider"></div>
				<div className="footer__bottom">
					<TextLine>
						<p>
							&copy; 2025&ndash;{new Date().getFullYear()} Neresen a.s. Všechna
							práva vyhrazena.
						</p>
					</TextLine>
					<TextLine>
						<p>
							Website created by{" "}
							<a
								className="creator__link"
								href="https://www.heeeyooo.studio/"
								target="_blank"
							>
								heeeyooo studio
							</a>
						</p>
					</TextLine>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
