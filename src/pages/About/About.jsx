import TextLine from "../../components/TextLine/TextLine";
import "./About.scss";

const About = () => {
    return (
        <div className="about">
            <TextLine>
                <h2 className="about__title">O Neresen a.s.</h2>
            </TextLine>
            <div className="about__details">
                <TextLine>
                    <p>
                        Firma Neresen a.s. byla založena v roce 2013. Společnost
                    </p>
                </TextLine>
                <TextLine>
                    <p>
                        realizuje kompletní projekty od vyhledávání vhodného
                        pozemku,
                    </p>
                </TextLine>
                <TextLine>
                    <p>
                        přes proces jeho přípravy, získání stavebních povolení
                        až po
                    </p>
                </TextLine>
                <TextLine>
                    <p>
                        realizaci stavby a samotný prodej. Umíme pracovat v
                        soukromém i
                    </p>
                </TextLine>
                <TextLine>
                    <p>veřejném sektoru. Působíme v celé České republice.</p>
                </TextLine>
            </div>
        </div>
    );
};

export default About;
