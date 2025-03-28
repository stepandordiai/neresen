import TextLine from "../../components/TextLine/TextLine";
import { projectsData } from "../../data/projectsData";
import { NavLink } from "react-router-dom";
import "./Projects.scss";

const Projects = () => {
    return (
        <div className="projects js-projects" id="projects">
            <div className="projects__title-wrapper">
                <TextLine>
                    <h2 className="projects__title">Realizované projekty</h2>
                </TextLine>
                <TextLine>
                    <h3 className="projects__secondary-title">
                        Hotová stavba k pohodlnému bydlení
                    </h3>
                </TextLine>
            </div>
            <p>Filter</p>
            <div className="filter">
                <button className="filter__btn">All projects</button>
                <div className="filter__dd-wrapper">
                    <ul className="filter__dd">
                        <li className="filter__option">Domov pro seniory</li>
                        <li className="filter__option">Constructions</li>
                    </ul>
                </div>
            </div>
            <div className="projects-grid">
                {projectsData.map((project, index) => {
                    return (
                        <div key={index} className="project-card-wrapper">
                            <div className="project-card">
                                <img
                                    src={project.img[0]}
                                    alt=""
                                    loading="lazy"
                                />
                                <NavLink
                                    className="project-card-link"
                                    to={`/project-page/${project.id}`}
                                >
                                    <p>{project.name}</p>
                                </NavLink>
                            </div>
                            <TextLine>
                                <p className="project-card__title">
                                    {project.name}
                                </p>
                            </TextLine>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
