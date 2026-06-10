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
			<Link className="projects__link-btn" href="/projekty">
				All projects
			</Link>
		</section>
	);
};

export default Projects;
