import TextLine from "../TextLine/TextLine";
import React from "react";
import "./About.scss";

const aboutText = `Neresen a.s. je česká developerská společnost s více než desetiletou zkušeností v oblasti výstavby a rekonstrukcí. Společnost byla založena v roce 2013 Viktorem Tomyšyncem s jasnou vizí: realizovat projekty zodpovědně, flexibilně a kreativně.  Za dobu naší existence jsme dokončili více než 40 projektů o celkové ploše přes 100 000 m². Dnes máme v realizaci dalších 27 projektů rozmístěných po celé České republice.  Tým Neresen tvoří 10 zkušených odborníků — architektů, projektových manažerů a stavebních inženýrů, kteří sdílí společné hodnoty: odpovědnost ke klientům, flexibilitu při řešení výzev a kreativitu při hledání nejlepších řešení.  Naší silou není jen stavební know-how. Je to komplexní přístup — od vyhledání vhodného pozemku, přes projektovou dokumentaci, získání stavebních povolení, až po samotnou realizaci a předání klíčů. Klient s námi nekomunikuje se třemi různými firmami — vše zajistíme my.  Pracujeme pro soukromé investory, municipality i nadace. Specializujeme se na dva klíčové segmenty: rezidenční výstavbu a péči o seniory — dvě oblasti, kde záleží na každém detailu.`;

const whyUs = [
	"Komplexní přístup — od pozemku po klíče. Jeden partner pro celý projekt.",
	"Více než 40 úspěšně dokončených projektů. Zkušenosti, které mluví za vše.",
	"Pracujeme v soukromém i veřejném sektoru — bytové domy i domovy pro seniory.",
	"Transparentní komunikace a dodržení termínů. Bez překvapení.",
	"Působíme po celé České republice. Lokální znalost, celostátní dosah.",
	"Vlastní tým architektů, inženýrů a projektových manažerů.",
];

import { useEffect, useState, useRef } from "react";

const Counter = ({ value, duration = 2000 }) => {
	const [count, setCount] = useState(0);
	const [started, setStarted] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setStarted(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.5 },
		);

		if (ref.current) observer.observe(ref.current);

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!started) return;

		let start = Number(value) >= 50 ? Number(value) - 50 : 0;
		const end = parseInt(value.toString().replace(/\D/g, ""));
		if (start === end) return;

		const incrementTime = duration / end;

		const timer = setInterval(() => {
			start += 1;
			setCount(start);

			if (start >= end) clearInterval(timer);
		}, incrementTime);

		return () => clearInterval(timer);
	}, [started, value, duration]);

	const suffix = value.toString().replace(/[0-9\s]/g, "");

	return (
		<span ref={ref}>
			{count}
			{suffix}
		</span>
	);
};

const About = () => {
	return (
		<section className="about" id="o-nas">
			<TextLine>
				<h2 className="section__title">Kdo jsme</h2>
			</TextLine>
			<div className="about__details">
				{aboutText.split(" ").map((word, index) => {
					return (
						<React.Fragment key={index}>
							<TextLine>{word}</TextLine>
							<span> </span>
						</React.Fragment>
					);
				})}
			</div>
			<div className="about-stats">
				<div>
					<p>
						<Counter value="40" /> +
					</p>
					<p>Realizovaných projektů</p>
				</div>
				<div>
					<p>
						<Counter value="27" />
					</p>
					<p>Projektů v realizaci</p>
				</div>
				<div>
					<p>
						<Counter value="100000" duration={5000000} /> m²
					</p>
					<p>Celková plocha realizovaných staveb</p>
				</div>
				<div>
					<p>
						<Counter value="12" /> let
					</p>
					<p>Zkušeností na trhu (od roku 2013)</p>
				</div>
			</div>
			<div>
				<h3 className="section__title">Proč Neresen</h3>
				<div className="why-us-container">
					{whyUs.map((txt, i) => {
						return <div key={i}>{txt}</div>;
					})}
				</div>
			</div>
		</section>
	);
};

export default About;
