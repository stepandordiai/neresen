import { projectsData } from "../../data/projectsData";
import { useEffect } from "react";
import TextLine from "../../components/TextLine/TextLine";
import "./ProjectsMap.scss";

const ProjectsMap = () => {
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
                49.92194413662426,
                15.809526706791234,
                `<img width='100%' src='${projectImages[0][0]}' /><br /><br /><strong>Bytový dům Slatiňany</strong><br /><p>ul.Medunova</p><br /><p>Czechia</p>`,
                "Bytový dům",
            ],
            [
                50.024232977043376,
                15.214370875067454,
                `<img width='100%' src='${projectImages[1][0]}' /><br /><br /><strong>Rekonstrukce Kolín</strong><br /><p>ul. Pod Hroby</p><br /><p>Czechia</p>`,
                "Rekonstrukce",
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
        <>
            <div className="projects-map">
                <TextLine>
                    <h2 className="projects-map__title">
                        Realizované projekty na mapě
                    </h2>
                </TextLine>
                <div className="map-container">
                    <div id="map"></div>
                    <div className="container">
                        <div
                            className="info-container"
                            data-title="Rekonstrukce"
                        >
                            <img
                                style={{ height: "100px" }}
                                src={projectImages[0][0]}
                                alt=""
                            />
                            <div>
                                <p>Bytový dům Slatiňany</p>
                                <p>ul.Medunova</p>
                                <p>Czechia</p>
                            </div>
                        </div>
                        <div className="info-container" data-title="Bytový dům">
                            <img
                                style={{ height: "100px" }}
                                src={projectImages[1][0]}
                                alt=""
                            />
                            <div>
                                <p>Rekonstrukce Kolín</p>
                                <p>ul. Pod Hroby</p>
                                <p>Czechia</p>
                            </div>
                        </div>
                        <div
                            className="info-container"
                            data-title="Domov pro seniory"
                        >
                            <img
                                src={projectImages[2][0]}
                                style={{ height: "100px" }}
                                alt=""
                            />
                            <div>
                                <p>Domov pro seniory Janovice nad Úhlavou</p>
                                <p>Rozvojová zóna</p>
                                <p>Czechia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectsMap;
