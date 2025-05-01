import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Contacts from "./pages/Contacts/Contacts";
import Menu from "./components/Menu/Menu";
import { useEffect, useState } from "react";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import { getData } from "./api/getData";
import "./App.scss";
import { handleHeaderMode } from "./global/handleHeaderMode";
import LoadingData from "./components/LoadingData/LoadingData";

function App() {
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

	useEffect(() => {
		document.addEventListener("scroll", handleHeaderMode);
	}, []);

	return (
		<Router>
			{loading ? (
				<LoadingData />
			) : (
				<>
					<ScrollToTop />
					<Header />
					<Menu />
					<Routes>
						<Route path="/" element={<Home data={data} />} />
						<Route
							path="/project-page/:id"
							element={<ProjectPage data={data} />}
						/>
						<Route path="/contacts" element={<Contacts />} />
					</Routes>
					<Footer />
				</>
			)}
		</Router>
	);
}

export default App;
