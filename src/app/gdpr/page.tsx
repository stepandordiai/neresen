import type { Metadata } from "next";
import PageTitle from "../../components/PageTitle/PageTitle";
import Container from "../../components/Container/Container";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import "./Gdpr.scss";

export const metadata: Metadata = {
	title: "Zásady ochrany osobních údajů",
	description:
		"Informace o zpracování osobních údajů společností Neresen a.s. dle GDPR. Zjistěte, jaké údaje shromažďujeme, jak je chráníme a jaká máte práva.",
	alternates: {
		canonical: "/gdpr",
	},
};

export default function PrivacyPolicy() {
	return (
		<main>
			<Breadcrumbs links={[{ label: "GDPR" }]} />
			<Container>
				<PageTitle
					title="Zásady ochrany osobních údajů"
					hashPath="#osobní-údaje"
					image="/projects-img/project12/01-c.png"
				/>
				<div className="privacy-policy" id="osobní-údaje">
					<div className="privacy-policy__container">
						<div>
							<h2 className="privacy-policy__title">Základní ustanovení</h2>
							<p>
								Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského
								parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v
								souvislosti se zpracováním osobních údajů a o volném pohybu
								těchto údajů (dále jen: „GDPR”) je společnost IČ 01458965 se
								sídlem v Hanusova 1537/1b, Praha (dále jen: „správce“). Kontakt:
								info@neresen.cz Osobními údaji se rozumí veškeré informace o
								identifikované nebo identifikovatelné fyzické osobě;
								identifikovatelnou fyzickou osobou je fyzická osoba, kterou lze
								přímo či nepřímo identifikovat, zejména odkazem na určitý
								identifikátor, například jméno, identifikační číslo, lokační
								údaje, síťový identifikátor nebo na jeden či více zvláštních
								prvků fyzické, fyziologické, genetické, psychické, ekonomické,
								kulturní nebo společenské identity této fyzické osoby.
							</p>
						</div>
						<div>
							<h2 className="privacy-policy__title">
								Zdroje a kategorie zpracovávaných osobních údajů
							</h2>
							<p>
								Správce zpracovává osobní údaje, které jste mu poskytl/a nebo
								osobní údaje, které správce získal na základě plnění Vašeho
								dotazu.
							</p>
						</div>
						<div>
							<h2 className="privacy-policy__title">
								Zákonný důvod a účel zpracování osobních údajů
							</h2>
							<p>
								Účelem zpracování osobních údajů je vyřízení odpovědi na váš
								formulář.
							</p>
						</div>
						<div>
							<h2 className="privacy-policy__title">
								Podmínky zabezpečení osobních údajů
							</h2>
							<p>
								Správce prohlašuje, že přijal veškerá vhodná technická a
								organizační opatření k zabezpečení osobních údajů. Správce
								přijal technická opatření k zabezpečení datových úložišť a
								úložišť osobních údajů v listinné podobě. Správce prohlašuje, že
								k osobním údajům mají přístup pouze jím pověřené osoby.
							</p>
						</div>
						<div>
							<h2 className="privacy-policy__title">Závěrečná ustanovení</h2>
							<p>
								Odesláním formuláře z internetového formuláře potvrzujete, že
								jste seznámen/a s podmínkami ochrany osobních údajů a že je v
								celém rozsahu přijímáte. Správce je oprávněn tyto podmínky
								změnit. Novou verzi podmínek ochrany osobních údajů zveřejní na
								svých internetových stránkách, případně Vám zašle novou verzi
								těchto podmínek na e-mailovou adresu, kterou jste správci
								poskytl/a. Tyto podmínky nabývají účinnosti dnem 1. 1. 2024.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</main>
	);
}
