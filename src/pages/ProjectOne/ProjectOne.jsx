import PageTitle from "../../components/PageTitle/PageTitle";
import TextLine from "../../components/TextLine/TextLine";
import ProjectSwiper from "../../components/ProjectSwiper/ProjectSwiper";
// import img2 from "./../../assets/2.jpg";
import img from "./../../assets/img/2.jpg";
import "./ProjectOne.scss";

const ProjectOne = () => {
    return (
        <>
            <PageTitle
                title={"Bytový dům"}
                previousLinkTitle={"Projects"}
                hashPath={"#project1"}
                image={img}
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
