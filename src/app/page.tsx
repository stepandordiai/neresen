import type { Metadata } from "next";
import Container from "../components/Container/Container";
import TextLine from "../components/TextLine/TextLine";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import ProjectsMap from "../components/ProjectsMap/ProjectsMap";
import Link from "next/link";
import projects from "@/data/projects.json";
import ContactUs from "@/components/ContactUs/ContactUs";
import "./Home.scss";

export const metadata: Metadata = {
	title: "Komplexní realizace stavebních projektů v ČR",
	description:
		"Neresen a.s. - specialisté na výstavbu a rekonstrukce budov v ČR. Kompletní služby od návrhu po realizaci pro soukromé i veřejné projekty.",
	alternates: {
		canonical: "/",
	},
};

export default function Home() {
	return (
		<main className="home">
			<Container>
				<section className="home-hero js-home-hero">
					<video className="home-bg-video" autoPlay playsInline muted loop>
						<source src="/hero-c.mp4" />
					</video>
					<h1 className="hero__heading">
						<TextLine>
							Odpovědnost. Flexibilita. Kreativita. Vaše projekty v dobrých
							rukou.
						</TextLine>
					</h1>
					<p className="hero__subheading">
						<TextLine>
							Neresen a.s. - komplexní realizace bytových domů a domovů pro
							seniory v celé České republice. Od pozemku po klíče.
						</TextLine>
					</p>
					<div
						style={{
							display: "flex",
							gap: "0.5rem",
							flexWrap: "wrap",
						}}
					>
						<Link className="hero__link primary-link" href="/#projekty">
							Naše projekty
						</Link>
						<Link className="hero__link secondary-link" href="/kontakt">
							Kontaktujte nás
						</Link>
					</div>
				</section>
				<div style={{ background: "#fff" }} className="home__bottom">
					<About />
					<ContactUs />
					<Projects projects={projects} />
					<ProjectsMap projects={projects} />
				</div>
			</Container>
		</main>
	);
}
