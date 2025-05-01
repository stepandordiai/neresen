import { NavLink } from "react-router-dom";
import TextLine from "../../components/TextLine/TextLine";
import About from "../About/About";
import Projects from "../Projects/Projects";
// import ProjectsMap from "../ProjectsMap/ProjectsMap";
import bgImg from "/assets/img/3.jpg";
import "./Home.scss";
import BtnBorders from "../../components/BtnBorders/BtnBorders";

const Home = () => {
	function revealImg() {
		document.querySelector(".home-bg-img").classList.add("home-bg-img--active");
	}

	return (
		<>
			<div className="home-bg-img-wrapper">
				<img onLoad={revealImg} className="home-bg-img" src={bgImg} alt="" />
			</div>
			<section className="home">
				<div className="home-wrapper js-home-wrapper">
					<div>
						<TextLine>
							<p className="home__secondary-title">
								Vítejte na stránkách společnosti
							</p>
						</TextLine>
						<div>
							<TextLine>
								<h1 className="home__title">Neresen a.s.</h1>
							</TextLine>
						</div>
					</div>
					<NavLink className="home__btn" to={"/contacts"}>
						Kontaktujte nás
						<BtnBorders />
					</NavLink>
				</div>
				<div className="home__bottom">
					<About />
					<Projects />
					{/* <ProjectsMap /> */}
				</div>
			</section>
		</>
	);
};

export default Home;
