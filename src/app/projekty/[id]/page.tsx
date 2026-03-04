import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import ProjectSwiper from "../../components/ProjectSwiper/ProjectSwiper";
import { notFound } from "next/navigation";
import projects from "@/app/assets/data/projects-data.json";
import { Metadata } from "next";
import "./ProjectPage.scss";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}): Promise<Metadata> {
	const baseUrl = "https://www.neresen.cz";
	const { id } = await params;
	const project = projects.find((project) => project.id === id);

	if (!project) {
		return {
			title: `404`,
			description: "",
		};
	}

	return {
		title: `${project.name} | Neresen`,
		description: project.seoDesc,
		alternates: {
			canonical: `${baseUrl}/projekty/${id}`,
		},
	};
}

// TODO: learn this
export async function generateStaticParams() {
	return projects.map((product) => ({
		id: product.id,
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

	const {
		name,
		details,
		seoDesc,
		location,
		accommodation,
		constructionDesign,
		img,
		address,
		addressLink,
		inProcess,
	} = project;

	return (
		<>
			{/* <Helmet>
				<meta name="description" content={seoDesc} />
				<title>{name} | Neresen</title>
				<link
					rel="canonical"
					href={`https://www.neresen.cz/project-page/${id}`}
				/>
			</Helmet> */}
			<main>
				<Container>
					<PageTitle
						title={name}
						previousLinkTitle="Realizace"
						hashPath="#project-page"
						image={img[0]}
						address={address}
						addressLink={addressLink}
						inProcess={inProcess}
					/>
					<div className="project-page" id="project-page">
						<ProjectSwiper img={img} />
						<div className="project-page__info">
							<p className="project-page__title">{name}</p>
							{details && <p>{details}</p>}
							{location && (
								<div>
									<span>Lokalita</span>
									<p>{location}</p>
								</div>
							)}
							{accommodation && (
								<div>
									<span>Ubytování</span>
									<p>{accommodation}</p>
								</div>
							)}
							{constructionDesign && (
								<div>
									<span>Stavební provedení</span>
									<p>{constructionDesign}</p>
								</div>
							)}
							<a className="project-page__link" href="tel:+420773802166">
								Kontaktujte nás
							</a>
						</div>
					</div>
				</Container>
			</main>
		</>
	);
}
