import members from "@/data/members.json";
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import "./styles.scss";
import TextLine from "@/components/TextLine/TextLine";

const milestones = [
	{
		date: 2013,
		description: "Založení společnosti Neresen a.s. Start s jasnou vizí.",
	},
	{
		date: 2015,
		description: "První úspěšně dokončené projekty bytových domů.",
	},
	{
		date: 2017,
		description: "Vstup do segmentu domovů pro seniory.",
	},
	{
		date: 2019,
		description: "Expanze do celé České republiky. 20+ projektů.",
	},
	{
		date: 2021,
		description: "Přes 30 realizovaných projektů. Více než 70 000 m².",
	},
	{
		date: 2023,
		description: "40+ projektů. Celková plocha překračuje 100 000 m².",
	},
	{
		date: 2025,
		description: "27 projektů v aktivní realizaci. Stále rosteme.",
	},
];

export const metadata: Metadata = {
	title: "O nás – Bytové domy a domovy pro seniory",
	description:
		"Jsme Neresen a.s. – od roku 2013 realizujeme bytové domy a domovy pro seniory po celé České republice. Stavíme s odpovědností, flexibilitou a důrazem na kvalitu.",
	alternates: {
		canonical: "/o-nas",
	},
};

export default function AboutUs() {
	return (
		<main>
			<Breadcrumbs links={[{ label: "O nas" }]} />
			<div className="about-us-inner">
				<h1 className="main__title">
					<TextLine>O společnosti Neresen a.s.</TextLine>
				</h1>
				<p className="main__desc">
					<TextLine>
						Stavíme víc než budovy. Vytváříme místa, kde lidé žijí a jsou o ně
						pečováno.
					</TextLine>
				</p>
				<section className="section">
					<h2 className="section__title">
						<TextLine>Naše mise</TextLine>
					</h2>
					<p style={{ maxWidth: "1000px", marginLeft: "auto" }}>
						<TextLine>
							Věříme, že kvalitní bydlení a péče o seniory jsou základní potřeby
							každého člověka. Proto každý projekt, který realizujeme,
							přistupujeme s respektem — k místu, k budoucím obyvatelům, k
							životnímu prostředí. Naší misí není jen postavit budovu. Je to
							vytvořit prostor, který bude sloužit lidem desítky let — funkčně,
							esteticky a bezpečně. Tři hodnoty definují vše, co děláme:
							Odpovědnost — ke klientům, k termínům, ke kvalitě. Slovo dané je
							pro nás závazek. Flexibilita — každý projekt je jiný. Umíme se
							přizpůsobit požadavkům, situaci na trhu i neočekávaným výzvám.
							Kreativita — hledáme nejlepší řešení, ne to nejjednodušší. Ať jde
							o architektonický návrh nebo způsob financování projektu. Od roku
							2013 jsme dokázali, že tyto hodnoty a úspěšná realizace nejsou v
							rozporu. A to je základ důvěry, na které stavíme naše vztahy s
							klienty, investory i partnery.
						</TextLine>
					</p>
				</section>
				<section className="section">
					<h2 className="section__title">
						<TextLine>Náš tým</TextLine>
					</h2>
					<p className="section__desc">
						<TextLine>
							Za každým úspěšným projektem stojí profesionální tým odborníků.
						</TextLine>
					</p>
					<div className="our-team-grid">
						{members.map((m, i) => {
							return (
								<div key={i}>
									<div
										style={{
											aspectRatio: "1/1",
											background: "rgba(0,0,0, 0.1)",
										}}
									></div>
									<p>{m.name}</p>
									<p style={{ color: "hsl(0, 0%, 50%)" }}>{m.position}</p>
								</div>
							);
						})}
					</div>
				</section>
				<section className="section">
					<h2 className="section__title">
						<TextLine>Naše milníky</TextLine>
					</h2>
					<div className="milestones-container">
						{milestones.map((m, i) => {
							return (
								<div key={i} className="milestone">
									<p>
										<TextLine>{String(m.date)}</TextLine>
									</p>
									<p>
										<TextLine>{m.description}</TextLine>
									</p>
								</div>
							);
						})}
						<div className="milestone"></div>
						<div className="milestone"></div>
					</div>
				</section>
			</div>
		</main>
	);
}
