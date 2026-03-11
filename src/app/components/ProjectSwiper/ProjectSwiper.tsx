"use client";

import { CSSProperties, useEffect, useState } from "react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";

import "./ProjectSwiper.scss";

type ProjectSwiperProps = {
	img: string[];
};

const ProjectSwiper = ({ img }: ProjectSwiperProps) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
	const [slider, setSlider] = useState(false);
	const [slideIndex, setSlideIndex] = useState(0);

	function showSlider(index: number) {
		setSlider(true);
		setSlideIndex(index);
	}

	// Handle direction of the slider
	function handleSlider(value: number) {
		setSlideIndex((prev) => {
			const totalSlides = img.length;
			let newIndex = prev + value;
			if (newIndex >= totalSlides) newIndex = 0;
			if (newIndex < 0) newIndex = totalSlides - 1;
			return newIndex;
		});
	}

	function hideSlider() {
		setSlider(false);
	}

	useEffect(() => {
		if (slider) {
			document.documentElement.style.overflow = "hidden";
		} else {
			document.documentElement.style.overflow = "";
		}

		return () => {
			document.documentElement.style.overflow = "";
		};
	}, [slider]);

	return (
		<>
			<div className="project-swiper">
				<Swiper
					style={
						{
							"--swiper-navigation-color": "#fff",
							"--swiper-pagination-color": "#fff",
						} as CSSProperties
					}
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
									onClick={() => showSlider(index)}
									style={{ cursor: "pointer" }}
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
					slidesPerView={img.length}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
					className="mySwiper"
				>
					{img.map((img, index) => {
						return (
							<SwiperSlide key={index}>
								<img src={img} style={{ cursor: "pointer" }} loading="lazy" />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			{/* slider */}
			<div className={`slider ${slider ? "slider--show" : ""}`}>
				<div className="slideshow-number">
					<span className="current-index">{slideIndex + 1}</span> / {img.length}
				</div>
				<button onClick={hideSlider} className="close-slide-btn">
					Zavřít
				</button>
				{img.map((img, index) => {
					return (
						<div
							className={`slide ${slideIndex}`}
							style={
								slideIndex === index ? { display: "flex" } : { display: "none" }
							}
							key={index}
						>
							<img className="slide-img" src={img} loading="lazy" />
						</div>
					);
				})}
				<button onClick={() => handleSlider(-1)} className="prev-btn">
					❮
				</button>
				<button onClick={() => handleSlider(1)} className="next-btn">
					❯
				</button>
			</div>
		</>
	);
};

export default ProjectSwiper;
