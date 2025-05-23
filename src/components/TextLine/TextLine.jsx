import { useEffect } from "react";
import "./TextLine.scss";

// TextLine is a component for creating animation effect for text (translating up)

const TextLine = (props) => {
	useEffect(() => {
		document.querySelectorAll(".text-line").forEach((el) => {
			document.addEventListener("scroll", () => {
				const elementRect = el.getBoundingClientRect().top;
				if (elementRect < window.innerHeight) {
					el.style.animation = "translateTextLine 1s forwards";
				}
			});

			const elementRect = el.getBoundingClientRect().top;
			if (elementRect < window.innerHeight) {
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
