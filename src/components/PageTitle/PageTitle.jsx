import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import TextLine from "../TextLine/TextLine";
import "./PageTitle.scss";

const PageTitle = ({ title, hashPath, previousLinkTitle, image }) => {
    function revealImg() {
        document
            .querySelector(".page-title-bg-img")
            .classList.add("page-title-bg-img--active");
    }
    return (
        <>
            <div className="page-title-bg-img-wrapper">
                <img
                    onLoad={revealImg}
                    className="page-title-bg-img"
                    src={image}
                    alt=""
                    loading="lazy"
                />
            </div>
            <div className="page-title js-page-title">
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
