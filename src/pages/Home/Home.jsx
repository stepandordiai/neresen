import { useEffect } from "react";
import "./Home.scss";

const Home = () => {
    // useEffect(() => {
    //     document.querySelectorAll(".text-line").forEach((el, index) => {
    //         setTimeout(() => {
    //             el.style.animation = "revealTextLine 1s forwards";
    //         }, 100 * index);
    //     });
    // }, []);

    useEffect(() => {
        document.querySelectorAll(".text-line").forEach((el, index) => {
            document.addEventListener("scroll", () => {
                const serviceRect = el.getBoundingClientRect().top;
                if (serviceRect < window.innerHeight - 100) {
                    // setTimeout(() => {
                    el.style.animation = "revealTextLine 1s forwards";
                    // }, 100 * index);
                }
            });

            // On load page

            const serviceRect = el.getBoundingClientRect().top;
            if (serviceRect < window.innerHeight - 100) {
                // setTimeout(() => {
                el.style.animation = "revealTextLine 1s forwards";
                // }, 100 * index);
            }
        });
    });

    return (
        <section className="home">
            <div className="home-wrapper">
                <div>
                    <div>
                        {`Vítejte na stránkách společnosti`
                            .split(` `)
                            .map((word, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="text-line-container"
                                    >
                                        <div className="text-line">
                                            <p
                                                className="home__secondary-title"
                                                style={{
                                                    marginRight: "5px",
                                                }}
                                            >
                                                {word}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    {/* <h1 className="home__title">Neresen a.s.</h1> */}
                    <div>
                        {`Neresen a.s.`.split(` `).map((word, index) => {
                            return (
                                <div
                                    key={index}
                                    className="text-line-container"
                                >
                                    <div className="text-line">
                                        <p
                                            className="home__title"
                                            style={{
                                                marginRight: "5px",
                                            }}
                                        >
                                            {word}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="home__btn">
                    <div className="btn-border-top"></div>
                    <div className="btn-border-right"></div>
                    <div className="btn-border-bottom"></div>
                    <div className="btn-border-left"></div>
                    Kontaktujte nás
                </div>
            </div>
            <div className="projects">
                <div className="projects__title-wrapper">
                    {`Realizované projekty`.split(` `).map((word, index) => {
                        return (
                            <div key={index} className="text-line-container">
                                <div className="text-line">
                                    <p
                                        className="projects__title"
                                        style={{
                                            marginRight: "5px",
                                        }}
                                    >
                                        {word}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="projects__title-wrapper">
                    {`Hotová stavba k pohodlnému bydlení`
                        .split(` `)
                        .map((word, index) => {
                            return (
                                <div
                                    key={index}
                                    className="text-line-container"
                                >
                                    <div className="text-line">
                                        <p
                                            className="projects__secondary-title"
                                            style={{
                                                marginRight: "5px",
                                            }}
                                        >
                                            {word}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
};

export default Home;
