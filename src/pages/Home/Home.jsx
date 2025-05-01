import { NavLink } from "react-router-dom";
import TextLine from "../../components/TextLine/TextLine";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import ProjectsMap from "../../components/ProjectsMap/ProjectsMap";
import bgImg from "/assets/img/3.jpg";
import BtnBorders from "../../components/BtnBorders/BtnBorders";
import { getData } from "../../api/getData";
import { useEffect, useState } from "react";
import "./Home.scss";

const Home = () => {
	const [loading, setLoading] = useState(true);

	const [data, setData] = useState([]);

	const loadData = async () => {
		try {
			const result = await getData();
			setData(result);
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		loadData();
	}, []);

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
					{!loading && (
						<>
							<Projects data={data} />
							<ProjectsMap data={data} />
						</>
					)}
				</div>
			</section>
		</>
	);
};

export default Home;
