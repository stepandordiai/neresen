import { NavLink } from "react-router-dom";
import TextLine from "../../components/TextLine/TextLine";
import img1 from "./../../assets/projects-img/project1/1.jpg";
import img2 from "./../../assets/projects-img/project1/2.jpg";
import img3 from "./../../assets/projects-img/project1/3.jpg";
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
            <div className="projects" id="projects">
                <div className="projects__title-wrapper">
                    <TextLine>
                        <p className="projects__title">Realizované projekty</p>
                    </TextLine>
                </div>
                <div className="projects__title-wrapper">
                    <TextLine>
                        <p className="projects__secondary-title">
                            Hotová stavba k pohodlnému bydlení
                        </p>
                    </TextLine>
                </div>
                <div className="projects-grid">
                    <div className="project-card">
                        <img src={img1} alt="" />
                        <NavLink
                            className="project-card-bottom"
                            to={"/project-one"}
                        >
                            <p>Slatiňany</p>
                            <p>Adresa: ul.Medunova</p>
                        </NavLink>
                    </div>
                    <div className="project-card">
                        <img src={img2} alt="" />
                        <div className="project-card-bottom">
                            <p>Slatiňany</p>
                            <p>Adresa: ul.Medunova</p>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src={img3} alt="" />
                        <div className="project-card-bottom">
                            <p>Slatiňany</p>
                            <p>Adresa: ul.Medunova</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
