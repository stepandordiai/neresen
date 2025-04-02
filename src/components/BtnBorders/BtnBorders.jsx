import { useEffect } from "react";
import "./BtnBorders.scss";

const BtnBorders = () => {
    useEffect(() => {
        const borderTop = document.querySelectorAll(".btn-border-top");
        const borderRight = document.querySelectorAll(".btn-border-right");
        const borderBottom = document.querySelectorAll(".btn-border-bottom");
        const borderLeft = document.querySelectorAll(".btn-border-left");

        borderTop.forEach((border, index) => {
            let borderRect = border.getBoundingClientRect().top;

            document.addEventListener("scroll", () => {
                borderRect = border.getBoundingClientRect().top;
                if (borderRect < window.innerHeight) {
                    borderTop[index].style.animation =
                        "animateBtnBorderWidth 1s forwards linear";
                    borderRight[index].style.animation =
                        "animateBtnBorderHeight 0.5s 1s forwards linear";
                    borderBottom[index].style.animation =
                        "animateBtnBorderWidth 1s 1.5s forwards linear";
                    borderLeft[index].style.animation =
                        "animateBtnBorderHeight 0.5s 2.5s forwards linear";
                }
            });

            if (borderRect < window.innerHeight) {
                borderTop[index].style.animation =
                    "animateBtnBorderWidth 1s forwards linear";
                borderRight[index].style.animation =
                    "animateBtnBorderHeight 0.5s 1s forwards linear";
                borderBottom[index].style.animation =
                    "animateBtnBorderWidth 1s 1.5s forwards linear";
                borderLeft[index].style.animation =
                    "animateBtnBorderHeight 0.5s 2.5s forwards linear";
            }
        });
    });
    return (
        <>
            <div className="btn-border-top"></div>
            <div className="btn-border-right"></div>
            <div className="btn-border-bottom"></div>
            <div className="btn-border-left"></div>
        </>
    );
};

export default BtnBorders;
