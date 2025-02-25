import { useEffect } from "react";
import "./Contacts.scss";
import PageTitle from "../../components/PageTitle/PageTitle";

const Contacts = () => {
    useEffect(() => {
        document.querySelectorAll(".text-line").forEach((el) => {
            document.addEventListener("scroll", () => {
                const serviceRect = el.getBoundingClientRect().top;
                if (serviceRect < window.innerHeight - 100) {
                    el.style.animation = "revealTextLine 1s forwards";
                }
            });

            // On load page

            const serviceRect = el.getBoundingClientRect().top;
            if (serviceRect < window.innerHeight - 100) {
                el.style.animation = "revealTextLine 1s forwards";
            }
        });

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
                    <div>
                        <div className="text-line-container">
                            <div className="text-line">
                                <div
                                    style={{
                                        fontSize: "3rem",
                                    }}
                                >
                                    Contact us
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="form" action="">
                        <div className="input-container">
                            <div className="label-container">
                                <label htmlFor="first-name">
                                    <div className="text-line-container">
                                        <div className="text-line">
                                            <p>First name</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="text" id="first-name" />
                                <div className="input-border-bottom"></div>
                            </div>
                            <div className="label-container">
                                <label htmlFor="last-name">
                                    <div className="text-line-container">
                                        <div className="text-line">
                                            <p>Last name</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="text" id="last-name" />
                                <div className="input-border-bottom"></div>
                            </div>
                        </div>
                        <div className="input-container">
                            <div className="label-container">
                                <label htmlFor="phone-number">
                                    <div className="text-line-container">
                                        <div className="text-line">
                                            <p>Phone number</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="text" id="phone-number" />
                                <div className="input-border-bottom"></div>
                            </div>
                            <div className="label-container">
                                <label htmlFor="e-mail">
                                    <div className="text-line-container">
                                        <div className="text-line">
                                            <p>E-mail</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="text" id="e-mail" />
                                <div className="input-border-bottom"></div>
                            </div>
                        </div>
                        <div className="label-container">
                            <label htmlFor="subject">
                                <div className="text-line-container">
                                    <div className="text-line">
                                        <p>Subject</p>
                                    </div>
                                </div>
                            </label>
                            <input type="text" id="subject" />
                            <div className="input-border-bottom"></div>
                        </div>
                        <div className="label-container">
                            <label htmlFor="message">
                                <div className="text-line-container">
                                    <div className="text-line">
                                        <p>Message</p>
                                    </div>
                                </div>
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
