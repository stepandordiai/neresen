import members from "@/data/members.json";
import "./styles.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "O nás | Neresen a.s. – Bytové domy a domovy pro seniory",
	description:
		"Jsme Neresen a.s. – od roku 2013 realizujeme bytové domy a domovy pro seniory po celé České republice. Stavíme s odpovědností, flexibilitou a důrazem na kvalitu.",
	alternates: {
		canonical: "/o-nas",
	},
};

export default function AboutUs() {
	return (
		<main className="about-us">
			<h1 className="main__title">O společnosti Neresen a.s.</h1>
			<p className="main__desc">
				Stavíme víc než budovy. Vytváříme místa, kde lidé žijí a jsou o ně
				pečováno.
			</p>
			<section className="section">
				<h2 className="section__title">Naše mise</h2>
				<p style={{ maxWidth: "1000px", marginLeft: "auto" }}>
					Věříme, že kvalitní bydlení a péče o seniory jsou základní potřeby
					každého člověka. Proto každý projekt, který realizujeme, přistupujeme
					s respektem — k místu, k budoucím obyvatelům, k životnímu prostředí.
					Naší misí není jen postavit budovu. Je to vytvořit prostor, který bude
					sloužit lidem desítky let — funkčně, esteticky a bezpečně. Tři hodnoty
					definují vše, co děláme: Odpovědnost — ke klientům, k termínům, ke
					kvalitě. Slovo dané je pro nás závazek. Flexibilita — každý projekt je
					jiný. Umíme se přizpůsobit požadavkům, situaci na trhu i neočekávaným
					výzvám. Kreativita — hledáme nejlepší řešení, ne to nejjednodušší. Ať
					jde o architektonický návrh nebo způsob financování projektu. Od roku
					2013 jsme dokázali, že tyto hodnoty a úspěšná realizace nejsou v
					rozporu. A to je základ důvěry, na které stavíme naše vztahy s
					klienty, investory i partnery.
				</p>
			</section>
			<section className="section">
				<h2 className="section__title">Náš tým</h2>
				<p className="section__desc">
					Za každým úspěšným projektem stojí profesionální tým odborníků.
				</p>
				<div className="our-team-grid">
					{members.map((m, i) => {
						return (
							<div key={i}>
								<div
									style={{ aspectRatio: "1/1", background: "rgba(0,0,0, 0.1)" }}
								></div>
								<p>{m.name}</p>
								<p style={{ color: "hsl(0, 0%, 50%)" }}>{m.position}</p>
							</div>
						);
					})}
				</div>
			</section>
			<section className="section">
				<h2 className="section__title">Naše milníky</h2>
				<div className="milestones-container">
					<div className="milestone">
						<p>2013</p>
						<p>Založení společnosti Neresen a.s. Start s jasnou vizí.</p>
					</div>
					<div className="milestone">
						<p>2015</p>
						<p>První úspěšně dokončené projekty bytových domů.</p>
					</div>
					<div className="milestone">
						<p>2017</p>
						<p>Vstup do segmentu domovů pro seniory.</p>
					</div>
					<div className="milestone">
						<p>2019</p>
						<p>Expanze do celé České republiky. 20+ projektů.</p>
					</div>
					<div className="milestone">
						<p>2021</p>
						<p>Přes 30 realizovaných projektů. Více než 70 000 m².</p>
					</div>
					<div className="milestone">
						<p>2023</p>
						<p>40+ projektů. Celková plocha překračuje 100 000 m².</p>
					</div>
					<div className="milestone">
						<p>2025</p>
						<p>27 projektů v aktivní realizaci. Stále rosteme.</p>
					</div>
					<div className="milestone"></div>
					<div className="milestone"></div>
				</div>
			</section>
		</main>
	);
}
