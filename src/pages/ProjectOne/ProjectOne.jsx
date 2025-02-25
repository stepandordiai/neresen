import "./ProjectOne.scss";
import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import img1 from "./../../assets/projects-img/project1/1.jpg";
import img2 from "./../../assets/projects-img/project1/2.jpg";
import img3 from "./../../assets/projects-img/project1/3.jpg";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProjectOne = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        document.querySelectorAll(".text-line").forEach((el, index) => {
            document.addEventListener("scroll", () => {
                const serviceRect = el.getBoundingClientRect().top;
                if (serviceRect < window.innerHeight - 100) {
                    el.style.animation = "revealTextLine 1s forwards";
                }
            });

            // On load page

            const serviceRect = el.getBoundingClientRect().top;
            if (serviceRect < window.innerHeight - 100) {
                el.style.animation = "revealTextLine 1s forwards";
            }
        });
    });

    return (
        <>
            <div className="project1-wrapper"></div>
            <div className="project1">
                <div className="project1-swiper">
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <img src={img1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} />
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={img1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="project1-info">
                    <div>
                        {`Bytový dům`.split(` `).map((word, index) => {
                            return (
                                <div
                                    key={index}
                                    className="text-line-container"
                                >
                                    <div className="text-line">
                                        <p
                                            style={{
                                                marginRight: "5px",
                                            }}
                                        >
                                            {word}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        {`Slatiňany – ul.Medunova`
                            .split(` `)
                            .map((word, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="text-line-container"
                                    >
                                        <div className="text-line">
                                            <p
                                                style={{
                                                    marginRight: "5px",
                                                }}
                                            >
                                                {word}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <div>
                        {`Výstavba bytových domů.`
                            .split(` `)
                            .map((word, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="text-line-container"
                                    >
                                        <div className="text-line">
                                            <p
                                                style={{
                                                    marginRight: "5px",
                                                }}
                                            >
                                                {word}
                                            </p>
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

export default ProjectOne;
