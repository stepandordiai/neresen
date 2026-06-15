import { Metadata } from "next";
import projects from "@/data/projects.json";
import { notFound } from "next/navigation";
import Container from "@/components/Container/Container";
import ProjectSwiper from "@/components/ProjectSwiper/ProjectSwiper";
import "./ProjectPage.scss";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}): Promise<Metadata> {
	const { id } = await params;
	const project = projects.find((project) => project.id === id);

	if (!project) {
		return {
			title: `404`,
		};
	}

	return {
		title: `${project.name}`,
		description: `${project.name} – projekt společnosti Neresen a.s. Komplexní realizace bytových domů a domovů pro seniory po celé České republice. Od pozemku po klíče.`,
		alternates: {
			canonical: `/projekty/${id}`,
		},
	};
}

// TODO: learn this
export async function generateStaticParams() {
	return projects.map((project) => ({
		id: project.id,
	}));
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const project = projects.find((project) => project.id === id);

	if (!project) {
		return notFound();
	}

	const { name, details, location, accommodation, constructionDesign, img } =
		project;

	return (
		<main>
			<Container>
				<div className="project-page" id="project-page">
					<ProjectSwiper img={img} />
					<div className="project-page__info">
						<h2 className="project-page__title">{name}</h2>
						{details && <p>{details}</p>}
						{location && (
							<div>
								<h3 className="project-page__details-title">Lokalita</h3>
								<p>{location}</p>
							</div>
						)}
						{accommodation && (
							<div>
								<h3 className="project-page__details-title">Ubytování</h3>
								<p>{accommodation}</p>
							</div>
						)}
						{constructionDesign && (
							<div>
								<h3 className="project-page__details-title">
									Stavební provedení
								</h3>
								<p>{constructionDesign}</p>
							</div>
						)}
						<a className="project-page__link-btn" href="tel:+420773802166">
							Kontaktujte nás
						</a>
					</div>
				</div>
			</Container>
		</main>
	);
}
