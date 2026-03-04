"use client";

import { useEffect } from "react";
import TextLine from "../TextLine/TextLine";
import { Project } from "@/app/interfaces/project";
import "./ProjectsMap.scss";

declare global {
	interface Window {
		google: any;
	}
}

type ProjectsMapProps = {
	projects: Project[];
};

const ProjectsMap = ({ projects }: ProjectsMapProps) => {
	async function initMap() {
		// Coordinates of center of Czech
		const centerPosition = { lat: 49.8175, lng: 15.473 };

		const mapElement = document.getElementById("map");
		if (!mapElement || !window.google) return;

		const map = new window.google.maps.Map(mapElement, {
			zoom: 6.5,
			center: centerPosition,
			mapTypeId: window.google.maps.MapTypeId.ROADMAP,
		});

		for (let i = 0; i < projects.length; i++) {
			const project = projects[i];

			let marker = new window.google.maps.Marker({
				map: map,
				position: new window.google.maps.LatLng(
					project.position.lat,
					project.position.lon,
				),
			});

			var infowindow = new window.google.maps.InfoWindow({
				minWidth: "200",
				maxWidth: "200",
			});

			window.google.maps.event.addListener(
				marker,
				"click",
				(function (marker, i) {
					return function () {
						map.panTo(marker.getPosition());
						infowindow.setContent(
							`<img width='100%' src='${
								project.img[0]
							}' loading="lazy" /><br /><br /><strong>${
								project.name
							}</strong><br /><a href="${
								project.addressLink || "#"
							}" target="_blank">${
								project.address ?? project.inProcess
							}</a><br /><p>Czechia</p>`,
						);
						infowindow.open(map, marker);
					};
				})(marker, i),
			);

			document.querySelectorAll(".info-container").forEach((container) => {
				container.addEventListener("click", () => {
					let dataValue = (container as HTMLElement).dataset.title;
					if (dataValue == project.name) {
						map.panTo(marker.getPosition());
						infowindow.setContent(
							`<img width='100%' src='${project.img[0]}' loading="lazy" /><br /><br /><strong>${project.name}</strong><br /><p>Rozvojová zóna</p><br /><p>Czechia</p>`,
						);
						infowindow.open(map, marker);
					}
				});
			});
		}
	}

	useEffect(() => {
		// Load Google Maps script if not already loaded
		if (window.google) {
			initMap();
		} else {
			const interval = setInterval(() => {
				if (window.google) {
					clearInterval(interval);
					initMap();
				}
			}, 100);

			return () => clearInterval(interval);
		}
	}, []);

	return (
		<section className="projects-map" id="mapa-projektu">
			<TextLine>
				<h2 className="projects-map__title">Realizované projekty na mapě</h2>
			</TextLine>
			<div className="map-container">
				<div id="map"></div>
				<div className="container">
					{projects.map((project, index) => {
						return (
							<div
								key={index}
								className="info-container"
								data-title={project.name}
							>
								<img src={project.img[0]} alt="" loading="lazy" />
								<div className="info-container__details">
									<p>{project.name}</p>
									<p>{project.address ?? project.inProcess}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ProjectsMap;
