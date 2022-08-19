import Content from "../../components/Content";
import "./About.css";
import { useFetchData } from "../../hooks/useFetchData";
// import data from "../../data/about";

const About = ({ lang }) => {
	const { data } = useFetchData("about.json");

	if (!data) return null;

	return (
		<div className="about-page">
			<Content>
				<main className="main">
					<div className="about">
						<div className="about__body">
							<h2 className="about__title">{data[lang].title}</h2>

							<p className="about__text">
								{data[lang].first_text}
							</p>

							<p className="about__text">
								{data[lang].second_text}
							</p>

							<p className="about__text">
								{data[lang].third_text}
							</p>
						</div>

						<img
							className="about__img"
							alt="structure"
							src={`${
								data[lang].imgURL
									? data[lang].imgURL
									: "/images/diagram.png"
							}`}
						/>
					</div>
				</main>
			</Content>
		</div>
	);
};

export default About;
