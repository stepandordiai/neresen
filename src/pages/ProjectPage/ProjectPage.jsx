import { useParams } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import PageTitle from "../../components/PageTitle/PageTitle";
import TextLine from "../../components/TextLine/TextLine";
import ProjectSwiper from "../../components/ProjectSwiper/ProjectSwiper";
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
                hashPath={"#project-page"}
                image={project[0].img[0]}
            />
            <div className="project-page" id="project-page">
                <ProjectSwiper id={project[0].id} />
                <div className="project-page__info">
                    {/* <TextLine> */}
                    <p className="project-page__title">{project[0].name}</p>
                    {/* </TextLine> */}
                    {project[0].title && (
                        // <TextLine>
                        <p>{project[0].title}</p>
                        // </TextLine>
                    )}
                    {project[0].secTitle && (
                        // <TextLine>
                        <p>{project[0].secTitle}</p>
                        // </TextLine>
                    )}
                    {project[0].details && (
                        // <TextLine>
                        <>
                            <p>{project[0].details}</p>
                        </>

                        // </TextLine>
                    )}
                    {project[0].location && (
                        // <TextLine>
                        <div>
                            <strong>Lokalita</strong>
                            <p>{project[0].location}</p>
                        </div>
                        // </TextLine>
                    )}
                    {project[0].accommodation && (
                        // <TextLine>
                        <div>
                            <strong>Ubytování</strong>
                            <p>{project[0].accommodation}</p>
                        </div>

                        // </TextLine>
                    )}
                    {project[0].constructionDesign && (
                        // <TextLine>
                        <div>
                            <strong>Stavební provedení</strong>
                            <p>{project[0].constructionDesign}</p>
                        </div>

                        // </TextLine>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProjectPage;
