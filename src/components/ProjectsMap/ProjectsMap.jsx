import { Helmet } from "react-helmet";
import { useEffect } from "react";
import TextLine from "../TextLine/TextLine";
import "./ProjectsMap.scss";

const ProjectsMap = ({ data }) => {
	// const projectImages = projectsData.map((project) => {
	// 	return project.img;
	// });

	async function initMap() {
		// Coordinates of center of Czech
		const centerPosition = { lat: 49.8175, lng: 15.473 };

		const map = new google.maps.Map(document.getElementById("map"), {
			zoom: 6.5,
			center: centerPosition,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		});

		for (let i = 0; i < data.length; i++) {
			const project = data[i];

			let marker = new google.maps.Marker({
				map: map,
				position: new google.maps.LatLng(
					project.position.lat,
					project.position.lon
				),
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
						infowindow.setContent(
							`<img width='100%' src='${project.img[0]}' loading="lazy" /><br /><br /><strong>${project.name}</strong><br /><p>Rozvojová zóna</p><br /><p>Czechia</p>`
						);
						infowindow.open(map, marker);
					};
				})(marker, i)
			);

			document.querySelectorAll(".info-container").forEach((container) => {
				container.addEventListener("click", () => {
					let dataValue = container.dataset.title;
					if (dataValue == project.name) {
						map.panTo(marker.getPosition());
						infowindow.setContent(
							`<img width='100%' src='${project.img[0]}' loading="lazy" /><br /><br /><strong>${project.name}</strong><br /><p>Rozvojová zóna</p><br /><p>Czechia</p>`
						);
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
			<Helmet>
				<script></script>
			</Helmet>
			<div className="projects-map" id="projects-map">
				<TextLine>
					<h2 className="projects-map__title">Realizované projekty na mapě</h2>
				</TextLine>
				<div className="map-container">
					<div id="map"></div>
					<div className="container">
						{data.map((project, index) => {
							return (
								<div
									key={index}
									className="info-container"
									data-title={project.name}
								>
									<img
										style={{ height: "100px" }}
										src={project.img[0]}
										alt=""
										loading="lazy"
									/>
									<div>
										<p>{project.name}</p>
										<p>ul.Medunova</p>
										<p>Czechia</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectsMap;
