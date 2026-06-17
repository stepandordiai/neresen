import TextLine from "@/components/TextLine/TextLine";
import ProjectsClient from "./ProjectsClient";
import { Metadata } from "next";
import "./styles.scss";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";

export const metadata: Metadata = {
	title: "Projekty – Bytové domy a domovy pro seniory",
	description:
		"Prohlédněte si realizované projekty Neresen a.s. – bytové domy a domovy pro seniory po celé České republice. Komplexní výstavba od pozemku po klíče.",
	alternates: {
		canonical: "/projekty",
	},
};

export default function Projects() {
	return (
		<div>
			<Breadcrumbs links={[{ label: "Projekty" }]} />
			<main className="projects-page">
				<section className="section" style={{ background: "#fff" }}>
					<div className="projects__title-wrapper">
						<TextLine>
							<h2 className="projects__title">Naše projekty</h2>
						</TextLine>
						<TextLine>
							<p className="projects__secondary-title">
								Bytové domy a domovy pro seniory realizované po celé České
								republice.
							</p>
						</TextLine>
					</div>
					<ProjectsClient />
				</section>
			</main>
		</div>
	);
}
