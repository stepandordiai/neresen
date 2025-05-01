import { useParams } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import axios from "axios";
// import { projectsData } from "../../data/projectsData";
import PageTitle from "../../components/PageTitle/PageTitle";
import TextLine from "../../components/TextLine/TextLine";
import ProjectSwiper from "../../components/ProjectSwiper/ProjectSwiper";
import "./ProjectPage.scss";
import { getData } from "../../api/getData";
import { handleHeaderMode } from "../../global/handleHeaderMode";
import LoadingData from "../../components/LoadingData/LoadingData";

const ProjectPage = () => {
	const [loading, setLoading] = useState(true);

	const [data, setData] = useState([]);

	const loadData = async () => {
		try {
			const result = await getData();
			setData(result);
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		loadData();
	}, []);

	useEffect(() => {
		handleHeaderMode();
	}, [loading]);

	const { id } = useParams();

	// console.log(id);

	const project = data.filter((project) => {
		return Number(id) == project.id;
	});

	// Show loading message
	if (loading) return <LoadingData />;

	return (
		<>
			<PageTitle
				title={project[0].name}
				previousLinkTitle={"Projects"}
				hashPath={"#project-page"}
				image={project[0].img[0]}
			/>

			<div className="project-page" id="project-page">
				<ProjectSwiper id={project[0].id} img={project[0].img} />
				<div className="project-page__info">
					<TextLine>
						<p className="project-page__title">{project[0].name}</p>
					</TextLine>
					{project[0].title && (
						<TextLine>
							<p>{project[0].title}</p>
						</TextLine>
					)}
					{project[0].secTitle && (
						<TextLine>
							<p>{project[0].secTitle}</p>
						</TextLine>
					)}
					<div>
						{project[0].details && (
							<>
								{project[0].details.split(" ").map((word, index) => {
									return (
										<React.Fragment key={index}>
											<TextLine>{word}</TextLine>
											<span> </span>
										</React.Fragment>
									);
								})}
							</>
						)}
					</div>

					{project[0].location && (
						<div>
							<TextLine>
								<strong>Lokalita</strong>
							</TextLine>
							<br />
							{project[0].location.split(" ").map((word, index) => {
								return (
									<React.Fragment key={index}>
										<TextLine>{word}</TextLine>
										<span> </span>
									</React.Fragment>
								);
							})}
						</div>
					)}
					{project[0].accommodation && (
						<div>
							<TextLine>
								<strong>Ubytování</strong>
							</TextLine>
							<br />
							{project[0].accommodation.split(" ").map((word, index) => {
								return (
									<React.Fragment key={index}>
										<TextLine>{word}</TextLine>
										<span> </span>
									</React.Fragment>
								);
							})}
						</div>
					)}
					{project[0].constructionDesign && (
						<div>
							<TextLine>
								<strong>Stavební provedení</strong>
							</TextLine>
							<br />
							{project[0].constructionDesign.split(" ").map((word, index) => {
								return (
									<React.Fragment key={index}>
										<TextLine>{word}</TextLine>
										<span> </span>
									</React.Fragment>
								);
							})}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default ProjectPage;
