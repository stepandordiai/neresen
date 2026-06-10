import TextLine from "@/components/TextLine/TextLine";
import "./styles.scss";

const members = [
	{
		name: "Viktor Tomyshynets",
		position: "Jednatel",
	},
	{
		name: "Kristián Jankó",
		position: "Hlavní architekt",
	},
	{
		name: "Matej Kurty",
		position: "Vedoucí projektu",
	},
];

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
							<div>
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
		</main>
	);
}
