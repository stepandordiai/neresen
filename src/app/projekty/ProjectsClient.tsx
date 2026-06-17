"use client";

import Link from "next/link";
import projects from "@/data/projects.json";
import { useEffect, useRef, useState } from "react";
import TextLine from "@/components/TextLine/TextLine";

export default function ProjectsClient() {
	const [filter, setFilter] = useState("Všechny projekty");

	const imgCardRefs = useRef<(HTMLDivElement | null)[]>([]);

	const [isInView, setIsInView] = useState(() =>
		new Array(projects.length).fill(false),
	);
	const uniqueProjectTypes = [
		...new Set(projects.map((project) => project.type)),
	];

	useEffect(() => {
		setIsInView(new Array(projects.length).fill(false));
	}, [filter]);

	useEffect(() => {
		if (!imgCardRefs.current.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = imgCardRefs.current.indexOf(
						entry.target as HTMLDivElement,
					);
					if (index !== -1 && entry.isIntersecting) {
						setIsInView((prev) => {
							if (prev[index]) return prev; // already visible, skip re-render
							const updated = [...prev];
							updated[index] = true;
							return updated;
						});
					}
				});
			},
			{ threshold: 0.5 },
		);

		imgCardRefs.current.forEach((card) => {
			if (card) observer.observe(card);
		});

		return () => observer.disconnect();
	}, [filter]);
	return (
		<>
			<div className="projects-page__filter">
				{["Všechny projekty", ...uniqueProjectTypes].map((type, index) => {
					return (
						<button
							key={index}
							onClick={() => setFilter(type)}
							className={`projects-page__filter-btn ${
								filter === type ? "projects-page__filter-btn--active" : ""
							}`}
						>
							{type}
						</button>
					);
				})}
			</div>
			<div className="project-page-list">
				{projects
					.filter((project) => {
						return filter === "Všechny projekty"
							? project
							: filter === project.type;
					})
					.map((project, index) => {
						return (
							<div
								key={project.id}
								ref={(el) => {
									imgCardRefs.current[index] = el;
								}}
								className="project-page-item"
							>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "10px",
										width: "100%",
									}}
								>
									<p className="projects-page-item__title">
										<TextLine>{project.name}</TextLine>
									</p>
									{project.address ? (
										<a
											className="project-card__desc"
											href={project.addressLink}
											target="_blank"
										>
											<TextLine>{project.address}</TextLine>
										</a>
									) : (
										<p className="project-card__desc">{project.inProcess}</p>
									)}
									<Link
										className="projects-page-item__link"
										href={`/projekty/${project.id}`}
									>
										Zobrazit projekt
									</Link>
								</div>
								<div
									className={`projects-page-item__img-wrapper ${isInView[index] ? "projects-page-item__img-wrapper--active" : ""}`}
								>
									<img
										className={`projects-page-item__img ${isInView[index] ? "projects-page-item__img--active" : ""}`}
										src={project.img[0]}
										alt={project.name}
										loading="lazy"
									/>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
}
