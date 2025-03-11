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
                        <img src={projectImages[0][0]} alt="" />
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
                        <img src={projectImages[1][0]} alt="" />
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
                        <img src={projectImages[2][0]} alt="" />
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
            </div>
        </div>
    );
};

export default Projects;
