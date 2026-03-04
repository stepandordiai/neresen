"use client";

import { useEffect } from "react";
import TextLine from "../components/TextLine/TextLine";
import "./Contact.scss";

function ContactClient() {
	// FIXME:
	useEffect(() => {
		const inputBorderBottom = document.querySelectorAll(".input-border-bottom");

		const handleBorderBottom = () => {
			inputBorderBottom.forEach((el) => {
				const htmlElement = el as HTMLElement;
				const textRect = htmlElement.getBoundingClientRect().top;
				if (textRect < window.innerHeight - 50) {
					htmlElement.style.animation = "animateInputBorderWidth 2s forwards";
				}
			});
		};

		// Initial check
		handleBorderBottom();

		document.addEventListener("scroll", handleBorderBottom);

		return () => document.removeEventListener("scroll", handleBorderBottom);
	}, []);

	return (
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
					<input type="email" id="email" name="email" autoComplete="email" />
					<div className="input-border-bottom"></div>
				</div>
			</div>
			<div className="label-container">
				<label htmlFor="subject">
					<TextLine>Předmět zprávy</TextLine>
				</label>
				<input type="text" id="subject" name="subject" autoComplete="on" />
				<div className="input-border-bottom"></div>
			</div>
			<div className="label-container">
				<label htmlFor="message">
					<TextLine>Zpráva</TextLine>
				</label>
				<textarea name="message" id="message" autoComplete="on"></textarea>
				<div className="input-border-bottom"></div>
			</div>
			<button className="form__btn" type="submit">
				Odeslat
			</button>
		</form>
	);
}

export default ContactClient;
