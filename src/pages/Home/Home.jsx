import { NavLink } from "react-router-dom";
import TextLine from "../../components/TextLine/TextLine";
import img1 from "./../../assets/projects-img/project1/1.jpg";
import img2 from "./../../assets/projects-img/project2/1.jpg";
import img3 from "./../../assets/projects-img/project3/1.jpg";
import "./Home.scss";

const Home = () => {
    return (
        <section className="home">
            <div className="home-wrapper">
                <div>
                    <TextLine>
                        <p className="home__secondary-title">
                            Vítejte na stránkách společnosti
                        </p>
                    </TextLine>
                    <TextLine>
                        <p className="home__title">Neresen a.s.</p>
                    </TextLine>
                </div>
                <NavLink className="home__btn" to={"/contacts"}>
                    <div className="btn-border-top"></div>
                    <div className="btn-border-right"></div>
                    <div className="btn-border-bottom"></div>
                    <div className="btn-border-left"></div>
                    Kontaktujte nás
                </NavLink>
            </div>
            <div className="home__bottom">
                <div className="about-us">
                    <TextLine>
                        <h2 className="about-us__title">About Neresen a.s.</h2>
                    </TextLine>
                    <div className="about-us__details">
                        <TextLine>
                            <p>
                                Firma Neresen a.s. byla založena v roce 2013.
                                Společnost
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                realizuje kompletní projekty od vyhledávání
                                vhodného pozemku,
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                přes proces jeho přípravy, získání stavebních
                                povolení až po
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                realizaci stavby a samotný prodej. Umíme
                                pracovat v soukromém i
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                veřejném sektoru. Působíme v celé České
                                republice.
                            </p>
                        </TextLine>
                    </div>
                </div>
                <div className="projects" id="projects">
                    <div className="projects__title-wrapper">
                        <TextLine>
                            <p className="projects__title">
                                Realizované projekty
                            </p>
                        </TextLine>
                        <TextLine>
                            <p className="projects__secondary-title">
                                Hotová stavba k pohodlnému bydlení
                            </p>
                        </TextLine>
                    </div>
                    <div className="projects-grid">
                        <div className="project-card-wrapper">
                            <div className="project-card">
                                <img src={img1} alt="" />
                                <NavLink
                                    className="project-card-bottom"
                                    to={"/project-one"}
                                >
                                    <p>Bytový dům</p>
                                </NavLink>
                            </div>
                            <TextLine>
                                <p className="project-card__title">
                                    Bytový dům
                                </p>
                            </TextLine>
                        </div>
                        <div className="project-card-wrapper">
                            <div className="project-card">
                                <img src={img2} alt="" />
                                <NavLink
                                    className="project-card-bottom"
                                    to={"/project-two"}
                                >
                                    <p>Rekonstrukce</p>
                                </NavLink>
                            </div>
                            <TextLine>
                                <p className="project-card__title">
                                    Rekonstrukce
                                </p>
                            </TextLine>
                        </div>
                        <div className="project-card-wrapper">
                            <div className="project-card">
                                <img src={img3} alt="" />
                                <NavLink
                                    className="project-card-bottom"
                                    to={"/project-three"}
                                >
                                    <p>Domov pro seniory</p>
                                </NavLink>
                            </div>
                            <TextLine>
                                <p className="project-card__title">
                                    Domov pro seniory
                                </p>
                            </TextLine>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
