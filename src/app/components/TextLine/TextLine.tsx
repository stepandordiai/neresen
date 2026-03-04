"use client";

import { useEffect, useRef } from "react";
import "./TextLine.scss";

// TextLine is a component for creating animation effect for text (translating up)

type TextLineProps = {
	children: React.ReactNode;
};

const TextLine = ({ children }: TextLineProps) => {
	const textLine = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleTextLine = () => {
			if (textLine.current) {
				const textLineRect = textLine.current.getBoundingClientRect().top;
				if (textLineRect < window.innerHeight) {
					textLine.current.style.animation = "translateTextLine 1s forwards";
				}
			}
		};

		handleTextLine();

		document.addEventListener("scroll", handleTextLine);

		return () => document.removeEventListener("scroll", handleTextLine);
	}, []);

	return (
		<div className="text-line-container">
			{/* TODO: */}
			<div ref={textLine} className="text-line">
				{children}
			</div>
		</div>
	);
};

export default TextLine;
