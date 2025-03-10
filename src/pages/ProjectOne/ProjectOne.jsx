import PageTitle from "../../components/PageTitle/PageTitle";
import TextLine from "../../components/TextLine/TextLine";
import ProjectSwiper from "../../components/ProjectSwiper/ProjectSwiper";
import "./ProjectOne.scss";

const ProjectOne = () => {
    return (
        <>
            <PageTitle
                title={"Bytový dům"}
                previousLinkTitle={"Projects"}
                hashPath={"#project1"}
            />
            <div className="project1" id="project1">
                <ProjectSwiper projectName={"projectOne"} />
                <div className="project1-info">
                    <TextLine>
                        <p>Bytový dům</p>
                    </TextLine>
                    <TextLine>
                        <p>Slatiňany – ul.Medunova</p>
                    </TextLine>
                    <TextLine>
                        <p>Výstavba bytových domů.</p>
                    </TextLine>
                </div>
            </div>
        </>
    );
};

export default ProjectOne;
