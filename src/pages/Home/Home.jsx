import { NavLink } from "react-router-dom";
import TextLine from "../../components/TextLine/TextLine";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ProjectsMap from "../ProjectsMap/ProjectsMap";
import "./Home.scss";

const Home = () => {
    return (
        <section className="home">
            <div className="home-wrapper js-home-wrapper">
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
                <About />
                <Projects />
                <ProjectsMap />
            </div>
        </section>
    );
};

export default Home;
