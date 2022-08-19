import "./Info.css";
import Content from "../Content";
import { useFetchData } from "../../hooks/useFetchData";

// import data from "../../data/info.json";

const About = ({ lang }) => {
	const { data } = useFetchData("info.json");

	if (!data) return null;

	return (
		<div className="info">
			<Content>
				<h2 className="info__title">{data[lang].title}</h2>

				<p className="info__text">{data[lang].first_text}</p>

				<p className="info__text">{data[lang].second_text}</p>
			</Content>
		</div>
	);
};

export default About;
