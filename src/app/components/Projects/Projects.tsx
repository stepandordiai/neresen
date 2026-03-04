"use client";

import Link from "next/link";
import { useState } from "react";
import TextLine from "../TextLine/TextLine";
import BtnBorders from "../BtnBorders/BtnBorders";
import { Project } from "@/app/interfaces/project";
import "./Projects.scss";

type ProjectProps = {
	projects: Project[];
};

const Projects = ({ projects }: ProjectProps) => {
	const [filter, setFilter] = useState("all");

	const uniqueProjectTypes = [
		...new Set(projects.map((project) => project.type)),
	];

	return (
		<section className="projects js-projects" id="projekty">
			<div className="projects__title-wrapper">
				<TextLine>
					<h2 className="projects__title">Naše projekty</h2>
				</TextLine>
				<TextLine>
					<h3 className="projects__secondary-title">
						Bytové domy a domovy pro seniory – naše projekty v ČR, hotové i
						připravované pro kvalitní a pohodlné bydlení.
					</h3>
				</TextLine>
			</div>

			<div className="filter">
				<button className="filter__btn">
					<span>{filter === "all" ? "Všechny projekty" : filter}</span>
					<BtnBorders />
				</button>
				<ul className="filter__list">
					<li
						onClick={() => setFilter("all")}
						className={`filter__option ${
							filter === "all" ? "filter__option--active" : ""
						}`}
					>
						Všechny projekty
					</li>
					{uniqueProjectTypes.map((type, index) => {
						return (
							<li
								key={index}
								onClick={() => setFilter(type)}
								className={`filter__option ${
									filter === type ? "filter__option--active" : ""
								}`}
							>
								{type}
							</li>
						);
					})}
				</ul>
			</div>
			<div className="projects-grid">
				{projects
					.filter((project) => {
						return filter === "all" ? project : filter === project.type;
					})
					.map((project) => {
						return (
							<div key={project.id} className="project-card-wrapper">
								<div className="project-card">
									<img src={project.img[0]} alt={project.name} loading="lazy" />
									<Link
										className="project-card__link"
										href={`/projekty/${project.id}`}
									>
										{project.name}
									</Link>
								</div>
								<div style={{ display: "flex", flexDirection: "column" }}>
									<TextLine>
										<p className="project-card__title">{project.name}</p>
									</TextLine>
									{project.address ? (
										<TextLine>
											<a
												className="project-card__desc"
												href={project.addressLink}
												target="_blank"
											>
												{project.address}
											</a>
										</TextLine>
									) : (
										<TextLine>
											<p className="project-card__desc">{project.inProcess}</p>
										</TextLine>
									)}
								</div>
							</div>
						);
					})}
			</div>
		</section>
	);
};

export default Projects;
