import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// -- Components --
import Header from "./components/Header";
import Footer from "./components/Footer";

// -- Pages --
import Home from "./pages/Home";
import Documents from "./pages/Documents";
import About from "./pages/About";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

const App = () => {
	const [lang, setLang] = useState("uz");

	return (
		<div className="App">
			<Router>
				<ScrollToTop />

				<Header lang={lang} setLang={setLang} />

				<Routes>
					<Route exact="/" path="/" element={<Home lang={lang} />} />
					<Route path="/docs" element={<Documents lang={lang} />} />
					<Route path="/about-us" element={<About lang={lang} />} />
					<Route path="*" element={<div>Page not found</div>} />
				</Routes>

				<Footer lang={lang} />
			</Router>
		</div>
	);
};

export default App;
