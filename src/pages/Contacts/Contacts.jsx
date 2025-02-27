import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import TextLine from "../../components/TextLine/TextLine";
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
            <PageTitle title="Contacts" hashPath={"#form-wrapper"} />
            <div className="form-wrapper" id="form-wrapper">
                <div>
                    <TextLine>
                        <p className="form__title">Contact us</p>
                    </TextLine>
                    <TextLine>
                        <p>Získejte cenovou nabídku a konzultace zdarma</p>
                    </TextLine>
                </div>
                <div className="form-talk-wrapper">
                    <div className="talk">
                        <div>
                            <TextLine>
                                <p className="form__secondary-title">E-mail</p>
                            </TextLine>
                            <TextLine>
                                <a
                                    className="contacts__link"
                                    href="mailto:info@neresen.cz"
                                >
                                    info@neresen.cz
                                </a>
                            </TextLine>
                        </div>
                        <div>
                            <TextLine>
                                <p className="form__secondary-title">
                                    Phone number
                                </p>
                            </TextLine>
                            <TextLine>
                                <a
                                    className="contacts__link"
                                    href="tel:+420773802166"
                                >
                                    +420 773 802 166
                                </a>
                            </TextLine>
                        </div>
                    </div>
                    <form
                        className="form"
                        action="mailto:stepandordiai@gmail.com"
                        method="post"
                        encType="text/plain"
                    >
                        <div className="input-container">
                            <div className="label-container">
                                <label htmlFor="first-name">
                                    <TextLine>Jméno</TextLine>
                                </label>
                                <input
                                    type="text"
                                    id="first-name"
                                    name="First name"
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
                                    name="Last name"
                                />
                                <div className="input-border-bottom"></div>
                            </div>
                        </div>
                        <div className="input-container">
                            <div className="label-container">
                                <label htmlFor="phone-number">
                                    <TextLine>Telefonní číslo</TextLine>
                                </label>
                                <input
                                    type="tel"
                                    id="phone-number"
                                    name="Phone number"
                                />
                                <div className="input-border-bottom"></div>
                            </div>
                            <div className="label-container">
                                <label htmlFor="e-mail">
                                    <TextLine>E-mail</TextLine>
                                </label>
                                <input type="email" id="e-mail" name="E-mail" />
                                <div className="input-border-bottom"></div>
                            </div>
                        </div>
                        <div className="label-container">
                            <label htmlFor="subject">
                                <TextLine>Předmět zprávy</TextLine>
                            </label>
                            <input type="text" id="subject" name="Subject" />
                            <div className="input-border-bottom"></div>
                        </div>
                        <div className="label-container">
                            <label htmlFor="message">
                                <TextLine>Zpráva</TextLine>
                            </label>
                            <textarea name="Message" id="message"></textarea>
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
