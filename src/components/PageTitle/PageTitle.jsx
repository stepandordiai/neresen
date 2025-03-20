import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import TextLine from "../TextLine/TextLine";
// import img1 from "./../../assets/img/1.jpg";
// import img2 from "./../../assets/img/2.jpg";
// import img3 from "./../../assets/img/3.jpg";
// import img4 from "./../../assets/img/4.jpg";
// import img5 from "./../../assets/img/5.jpg";
import "./PageTitle.scss";

const PageTitle = ({ title, hashPath, previousLinkTitle, image }) => {
    return (
        <>
            <div className="page-title js-page-title">
                <img
                    className="page-title-bg"
                    src={image}
                    alt=""
                    loading="lazy"
                />
                <TextLine>
                    <h3 className="title">{title}</h3>
                </TextLine>
                <TextLine>
                    <NavLink className={"link-title"} to={"/"}>
                        Home
                    </NavLink>
                    {previousLinkTitle && (
                        <>
                            <span> | </span>
                            <HashLink
                                className="link-title"
                                to={"/#projects"}
                                smooth
                            >
                                {previousLinkTitle}
                            </HashLink>
                        </>
                    )}

                    <span> | </span>
                    <span>{title}</span>
                </TextLine>

                <HashLink className="page-title__btn" to={hashPath} smooth>
                    <div className="btn-border-top"></div>
                    <div className="btn-border-right"></div>
                    <div className="btn-border-bottom"></div>
                    <div className="btn-border-left"></div>
                    Read more
                </HashLink>
            </div>
        </>
    );
};

export default PageTitle;
