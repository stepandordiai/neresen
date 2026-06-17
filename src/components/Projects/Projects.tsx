import Link from "next/link";
import TextLine from "../TextLine/TextLine";
import { Project } from "@/interfaces/project";
import "./Projects.scss";

type ProjectProps = {
	projects: Project[];
};

const Projects = ({ projects }: ProjectProps) => {
	return (
		<section className="projects js-projects" id="projekty">
			<div className="projects__title-wrapper">
				<h2 className="projects__title">
					<TextLine>Naše projekty</TextLine>
				</h2>
				<h3 className="projects__secondary-title">
					<TextLine>
						Bytové domy a domovy pro seniory – naše projekty v ČR, hotové i
						připravované pro kvalitní a pohodlné bydlení.
					</TextLine>
				</h3>
			</div>
			<div className="projects-grid">
				{[...projects].slice(0, 3).map((project) => {
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
								<p className="project-card__title">
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
							</div>
						</div>
					);
				})}
			</div>
			<Link className="projects__link-btn" href="/projekty">
				All projects
			</Link>
		</section>
	);
};

export default Projects;
