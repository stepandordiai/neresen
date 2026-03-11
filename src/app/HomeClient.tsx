"use client";

import { useEffect, useState } from "react";
import TextLine from "./components/TextLine/TextLine";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ProjectsMap from "./components/ProjectsMap/ProjectsMap";
import BtnBorders from "./components/BtnBorders/BtnBorders";
import Link from "next/link";
import projects from "@/app/assets/data/projects.json";
import "./Home.scss";

function HomeClient() {
	const [isImgLoaded, setIsImgLoaded] = useState(false);
	const [imgIndex, setImgIndex] = useState(10);

	// TODO: learn this
	useEffect(() => {
		const interval = setInterval(() => {
			// 12 % 12 = 0
			setImgIndex((prev) => (prev + 1) % projects.length);
		}, 6000);

		return () => clearInterval(interval);
		// for dynamic data dependency should be [projectsData.length]
	}, []);
	return (
		<>
			<div className="home-bg-img-wrapper">
				{projects[imgIndex].img[0] && (
					<img
						onLoad={() => setIsImgLoaded(true)}
						className={`home-bg-img ${
							isImgLoaded ? "home-bg-img--active" : ""
						}`}
						src={projects[imgIndex].img[0]}
						alt=""
					/>
				)}
			</div>
			<div>
				<section className="home-hero js-home-hero">
					<div>
						<h1 style={{ display: "flex", flexDirection: "column" }}>
							<TextLine>
								<div className="home__secondary-title">
									Vítejte na stránkách společnosti
								</div>
							</TextLine>
							<TextLine>
								<div className="home__title">Neresen a.s.</div>
							</TextLine>
						</h1>
					</div>
					<div className="home-hero__footer">
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: 15,
								alignItems: "flex-start",
							}}
						>
							<Link className="home__btn" href="/#projekty">
								Prohlédnout naše projekty
								<BtnBorders />
							</Link>
							<Link className="home__btn" href="/kontakt">
								Kontaktujte nás
								<BtnBorders />
							</Link>
						</div>
						{projects[imgIndex].addressLink ? (
							<a
								className="home-hero__link"
								href={projects[imgIndex].addressLink}
								target="_blank"
							>
								{projects[imgIndex].address}
							</a>
						) : (
							<p style={{ color: "#fff" }}>{projects[imgIndex].inProcess}</p>
						)}
					</div>
				</section>
				<div className="home__bottom">
					<About />
					<Projects projects={projects} />
					<ProjectsMap projects={projects} />
				</div>
			</div>
		</>
	);
}

export default HomeClient;
