import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import TextLine from "../../components/TextLine/TextLine";
import img1 from "/assets/img/1.jpg";
import facebookIcon from "/icons/facebook-black.png";
import instagramIcon from "/icons/instagram-black.png";
import "./Contacts.scss";

const Contacts = () => {
	useEffect(() => {
		document.querySelectorAll(".input-border-bottom").forEach((el) => {
			document.addEventListener("scroll", () => {
				const textRect = el.getBoundingClientRect().top;
				if (textRect < window.innerHeight - 50) {
					el.style.animation = "animateInputBorderWidth 2s forwards";
				}
			});

			// On load page
			const textRect = el.getBoundingClientRect().top;
			if (textRect < window.innerHeight - 50) {
				el.style.animation = "animateInputBorderWidth 2s forwards";
			}
		});
	});

	return (
		<>
			<PageTitle title="Kontakty" hashPath={"#form-wrapper"} image={img1} />
			<div className="form-wrapper" id="form-wrapper">
				<div>
					<TextLine>
						<p className="form__title">Kontaktujte nás</p>
					</TextLine>
					<br />
					<TextLine>
						<p>Získejte cenovou nabídku a konzultace zdarma</p>
					</TextLine>
				</div>
				<div className="form-talk-wrapper">
					<div className="talk">
						<div>
							<TextLine>
								<p className="form__secondary-title">Telefonní číslo</p>
							</TextLine>
							<br />
							<TextLine>
								<a className="contacts__link" href="tel:+420773802166">
									+420 773 802 166
								</a>
							</TextLine>
						</div>
						<div>
							<TextLine>
								<p className="form__secondary-title">E-mail</p>
							</TextLine>
							<br />
							<TextLine>
								<a className="contacts__link" href="mailto:info@neresen.cz">
									info@neresen.cz
								</a>
							</TextLine>
						</div>

						<div>
							<TextLine>
								<p className="form__secondary-title">Sociální sítě</p>
							</TextLine>
							<div className="contacts__socials">
								<TextLine>
									<a title="Facebook" href="#" target="_blank">
										<img width={30} src={facebookIcon} alt="" />
									</a>
								</TextLine>
								<TextLine>
									<a title="Instagram" href="#" target="_blank">
										<img width={30} src={instagramIcon} alt="" />
									</a>
								</TextLine>
							</div>
						</div>
					</div>
					<form
						className="form"
						action="https://formsubmit.co/info@neresen.cz"
						method="post"
					>
						<div className="input-container">
							<div className="label-container">
								<label htmlFor="first-name">
									<TextLine>Jméno</TextLine>
								</label>
								<input
									type="text"
									id="first-name"
									name="firstName"
									autoComplete="given-name"
								/>
								<div className="input-border-bottom"></div>
							</div>
							<div className="label-container">
								<label htmlFor="last-name">
									<TextLine>Příjmení</TextLine>
								</label>
								<input
									type="text"
									id="last-name"
									name="lastName"
									autoComplete="family-name"
								/>
								<div className="input-border-bottom"></div>
							</div>
						</div>
						<div className="input-container">
							<div className="label-container">
								<label htmlFor="tel">
									<TextLine>Telefonní číslo</TextLine>
								</label>
								<input type="tel" id="tel" name="tel" autoComplete="tel" />
								<div className="input-border-bottom"></div>
							</div>
							<div className="label-container">
								<label htmlFor="email">
									<TextLine>E-mail</TextLine>
								</label>
								<input
									type="email"
									id="email"
									name="email"
									autoComplete="email"
								/>
								<div className="input-border-bottom"></div>
							</div>
						</div>
						<div className="label-container">
							<label htmlFor="subject">
								<TextLine>Předmět zprávy</TextLine>
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								autoComplete="on"
							/>
							<div className="input-border-bottom"></div>
						</div>
						<div className="label-container">
							<label htmlFor="message">
								<TextLine>Zpráva</TextLine>
							</label>
							<textarea
								name="message"
								id="message"
								autoComplete="on"
							></textarea>
							<div className="input-border-bottom"></div>
						</div>
						<button className="form__btn" type="submit">
							Odeslat
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contacts;
