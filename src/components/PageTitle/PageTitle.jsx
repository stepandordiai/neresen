import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import "./PageTitle.scss";

const PageTitle = ({ title, hashPath, previousTitle }) => {
    return (
        <>
            <div className="page-title">
                <div className="text-line-container">
                    <div className="text-line">
                        <p
                            style={{
                                fontSize: "6rem",
                            }}
                        >
                            {title}
                        </p>
                    </div>
                </div>
                <div className="text-line-container">
                    <div className="text-line">
                        <NavLink style={{ color: "white" }} to={"/"}>
                            Home
                        </NavLink>
                        {previousTitle && (
                            <>
                                <span style={{ opacity: 0.5 }}> | </span>
                                <HashLink
                                    style={{ color: "white" }}
                                    to={"/#projects"}
                                    smooth
                                >
                                    {previousTitle}
                                </HashLink>
                            </>
                        )}

                        <span style={{ opacity: 0.5 }}> | </span>
                        <span style={{ opacity: 0.5 }}>{title}</span>
                    </div>
                </div>
                <HashLink className="home__btn" to={hashPath} smooth>
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
