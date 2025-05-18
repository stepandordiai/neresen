import React, { useState, useEffect } from "react";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "./ProjectSwiper.scss";

const ProjectSwiper = ({ img }) => {
	function getImgLength() {
		return img.length;
	}

	getImgLength();

	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	function showSlider(n) {
		document.querySelector(".slideshow-container").style.display = "flex";
		currentSlide(n);
	}

	let slideIndex = 1;

	useEffect(() => {
		showSlides(slideIndex);
	}, []);

	function plusSlides(n) {
		showSlides((slideIndex += n));
	}

	function currentSlide(n) {
		showSlides((slideIndex = n));
	}

	function showSlides(n) {
		let i;
		let slides = document.getElementsByClassName("slide");
		let dots = document.getElementsByClassName("dot");
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" dot--active", "");
		}

		slides[slideIndex - 1].style.display = "flex";
		dots[slideIndex - 1].className += " dot--active";

		document.querySelector(".current-index").textContent = slideIndex;
	}

	function closeSlide() {
		document.querySelector(".slideshow-container").style.display = "none";
	}

	return (
		<>
			<div className="project1-swiper">
				<Swiper
					style={{
						"--swiper-navigation-color": "#fff",
						"--swiper-pagination-color": "#fff",
					}}
					spaceBetween={7.5}
					navigation={true}
					thumbs={{ swiper: thumbsSwiper }}
					modules={[FreeMode, Navigation, Thumbs]}
					className="mySwiper2"
				>
					{img.map((img, index) => {
						return (
							<SwiperSlide key={index}>
								<img
									onClick={() => showSlider(index + 1)}
									src={img}
									loading="lazy"
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
				<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={7.5}
					slidesPerView={getImgLength()}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
					className="mySwiper"
				>
					{img.map((img, index) => {
						return (
							<SwiperSlide key={index}>
								<img src={img} loading="lazy" />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			<div className="slideshow-container">
				<div className="slideshow-number">
					<span className="current-index"></span> / {img.length}
				</div>
				<button onClick={closeSlide} className="close-slide-btn">
					Zavřít
				</button>
				{img.map((img, index) => {
					return (
						<div className="slide" key={index}>
							<img className="slide-img" src={img} loading="lazy" />
						</div>
					);
				})}
				<button onClick={() => plusSlides(-1)} className="prev-btn">
					❮
				</button>
				<button onClick={() => plusSlides(1)} className="next-btn">
					❯
				</button>
				<div className="slideshow-pagination">
					{img.map((index) => {
						return (
							<span
								key={index}
								className="dot"
								onClick={() => currentSlide(index + 1)}
							></span>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default ProjectSwiper;
