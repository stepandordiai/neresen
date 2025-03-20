import TextLine from "../../components/TextLine/TextLine";
import { projectsData } from "../../data/projectsData";
import { NavLink } from "react-router-dom";
import "./Projects.scss";

const Projects = () => {
    const projectImages = projectsData.map((project) => {
        return project.img;
    });

    return (
        <div className="projects js-projects" id="projects">
            <div className="projects__title-wrapper">
                <TextLine>
                    <p className="projects__title">Realizované projekty</p>
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
                        <img src={projectImages[0][0]} alt="" loading="lazy" />
                        <NavLink
                            className="project-card-link"
                            to={"/project-one"}
                        >
                            <p>Bytový dům</p>
                        </NavLink>
                    </div>
                    <TextLine>
                        <p className="project-card__title">Bytový dům</p>
                    </TextLine>
                </div>
                <div className="project-card-wrapper">
                    <div className="project-card">
                        <img src={projectImages[1][0]} alt="" loading="lazy" />
                        <NavLink
                            className="project-card-link"
                            to={"/project-two"}
                        >
                            <p>Rekonstrukce</p>
                        </NavLink>
                    </div>
                    <TextLine>
                        <p className="project-card__title">Rekonstrukce</p>
                    </TextLine>
                </div>
                <div className="project-card-wrapper">
                    <div className="project-card">
                        <img src={projectImages[2][0]} alt="" loading="lazy" />
                        <NavLink
                            className="project-card-link"
                            to={"/project-three"}
                        >
                            <p>Domov pro seniory</p>
                        </NavLink>
                    </div>
                    <TextLine>
                        <p className="project-card__title">Domov pro seniory</p>
                    </TextLine>
                </div>
                <div className="project-card-wrapper">
                    <div className="project-card">
                        <img src={projectImages[3][0]} alt="" loading="lazy" />
                        <NavLink
                            className="project-card-link"
                            to={"/project-four"}
                        >
                            <p>Holice</p>
                        </NavLink>
                    </div>
                    <TextLine>
                        <p className="project-card__title">Holice</p>
                    </TextLine>
                </div>
                <div className="project-card-wrapper">
                    <div className="project-card">
                        <img src={projectImages[4][0]} alt="" loading="lazy" />
                        <NavLink
                            className="project-card-link"
                            to={"/project-five"}
                        >
                            <p>Vizovice</p>
                        </NavLink>
                    </div>
                    <TextLine>
                        <p className="project-card__title">Vizovice</p>
                    </TextLine>
                </div>
                <div className="project-card-wrapper">
                    <div className="project-card">
                        <img src={projectImages[5][0]} alt="" loading="lazy" />
                        <NavLink
                            className="project-card-link"
                            to={"/project-six"}
                        >
                            <p>Mlekovice</p>
                        </NavLink>
                    </div>
                    <TextLine>
                        <p className="project-card__title">Mlekovice</p>
                    </TextLine>
                </div>
                <div className="project-card-wrapper">
                    <div className="project-card">
                        <img src={projectImages[6][0]} alt="" loading="lazy" />
                        <NavLink
                            className="project-card-link"
                            to={"/project-seven"}
                        >
                            <p>Chrudim</p>
                        </NavLink>
                    </div>
                    <TextLine>
                        <p className="project-card__title">Chrudim</p>
                    </TextLine>
                </div>
                <div className="project-card-wrapper">
                    <div className="project-card">
                        <img src={projectImages[7][0]} alt="" loading="lazy" />
                        <NavLink
                            className="project-card-link"
                            to={"/project-eight"}
                        >
                            <p>Lázně Bohdaneč</p>
                        </NavLink>
                    </div>
                    <TextLine>
                        <p className="project-card__title">Lázně Bohdaneč</p>
                    </TextLine>
                </div>
            </div>
        </div>
    );
};

export default Projects;
