import { useEffect } from "react";
import "./TextLine.scss";

// TextLine is a component for creating animation effect for text (translating up)

const TextLine = (props) => {
    useEffect(() => {
        // FIXME: text-line or text-line-container

        document.querySelectorAll(".text-line").forEach((el) => {
            document.addEventListener("scroll", () => {
                const serviceRect = el.getBoundingClientRect().top;
                if (serviceRect < window.innerHeight - 100) {
                    el.style.animation = "translateTextLine 1s forwards";
                }
            });

            // Animate on load page

            const serviceRect = el.getBoundingClientRect().top;
            if (serviceRect < window.innerHeight - 100) {
                el.style.animation = "translateTextLine 1s forwards";
            }
        });
    });

    return (
        <div className="text-line-container">
            <div className="text-line">{props.children}</div>
        </div>
    );
};

export default TextLine;
