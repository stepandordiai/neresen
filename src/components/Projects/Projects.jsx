import TextLine from "../TextLine/TextLine";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import BtnBorders from "../BtnBorders/BtnBorders";
import "./Projects.scss";

const Projects = ({ data }) => {
	const [filter, setFilter] = useState("Všechny projekty");

	function handleFilter(param) {
		setFilter((current) => {
			return (current = param);
		});

		document.querySelector(".filter__btn span").textContent = param;
	}

	useEffect(() => {
		document.querySelectorAll(".filter__option").forEach((option) => {
			option.textContent == filter
				? option.classList.add("filter__option--active")
				: option.classList.remove("filter__option--active");
		});
	}, [filter]);

	return (
		<div className="projects js-projects" id="projects">
			<div className="projects__title-wrapper">
				<TextLine>
					<h2 className="projects__title">Realizované projekty</h2>
				</TextLine>
				<TextLine>
					<h3 className="projects__secondary-title">
						Hotová stavba k pohodlnému bydlení
					</h3>
				</TextLine>
			</div>

			<div className="filter">
				<button className="filter__btn">
					<span>Všechny projekty</span>
					<BtnBorders />
				</button>
				<ul className="filter__list">
					<li
						onClick={() => {
							handleFilter("Všechny projekty");
						}}
						className="filter__option"
					>
						Všechny projekty
					</li>
					<li
						onClick={() => {
							handleFilter("Domov pro seniory");
						}}
						className="filter__option"
					>
						Domov pro seniory
					</li>
					<li
						onClick={() => {
							handleFilter("Nové budovy");
						}}
						className="filter__option"
					>
						Nové budovy
					</li>
					<li
						onClick={() => {
							handleFilter("Rekonstrukce");
						}}
						className="filter__option"
					>
						Rekonstrukce
					</li>
				</ul>
			</div>
			<div className="projects-grid">
				{data
					.filter((project) => {
						if (filter == "Všechny projekty") {
							return project;
						}
						if (filter == "Domov pro seniory") {
							return project.type == "old";
						}
						if (filter == "Nové budovy") {
							return project.type == "new";
						}
						if (filter == "Rekonstrukce") {
							return project.type == "building";
						}
					})
					.map((project, index) => {
						return (
							<div key={index} className="project-card-wrapper">
								<div className="project-card">
									<img src={project.img[0]} alt="" loading="lazy" />
									<NavLink
										className="project-card-link"
										to={`/project-page/${project.id}`}
									>
										<p>{project.name}</p>
									</NavLink>
								</div>
								<TextLine>
									<p className="project-card__title">{project.name}</p>
								</TextLine>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Projects;
