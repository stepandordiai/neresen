import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Contacts from "./pages/Contacts/Contacts";
import Menu from "./components/Menu/Menu";
import { useEffect } from "react";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import { handleHeaderMode } from "./global/handleHeaderMode";
import projectsData from "./data/projects-data.json";
import "./App.scss";

function App() {
	useEffect(() => {
		document.addEventListener("scroll", handleHeaderMode);
	}, []);

	return (
		<Router>
			<ScrollToTop />
			<Header />
			<Menu />
			<Routes>
				<Route path="/" element={<Home projectsData={projectsData} />} />
				<Route
					path="/project-page/:id"
					element={<ProjectPage projectsData={projectsData} />}
				/>
				<Route path="/contacts" element={<Contacts />} />
			</Routes>
			<Footer projectsData={projectsData} />
		</Router>
	);
}

export default App;
