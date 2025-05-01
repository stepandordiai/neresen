import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Contacts from "./pages/Contacts/Contacts";
import Menu from "./components/Menu/Menu";

import ProjectPage from "./pages/ProjectPage/ProjectPage";
// import { getData } from "./api/getData";
import "./App.scss";
import { handleHeaderMode } from "./global/handleHeaderMode";

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
				<Route path="/" element={<Home />} />
				<Route path="/project-page/:id" element={<ProjectPage />} />
				<Route path="/contacts" element={<Contacts />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
