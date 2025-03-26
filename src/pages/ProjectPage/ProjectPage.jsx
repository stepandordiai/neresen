import { useParams } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import PageTitle from "../../components/PageTitle/PageTitle";
import TextLine from "../../components/TextLine/TextLine";
import ProjectSwiper from "../../components/ProjectSwiper/ProjectSwiper";
import img from "./../../assets/img/2.jpg";
import "./ProjectPage.scss";

const ProjectPage = () => {
    const { id } = useParams();

    const project = projectsData.filter((project) => {
        return id == project.id;
    });

    return (
        <>
            <PageTitle
                title={project[0].name}
                previousLinkTitle={"Projects"}
                hashPath={"#project1"}
                image={project[0].img[0]}
            />
            <div className="project1" id="project1">
                <ProjectSwiper projectName={project[0].projectName} />
                <div className="project1-info">
                    <TextLine>
                        <p>{project[0].name}</p>
                    </TextLine>
                    {project[0].title && (
                        <TextLine>
                            <p>{project[0].title}</p>
                        </TextLine>
                    )}
                    {project[0].secTitle && (
                        <TextLine>
                            <p>{project[0].secTitle}</p>
                        </TextLine>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProjectPage;
