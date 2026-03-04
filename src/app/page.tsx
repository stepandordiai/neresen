import Container from "./components/Container/Container";
import HomeClient from "./HomeClient";
import type { Metadata } from "next";
import "./Home.scss";

export const metadata: Metadata = {
	title: "Komplexní realizace stavebních projektů v ČR | Neresen",
	description:
		"Neresen a.s. - specialisté na výstavbu a rekonstrukce budov v ČR. Kompletní služby od návrhu po realizaci pro soukromé i veřejné projekty.",
	alternates: {
		canonical: "https://www.neresen.cz/",
	},
};

export default function Home() {
	return (
		<main className="home">
			<Container>
				<HomeClient />
			</Container>
		</main>
	);
}
