"use client";

import { useEffect, useState } from "react";
import TextLine from "../components/TextLine/TextLine";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import ProjectsMap from "../components/ProjectsMap/ProjectsMap";
import BtnBorders from "../components/BtnBorders/BtnBorders";
import Link from "next/link";
import projects from "@/data/projects.json";
import "./Home.scss";
import ContactUs from "@/components/ContactUs/ContactUs";

const data = [
	{ title: "Karanice", time: 10000 },
	{ title: "Most", time: 8000 },
	{ title: "Dablice", time: 10000 },
];

function HomeClient() {
	const [isImgLoaded, setIsImgLoaded] = useState(false);
	const [imgIndex, setImgIndex] = useState(10);
	const [activeIndex, setActiveIndex] = useState(0);
	const [transition, setTransition] = useState(false);

	// TODO: learn this
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		// 12 % 12 = 0
	// 		setImgIndex((prev) => (prev + 1) % projects.length);
	// 	}, data[activeIndex].time);

	// 	return () => clearInterval(interval);
	// 	// for dynamic data dependency should be [projectsData.length]
	// }, []);

	// useEffect(() => {
	// 	const handleActiveProject = () => {
	// 		setActiveIndex((prev) => (prev + 1) % data.length);
	// 	};

	// 	setTransition(true);

	// 	const interval = setInterval(handleActiveProject, data[activeIndex].time);

	// 	return () => clearInterval(interval);
	// }, [activeIndex]);

	useEffect(() => {
		setTransition(true);

		const interval = setInterval(() => {
			setTransition(false); // start fade out

			setTimeout(() => {
				setActiveIndex((prev) => (prev + 1) % data.length); // change value
				setTransition(true); // fade in new value
			}, 500);
		}, data[activeIndex].time);

		return () => clearInterval(interval);
	}, [activeIndex]);

	return (
		<>
			{/* {projects[imgIndex].img[0] && (
					<img
						onLoad={() => setIsImgLoaded(true)}
						className={`home-bg-img ${
							isImgLoaded ? "home-bg-img--active" : ""
						}`}
						src={projects[imgIndex].img[0]}
						alt=""
					/>
				)} */}

			<div>
				<section className="home-hero js-home-hero">
					{/* <video className="home-bg-video" autoPlay playsInline muted loop>
						<source src="/video.mp4" />
					</video> */}
					<img
						className="home-bg-video"
						src="/projects-img/project11/01.jpg"
						alt=""
					/>
					<div>
						<h1 className="hero__heading">
							<TextLine>
								{/* <div className="home__secondary-title"> */}
								Odpovědnost. Flexibilita. Kreativita. Vaše projekty v dobrých
								rukou.
								{/* </div> */}
							</TextLine>
						</h1>
						<h2 className="hero__subheading">
							Neresen a.s. - komplexní realizace bytových domů a domovů pro
							seniory v celé České republice. Od pozemku po klíče.
						</h2>
					</div>
					<div className="home-hero__footer">
						<div
							style={{
								display: "flex",
								gap: "15px",
								alignItems: "flex-start",
							}}
						>
							<Link className="home__btn" href="/#projekty">
								Naše projekty
								{/* <BtnBorders /> */}
							</Link>
							<Link className="home__btn" href="/kontakt">
								Kontaktujte nás
								{/* <BtnBorders /> */}
							</Link>
						</div>
						{/* {projects[imgIndex].addressLink ? (
							<a
								className="home-hero__link"
								href={projects[imgIndex].addressLink}
								target="_blank"
							>
								{projects[imgIndex].address}
							</a>
						) : (
							<p style={{ color: "#fff" }}>{projects[imgIndex].inProcess}</p>
						)} */}
						<p
							className={`active-project ${transition ? "active-project--animate" : ""}`}
						>
							<span
								className={`active-project-inner ${transition ? "active-project-inner--animate" : ""}`}
							>
								{data[activeIndex].title}
							</span>
						</p>
					</div>
				</section>
				<div style={{ background: "#fff" }} className="home__bottom">
					<About />
					<ContactUs />
					<Projects projects={projects} />
					<ProjectsMap projects={projects} />
				</div>
			</div>
		</>
	);
}

export default HomeClient;
