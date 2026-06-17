import type { Metadata } from "next";
import TextLine from "../../components/TextLine/TextLine";
import Container from "../../components/Container/Container";
import CopyBtn from "../../components/CopyBtn/CopyBtn";
import ContactClient from "./ContactClient";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import { COMPANY_CODE } from "@/lib/constants";
import "./Contact.scss";

export const metadata: Metadata = {
	title: "Kontakt – Bytové domy a domovy pro seniory",
	description:
		"Kontaktujte Neresen a.s. a získejte konzultaci a cenovou nabídku zdarma. Jsme k dispozici Po-So 8:00-17:00. Napište nám nebo zavolejte.",
	alternates: {
		canonical: "/kontakt",
	},
};

export default function Contact() {
	return (
		<main className="contact">
			<Breadcrumbs links={[{ label: "Kontakt" }]} />

			<Container>
				<div className="form-wrapper" id="form-wrapper">
					<div>
						<h2 className="form__title">
							<TextLine>Kontaktní údaje</TextLine>
						</h2>
						<br />
						<p>
							<TextLine>Získejte cenovou nabídku a konzultace zdarma</TextLine>
						</p>
					</div>
					<div className="form-talk-wrapper">
						<div className="talk">
							<div>
								<p className="form__secondary-title">
									<TextLine>Telefonní číslo</TextLine>
								</p>
								<br />
								<a className="contact__link" href="tel:+420773802166">
									+420 773 802 166
								</a>
							</div>
							<div>
								<p className="form__secondary-title">
									<TextLine>E-mail</TextLine>
								</p>
								<br />
								<a className="contact__link" href="mailto:info@neresen.cz">
									info@neresen.cz
								</a>
							</div>
							<div>
								<p className="form__secondary-title">
									<TextLine>Pracovní doba</TextLine>
								</p>
								<div style={{ display: "flex", flexDirection: "column" }}>
									<p className="contact__working-hours">
										<span>
											<TextLine>Pondělí - Sobota</TextLine>
										</span>
										<span>
											<TextLine>8:00 - 17:00</TextLine>
										</span>
									</p>
									<p className="contact__working-hours">
										<span>
											<TextLine>Neděle</TextLine>
										</span>
										<span>
											<TextLine>Zavřeno</TextLine>
										</span>
									</p>
								</div>
							</div>
							<div>
								<p className="form__secondary-title">IČO</p>
								<br />
								<CopyBtn value={COMPANY_CODE} />
							</div>
						</div>
						<div className="contact__form-container">
							<h2 className="contact__form-container-title">
								<TextLine>Kontaktní formulář</TextLine>
							</h2>
							<ContactClient />
						</div>
					</div>
					<h2 className="contact__map-title">
						<TextLine>Najděte nás na mapách</TextLine>
					</h2>
					<div className="contact__map-container">
						<iframe
							className="contact__map"
							src="https://mapy.com/s/lebatonapa"
							loading="lazy"
							title="Poloha společnosti Neresen a.s. na Mapy.cz"
						></iframe>
						<iframe
							className="contact__map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.0887686657775!2d15.211735811998087!3d50.02405071785514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c15043fb28fc7%3A0x68a9030e0b172805!2sNeresen%20a.s.!5e1!3m2!1sen!2scz!4v1750057297987!5m2!1sen!2scz"
							loading="lazy"
							title="Poloha společnosti Neresen a.s. na Google Maps"
						></iframe>
					</div>
				</div>
			</Container>
		</main>
	);
}
