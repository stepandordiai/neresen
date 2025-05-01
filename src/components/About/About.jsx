import TextLine from "../TextLine/TextLine";
import React from "react";
import "./About.scss";

const aboutText = `Firma Neresen a.s. byla založena v roce 2013. Společnost realizuje kompletní projekty 
	od vyhledávání vhodného pozemku, přes proces jeho přípravy, získání stavebních povolení až po realizaci stavby a samotný prodej.
	 Umíme pracovat v soukromém i veřejném sektoru. Působíme v celé České republice.`;

const About = () => {
	return (
		<div className="about" id="about">
			<TextLine>
				<h2 className="about__title">O Neresen a.s.</h2>
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
		</div>
	);
};

export default About;
