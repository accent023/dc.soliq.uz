import Banner from "../components/Banner";
import Services from "../components/Services";
import ExtraServices from "../components/ExtraServices";
import Advantages from "../components/Advantages";
import News from "../components/News";
import About from "../components/Info";

const Home = ({ lang }) => {
	return (
		<div className="home-page">
			<main className="main">
				<Banner lang={lang} features={true} />
				<About lang={lang} />
				<Services lang={lang} />
				<ExtraServices lang={lang} />
				<Advantages lang={lang} />
				<News lang={lang} />
			</main>
		</div>
	);
};

export default Home;
