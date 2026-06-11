import Link from "next/link";
import "./styles.scss";

export default function ContactUs() {
	return (
		<section className="contact-us">
			<p className="contact-us__title">Máte projekt? Pojďme ho realizovat.</p>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "0.5rem",
					alignItems: "center",
					width: "100%",
				}}
			>
				<p style={{ textAlign: "center", fontSize: "1.125rem" }}>
					Kontaktujte nás pro nezávaznou konzultaci.
					<br />
					Odpovíme do 24 hodin.
				</p>
				<Link className="contact-us__link-btn" href="/kontakt">
					Nezávazná konzultace
				</Link>
			</div>
		</section>
	);
}
