import PageTitle from "../../components/PageTitle/PageTitle";
import TextLine from "../../components/TextLine/TextLine";
import ProjectSwiper from "../../components/ProjectSwiper/ProjectSwiper";
import img from "./../../assets/img/4.jpg";
import "./ProjectTwo.scss";

const ProjectTwo = () => {
    return (
        <>
            <PageTitle
                title={"Rekonstrukce"}
                previousLinkTitle={"Projects"}
                hashPath={"#project2"}
                image={img}
            />
            <div className="project2" id="project2">
                <ProjectSwiper projectName={"projectTwo"} />
                <div className="project2-info">
                    <TextLine>
                        <p>Rekonstrukce</p>
                    </TextLine>
                    <TextLine>
                        <p>Kolín – ul. Pod Hroby</p>
                    </TextLine>
                    <TextLine>
                        <p>
                            Rekonstrukce stávajícího objektu včetně přístavby.
                        </p>
                    </TextLine>
                </div>
            </div>
        </>
    );
};

export default ProjectTwo;
