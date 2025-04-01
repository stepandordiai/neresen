import { projectsData } from "../../data/projectsData";
import { useEffect } from "react";
import TextLine from "../../components/TextLine/TextLine";
import "./ProjectsMap.scss";

const ProjectsMap = () => {
    const projectImages = projectsData.map((project) => {
        return project.img;
    });

    function initMap() {
        // Coordinates of center of Czech
        const position = { lat: 49.8175, lng: 15.473 };

        // lat
        // lon
        // address
        // Bytovy dum
        // 49.92261398650534, 15.809143209445217;

        // Pod Hroby
        // 50.02478461448177, 15.214500809021489;

        // Holice
        // 50.069727063689314, 15.98452797964153;

        // Vizovice
        // 49.2265314500856, 17.849668075231726;

        // Mlekovice
        // 49.98094429608574, 15.026229965151384;

        // Chrudim
        // 49.951462502023794, 15.794711040395553;

        // Janovice nad Uhlavou
        // 49.34624618106399, 13.21744897883078;

        // Lazne Bohdanec
        // 50.078692615613846, 15.684526089848221;

        // Trnova
        // 49.9174014166823, 14.356690392676924;

        // Hredle
        // 49.90399113536922, 13.916828509895227;

        // Most
        // 50.506548135909384, 13.63496883542187;

        // Luhacovice
        // 49.10001696870206, 17.757479608695768;

        let locations = [
            [
                49.92194413662426,
                15.809526706791234,
                `<img width='100%' src='${projectImages[0][0]}' loading="lazy" /><br /><br /><strong>Bytový dům Slatiňany</strong><br /><p>ul.Medunova</p><br /><p>Czechia</p>`,
                "Bytový dům",
            ],
            [
                50.024232977043376,
                15.214370875067454,
                `<img width='100%' src='${projectImages[1][0]}' loading="lazy" /><br /><br /><strong>Rekonstrukce Kolín</strong><br /><p>ul. Pod Hroby</p><br /><p>Czechia</p>`,
                "Rekonstrukce",
            ],
            [
                50.069727063689314,
                15.98452797964153,
                `<img width='100%' src='${projectImages[2][0]}' loading="lazy" /><br /><br /><strong>Domov pro seniory Janovice nad Úhlavou</strong><br /><p>Rozvojová zóna</p><br /><p>Czechia</p>`,
                "Domov pro seniory",
            ],
            [
                49.2265314500856,
                17.849668075231726,
                `<img width='100%' src='${projectImages[2][0]}' loading="lazy" /><br /><br /><strong>Domov pro seniory Janovice nad Úhlavou</strong><br /><p>Rozvojová zóna</p><br /><p>Czechia</p>`,
                "Domov pro seniory",
            ],
            [
                49.98094429608574,
                15.026229965151384,
                `<img width='100%' src='${projectImages[2][0]}' loading="lazy" /><br /><br /><strong>Domov pro seniory Janovice nad Úhlavou</strong><br /><p>Rozvojová zóna</p><br /><p>Czechia</p>`,
                "Domov pro seniory",
            ],
            [
                49.951462502023794,
                15.794711040395553,
                `<img width='100%' src='${projectImages[2][0]}' loading="lazy" /><br /><br /><strong>Domov pro seniory Janovice nad Úhlavou</strong><br /><p>Rozvojová zóna</p><br /><p>Czechia</p>`,
                "Domov pro seniory",
            ],
            [
                49.34624618106399,
                13.21744897883078,
                `<img width='100%' src='${projectImages[2][0]}' loading="lazy" /><br /><br /><strong>Domov pro seniory Janovice nad Úhlavou</strong><br /><p>Rozvojová zóna</p><br /><p>Czechia</p>`,
                "Domov pro seniory",
            ],
            [
                49.33463068006648,
                13.206888596683491,
                `<img width='100%' src='${projectImages[2][0]}' loading="lazy" /><br /><br /><strong>Domov pro seniory Janovice nad Úhlavou</strong><br /><p>Rozvojová zóna</p><br /><p>Czechia</p>`,
                "Domov pro seniory",
            ],
            [
                49.33463068006648,
                13.206888596683491,
                `<img width='100%' src='${projectImages[2][0]}' loading="lazy" /><br /><br /><strong>Domov pro seniory Janovice nad Úhlavou</strong><br /><p>Rozvojová zóna</p><br /><p>Czechia</p>`,
                "Domov pro seniory",
            ],
            [
                49.33463068006648,
                13.206888596683491,
                `<img width='100%' src='${projectImages[2][0]}' loading="lazy" /><br /><br /><strong>Domov pro seniory Janovice nad Úhlavou</strong><br /><p>Rozvojová zóna</p><br /><p>Czechia</p>`,
                "Domov pro seniory",
            ],
            [
                49.33463068006648,
                13.206888596683491,
                `<img width='100%' src='${projectImages[2][0]}' loading="lazy" /><br /><br /><strong>Domov pro seniory Janovice nad Úhlavou</strong><br /><p>Rozvojová zóna</p><br /><p>Czechia</p>`,
                "Domov pro seniory",
            ],
            [
                49.33463068006648,
                13.206888596683491,
                `<img width='100%' src='${projectImages[2][0]}' loading="lazy" /><br /><br /><strong>Domov pro seniory Janovice nad Úhlavou</strong><br /><p>Rozvojová zóna</p><br /><p>Czechia</p>`,
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
                                loading="lazy"
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
                                loading="lazy"
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
                                loading="lazy"
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
