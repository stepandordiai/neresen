import { useEffect } from "react";
import "./TextLine.scss";

// TextLine is a component for creating animation effect for text (translating up)

const TextLine = (props) => {
    useEffect(() => {
        // FIXME: text-line or text-line-container

        document.querySelectorAll(".text-line").forEach((el) => {
            document.addEventListener("scroll", () => {
                const serviceRect = el.getBoundingClientRect().top;
                if (serviceRect < window.innerHeight) {
                    el.style.animation = "translateTextLine 1s forwards";
                }
            });

            const serviceRect = el.getBoundingClientRect().top;
            if (serviceRect < window.innerHeight) {
                el.style.animation = "translateTextLine 1s forwards";
            }

            // Animate on load page
            // const myImg = document.querySelectorAll(".js-img");

            // myImg.forEach((image) => {
            //     image.style.opacity = 0;
            //     image.style.transition = "all 0.5s";
            //     if (image) {
            //         image.addEventListener("load", () => {
            //             image.style.opacity = 1;
            //             image.style.transition = "all 0.5s";
            //         });
            //     }
            // });

            // const serviceRect = el.getBoundingClientRect().top;
            // if (serviceRect < window.innerHeight - 75) {
            //     el.style.animation = "translateTextLine 1s forwards";
            // }
        });
    });

    return (
        <div className="text-line-container">
            <div className="text-line">{props.children}</div>
        </div>
    );
};

export default TextLine;
