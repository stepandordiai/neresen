import { NavLink } from "react-router-dom";
import TextLine from "../../components/TextLine/TextLine";
import { projectsData } from "../../data/projectsData";
import img1 from "./../../assets/projects-img/project1/1.jpg";
import img2 from "./../../assets/projects-img/project2/1.jpg";
import img3 from "./../../assets/projects-img/project3/1.jpg";

import { useEffect } from "react";
import "./Home.scss";

const Home = () => {
    const projectImages = projectsData.map((project) => {
        return project.img;
    });

    function initMap() {
        const position = { lat: 50.02425240479898, lng: 15.214482108227289 };

        // lat
        // lon
        // address

        let locations = [
            [
                50.024232977043376,
                15.214370875067454,
                `<img width='100%' src='${projectImages[0][0]}' /><br /><br /><strong>Rekonstrukce Kolín</strong><br /><p>ul. Pod Hroby</p><br /><p>Czechia</p>`,
                "Rekonstrukce",
            ],
            [
                49.92194413662426,
                15.809526706791234,
                `<img width='100%' src='${projectImages[1][0]}' /><br /><br /><strong>Bytový dům Slatiňany</strong><br /><p>ul.Medunova</p><br /><p>Czechia</p>`,
                "Bytový dům",
            ],
            [
                49.33463068006648,
                13.206888596683491,
                `<img width='100%' src='${projectImages[2][0]}' /><br /><br /><strong>Domov pro seniory Janovice nad Úhlavou</strong><br /><p>Rozvojová zóna</p><br /><p>Czechia</p>`,
                "Domov pro seniory",
            ],
        ];

        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: position,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        });

        for (let i = 0; i < locations.length; i++) {
            const location = locations[i];

            let marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(location[0], location[1]),
            });

            var infowindow = new google.maps.InfoWindow({
                minWidth: "200",
                maxWidth: "200",
            });

            google.maps.event.addListener(
                marker,
                "click",
                (function (marker, i) {
                    return function () {
                        map.panTo(marker.getPosition());
                        infowindow.setContent(location[2]);
                        infowindow.open(map, marker);
                    };
                })(marker, i)
            );

            document
                .querySelectorAll(".info-container")
                .forEach((container) => {
                    container.addEventListener("click", () => {
                        let dataValue = container.dataset.title;
                        if (dataValue == location[3]) {
                            map.panTo(marker.getPosition());
                            infowindow.setContent(location[2]);
                            infowindow.open(map, marker);
                        }
                    });
                });
        }
    }

    useEffect(() => {
        initMap();
    }, []);

    return (
        <section className="home">
            <div className="home-wrapper js-home-wrapper">
                <div>
                    <TextLine>
                        <p className="home__secondary-title">
                            Vítejte na stránkách společnosti
                        </p>
                    </TextLine>
                    <TextLine>
                        <p className="home__title">Neresen a.s.</p>
                    </TextLine>
                </div>
                <NavLink className="home__btn" to={"/contacts"}>
                    <div className="btn-border-top"></div>
                    <div className="btn-border-right"></div>
                    <div className="btn-border-bottom"></div>
                    <div className="btn-border-left"></div>
                    Kontaktujte nás
                </NavLink>
            </div>
            <div className="home__bottom">
                <div className="about-us">
                    <TextLine>
                        <h2 className="about-us__title">About Neresen a.s.</h2>
                    </TextLine>
                    <div className="about-us__details">
                        <TextLine>
                            <p>
                                Firma Neresen a.s. byla založena v roce 2013.
                                Společnost
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                realizuje kompletní projekty od vyhledávání
                                vhodného pozemku,
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                přes proces jeho přípravy, získání stavebních
                                povolení až po
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                realizaci stavby a samotný prodej. Umíme
                                pracovat v soukromém i
                            </p>
                        </TextLine>
                        <TextLine>
                            <p>
                                veřejném sektoru. Působíme v celé České
                                republice.
                            </p>
                        </TextLine>
                    </div>
                </div>
                <div className="projects js-projects" id="projects">
                    <div className="projects__title-wrapper">
                        <TextLine>
                            <p className="projects__title">
                                Realizované projekty
                            </p>
                        </TextLine>
                        <TextLine>
                            <p className="projects__secondary-title">
                                Hotová stavba k pohodlnému bydlení
                            </p>
                        </TextLine>
                    </div>
                    <div className="projects-grid">
                        <div className="project-card-wrapper">
                            <div className="project-card">
                                <img src={projectImages[0][0]} alt="" />
                                <NavLink
                                    className="project-card-bottom"
                                    to={"/project-one"}
                                >
                                    <p>Bytový dům</p>
                                </NavLink>
                            </div>
                            <TextLine>
                                <p className="project-card__title">
                                    Bytový dům
                                </p>
                            </TextLine>
                        </div>
                        <div className="project-card-wrapper">
                            <div className="project-card">
                                <img src={projectImages[1][0]} alt="" />
                                <NavLink
                                    className="project-card-bottom"
                                    to={"/project-two"}
                                >
                                    <p>Rekonstrukce</p>
                                </NavLink>
                            </div>
                            <TextLine>
                                <p className="project-card__title">
                                    Rekonstrukce
                                </p>
                            </TextLine>
                        </div>
                        <div className="project-card-wrapper">
                            <div className="project-card">
                                <img src={projectImages[2][0]} alt="" />
                                <NavLink
                                    className="project-card-bottom"
                                    to={"/project-three"}
                                >
                                    <p>Domov pro seniory</p>
                                </NavLink>
                            </div>
                            <TextLine>
                                <p className="project-card__title">
                                    Domov pro seniory
                                </p>
                            </TextLine>
                        </div>
                    </div>
                </div>
                <div className="projects-map">
                    <h2 className="projects-map__title">
                        Realizované projekty na mapě
                    </h2>
                    <div className="map-container">
                        <div id="map"></div>
                        <div className="container">
                            <div
                                className="info-container js-info-container"
                                data-title="Rekonstrukce"
                            >
                                <img
                                    style={{ height: "100px" }}
                                    src={projectImages[0][0]}
                                    alt=""
                                />
                                <p>Rekonstrukce</p>
                            </div>
                            <div
                                className="info-container js-info-container1"
                                data-title="Bytový dům"
                            >
                                <img
                                    style={{ height: "100px" }}
                                    src={projectImages[1][0]}
                                    alt=""
                                />
                                <p>Bytový dům</p>
                            </div>
                            <div
                                className="info-container js-info-container1"
                                data-title="Domov pro seniory"
                            >
                                <img
                                    src={projectImages[2][0]}
                                    style={{ height: "100px" }}
                                    alt=""
                                />
                                <p>Domov pro seniory</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
