import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import TextLine from "../../components/TextLine/TextLine";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import ProjectsMap from "../../components/ProjectsMap/ProjectsMap";
import BtnBorders from "../../components/BtnBorders/BtnBorders";
import bgImg from "/img/3.jpg";
import "./Home.scss";

const Home = ({ data }) => {
	function revealImg() {
		document.querySelector(".home-bg-img").classList.add("home-bg-img--active");
	}

	return (
		<>
			<Helmet>
				<title>Neresen | Vítejte na stránkách společnosti Neresen a.s.</title>
				<link rel="canonical" href="https://neresen.cz/" />
			</Helmet>
			<div className="home-bg-img-wrapper">
				<img onLoad={revealImg} className="home-bg-img" src={bgImg} alt="" />
			</div>
			<div className="home">
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
					<Projects data={data} />
					<ProjectsMap data={data} />
				</div>
			</div>
		</>
	);
};

export default Home;
