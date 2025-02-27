import "./ProjectThree.scss";

import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import img1 from "./../assets/projects-img/project3/1.jpg";
import img2 from "./../assets/projects-img/project3/2.jpg";
import img3 from "./../assets/projects-img/project3/3.jpg";
import img4 from "./../assets/projects-img/project3/4.jpg";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import PageTitle from "../../components/PageTitle/PageTitle";
// import TextLine from "../../components/TextLine/TextLine";
import PageTitle from "../components/PageTitle/PageTitle";
import TextLine from "../components/TextLine/TextLine";

const ProjectThree = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <PageTitle
                title={"Domov pro seniory"}
                hashPath={"#project1"}
                previousLinkTitle={"Projects"}
            />
            <div className="project1" id="project1">
                <div className="project1-swiper" style={{ width: "30%" }}>
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
                        <SwiperSlide>
                            <img src={img4} />
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
                        <SwiperSlide>
                            <img src={img4} />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="project1-info" style={{ width: "70%" }}>
                    <TextLine>
                        <p>Domov pro seniory</p>
                    </TextLine>
                    <TextLine>
                        <p>Janovice nad Úhlavou – Rozvojová zóna</p>
                    </TextLine>
                    <TextLine>
                        <p>
                            Kompletní přestavba stávajícího objektu na domov pro
                            seniory.
                        </p>
                    </TextLine>
                </div>
            </div>
        </>
    );
};

export default ProjectThree;
