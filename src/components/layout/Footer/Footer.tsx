import workingHours from "@/data/working-hours.json";
import linksData from "@/data/links-data.json";
import { Fragment } from "react";
import Link from "next/link";
import TextLine from "@/components/TextLine/TextLine";
import CopyBtn from "@/components/CopyBtn/CopyBtn";
import "./Footer.scss";

// TODO: learn this
const MONDAY_DATE = new Date(2024, 0, 1);
const getWeekday = (index: number) => {
	const date = new Date(MONDAY_DATE);
	date.setDate(MONDAY_DATE.getDate() + index);
	return new Intl.DateTimeFormat("cs-CZ", { weekday: "long" }).format(date);
};
const today = (new Date().getDay() + 6) % 7;

const Footer = () => {
	return (
		<footer className="footer js-footer">
			<div className="grid-item">
				<div className="footer-logo">
					<img src="/logo/mountain-black.png" width={50} alt="" />
					<span>Neresen</span>
				</div>
				<p style={{ marginTop: "10px" }}>
					Komplexní realizace bytových domů a domovů pro seniory v celé České
					republice. Od pozemku po klíče.
				</p>
			</div>
			<div className="footer__working-hours-wrapper grid-item">
				<div className="footer__nav-title">
					<p>
						<TextLine>Pracovní doba</TextLine>
					</p>
				</div>
				<div style={{ display: "flex", flexDirection: "column", gap: "7.5px" }}>
					{workingHours.map((h, i) => {
						return (
							<Fragment key={i}>
								<div
									className={`footer__working-hours ${today === i ? "footer__working-hours--active" : ""}`.trim()}
								>
									<span>{getWeekday(i)}</span>
									<span>{h}</span>
								</div>
							</Fragment>
						);
					})}
				</div>
			</div>
			<div className="grid-item">
				<div className="footer__nav-title">
					<TextLine>Navigace</TextLine>
				</div>
				<div className="footer__nav">
					{linksData.map((link) => {
						return link.path.includes("#") ? (
							<Link key={link.id} className="footer__nav-link" href={link.path}>
								<TextLine>{link.name}</TextLine>
							</Link>
						) : (
							<Link key={link.id} className="footer__nav-link" href={link.path}>
								<TextLine>{link.name}</TextLine>
							</Link>
						);
					})}
				</div>
			</div>
			<div className="footer-top__container grid-item">
				<div>
					<div className="footer__nav-title">
						<TextLine>Kontaktní údaje</TextLine>
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
			</div>
			<div className="footer__nav grid-item">
				<Link className="footer__nav-link" href="/gdpr">
					<TextLine>Osobní údaje</TextLine>
				</Link>
			</div>
			<div className="footer-top__container grid-item">
				<div>
					<div className="footer__nav-title">
						<TextLine>Neresen a.s.</TextLine>
					</div>
				</div>
				<div>
					<div className="footer__nav-title">
						<TextLine>IČO</TextLine>
					</div>
					<CopyBtn txt="01458965" />
				</div>
			</div>
			{/* <div className="footer__custom-divider"></div> */}
			<div className="grid-item">
				<p>&copy; 2025&ndash;{new Date().getFullYear()} Neresen a.s.</p>
				<p>Všechna práva vyhrazena.</p>
			</div>
			<div className="grid-item">
				<p>
					Website created by{" "}
					<a
						className="creator__link"
						href="https://www.heeeyooo.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						heeeyooo studio
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
