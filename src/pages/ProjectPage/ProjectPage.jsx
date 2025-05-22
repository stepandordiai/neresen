import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import ProjectSwiper from "../../components/ProjectSwiper/ProjectSwiper";
import "./ProjectPage.scss";

const ProjectPage = ({ projectsData }) => {
	const { id } = useParams();

	const project = projectsData.filter((project) => project.id == id);

	const {
		name,
		img,
		title,
		secTitle,
		details,
		location,
		accommodation,
		constructionDesign,
	} = project[0];

	return (
		<>
			<Helmet>
				<title>Neresen | {name}</title>
				<link rel="canonical" href={`https://neresen.cz/project-page/${id}`} />
			</Helmet>
			<PageTitle
				title={name}
				previousLinkTitle={"Realizace"}
				hashPath={"#project-page"}
				image={img[0]}
			/>

			<div className="project-page" id="project-page">
				<ProjectSwiper img={img} />
				<div className="project-page__info">
					<p className="project-page__title">{name}</p>
					{title && <p>{title}</p>}
					{secTitle && <p>{secTitle}</p>}
					{details && <p>{details}</p>}
					{location && (
						<div>
							<strong>Lokalita</strong>
							<p>{location}</p>
						</div>
					)}
					{accommodation && (
						<div>
							<strong>Ubytování</strong>
							<p>{accommodation}</p>
						</div>
					)}
					{constructionDesign && (
						<div>
							<strong>Stavební provedení</strong>
							<p>{constructionDesign}</p>
						</div>
					)}
					<a className="project-page__link" href="tel:+420773802166">
						Kontaktujte nás
					</a>
				</div>
			</div>
		</>
	);
};

export default ProjectPage;
