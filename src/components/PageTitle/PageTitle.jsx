import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import "./PageTitle.scss";
import TextLine from "../TextLine/TextLine";

const PageTitle = ({ title, hashPath, previousLinkTitle }) => {
    return (
        <>
            <div className="page-title">
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
