import "./ProjectTwo.scss";
import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import img1 from "./../assets/projects-img/project2/1.jpg";
import img2 from "./../assets/projects-img/project2/2.jpg";
import img3 from "./../assets/projects-img/project2/3.jpg";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import PageTitle from "../../components/PageTitle/PageTitle";
// import TextLine from "../../components/TextLine/TextLine";
import PageTitle from "../components/PageTitle/PageTitle";
import TextLine from "../components/TextLine/TextLine";

const ProjectTwo = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <PageTitle
                title={"Rekonstrukce"}
                hashPath={"#project2"}
                previousLinkTitle={"Projects"}
            />
            <div className="project1" id="project2">
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
                        spaceBetween={7.5}
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
                    <TextLine>
                        <p>Rekonstrukce</p>
                    </TextLine>
                    <TextLine>
                        <p>Kolín – ul. Pod Hroby</p>
                    </TextLine>
                    <TextLine>
                        <p>
                            Rekonstrukce stávajícího objektu včetně přístavby.
                        </p>
                    </TextLine>
                </div>
            </div>
        </>
    );
};

export default ProjectTwo;
