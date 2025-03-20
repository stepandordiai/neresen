import PageTitle from "../../components/PageTitle/PageTitle";
import TextLine from "../../components/TextLine/TextLine";
import ProjectSwiper from "../../components/ProjectSwiper/ProjectSwiper";
import img from "./../../assets/img/5.jpg";
import "./ProjectThree.scss";

const ProjectThree = () => {
    return (
        <>
            <PageTitle
                title={"Domov pro seniory"}
                previousLinkTitle={"Projects"}
                hashPath={"#project3"}
                image={img}
            />
            <div className="project3" id="project3">
                <ProjectSwiper projectName={"projectThree"} />
                <div className="project3-info">
                    <TextLine>
                        <p>Domov pro seniory</p>
                    </TextLine>
                    <TextLine>
                        <p>Janovice nad Úhlavou – Rozvojová zóna</p>
                    </TextLine>
                    <TextLine>
                        <p>
                            Kompletní přestavba stávajícího objektu na domov pro
                            seniory.
                        </p>
                    </TextLine>
                </div>
            </div>
        </>
    );
};

export default ProjectThree;
