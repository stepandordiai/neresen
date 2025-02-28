import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ProjectOne from "./pages/ProjectOne/ProjectOne";
import ScrollToTop from "./utils/ScrollToTop";
import Contacts from "./pages/Contacts/Contacts";
import Menu from "./components/Menu/Menu";
import ProjectTwo from "./pages/ProjectTwo/ProjectTwo";
import ProjectThree from "./pages/ProjectThree/ProjectThree";
import "./App.scss";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project-one" element={<ProjectOne />} />
                <Route path="/project-two" element={<ProjectTwo />} />
                <Route path="/project-three" element={<ProjectThree />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
