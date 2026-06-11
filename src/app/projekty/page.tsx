import TextLine from "@/components/TextLine/TextLine";
import ProjectsClient from "./ProjectsClient";
import { Metadata } from "next";
import "./styles.scss";

export const metadata: Metadata = {
	title: "",
	description: "",
	alternates: {
		canonical: "/projekty",
	},
};

export default function Projects() {
	return (
		<div>
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
