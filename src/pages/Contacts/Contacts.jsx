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
            <div className="contacts">
                <PageTitle title="Contacts" hashPath={"#form-wrapper"} />
                <div className="form-wrapper" id="form-wrapper">
                    <TextLine>
                        <p className="form-title">Contact us</p>
                    </TextLine>
                    <form className="form" action="">
                        <div className="input-container">
                            <div className="label-container">
                                <label htmlFor="first-name">
                                    <TextLine>First name</TextLine>
                                </label>
                                <input type="text" id="first-name" />
                                <div className="input-border-bottom"></div>
                            </div>
                            <div className="label-container">
                                <label htmlFor="last-name">
                                    <TextLine>Last name</TextLine>
                                </label>
                                <input type="text" id="last-name" />
                                <div className="input-border-bottom"></div>
                            </div>
                        </div>
                        <div className="input-container">
                            <div className="label-container">
                                <label htmlFor="phone-number">
                                    <TextLine>Phone number</TextLine>
                                </label>
                                <input type="text" id="phone-number" />
                                <div className="input-border-bottom"></div>
                            </div>
                            <div className="label-container">
                                <label htmlFor="e-mail">
                                    <TextLine>E-mail</TextLine>
                                </label>
                                <input type="text" id="e-mail" />
                                <div className="input-border-bottom"></div>
                            </div>
                        </div>
                        <div className="label-container">
                            <label htmlFor="subject">
                                <TextLine>Subject</TextLine>
                            </label>
                            <input type="text" id="subject" />
                            <div className="input-border-bottom"></div>
                        </div>
                        <div className="label-container">
                            <label htmlFor="message">
                                <TextLine>Message</TextLine>
                            </label>
                            <textarea
                                name=""
                                id="message"
                                // cols="30"
                                // rows="10"
                            ></textarea>
                            <div className="input-border-bottom"></div>
                        </div>
                        <button className="form-btn" type="submit">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contacts;
