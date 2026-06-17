"use client";

import { useEffect, useRef } from "react";
import "./TextLine.scss";

type TextLineProps = {
	children: string;
};

const TextLine = ({ children }: TextLineProps) => {
	const containerRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const handleTextLine = () => {
			if (containerRef.current) {
				const top = containerRef.current.getBoundingClientRect().top;
				if (top < window.innerHeight) {
					containerRef.current
						.querySelectorAll<HTMLElement>(".text-line__word")
						.forEach((word, i) => {
							word.style.animation = `translateTextLine 1s ${i * 0.05}s forwards`;
						});
				}
			}
		};

		handleTextLine();
		document.addEventListener("scroll", handleTextLine);
		return () => document.removeEventListener("scroll", handleTextLine);
	}, []);

	const words = children.split(" ");

	return (
		<span ref={containerRef} className="text-line-container">
			{words.map((word, i) => (
				<span key={i} className="text-line__word-wrapper">
					<span className="text-line__word">{word}</span>
				</span>
			))}
		</span>
	);
};

export default TextLine;
