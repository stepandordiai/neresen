import TextLine from "../components/TextLine/TextLine";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import ProjectsMap from "../components/ProjectsMap/ProjectsMap";
import Link from "next/link";
import projects from "@/data/projects.json";
import ContactUs from "@/components/ContactUs/ContactUs";

export default function HomeClient() {
	return (
		<div>
			<section className="home-hero js-home-hero">
				<video className="home-bg-video" autoPlay playsInline muted loop>
					<source src="/hero.mp4" />
				</video>

				<div>
					<h1 className="hero__heading">
						<TextLine>
							Odpovědnost. Flexibilita. Kreativita. Vaše projekty v dobrých
							rukou.
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
						</Link>
						<Link className="home__btn" href="/kontakt">
							Kontaktujte nás
						</Link>
					</div>
				</div>
			</section>
			<div style={{ background: "#fff" }} className="home__bottom">
				<About />
				<ContactUs />
				<Projects projects={projects} />
				<ProjectsMap projects={projects} />
			</div>
		</div>
	);
}
