import Content from "../Content";
import { FaCheck } from "react-icons/fa";
import "./Banner.css";
import dcImage from "../../assets/images/dc.jpg";
import { useFetchData } from "../../hooks/useFetchData";

// import data from "../../data/banner.json";

const Banner = ({ text, highlight, imgURL, features, lang }) => {
	const { data } = useFetchData("banner.json");

	if (!data) return null;

	return (
		<div className="banner">
			<Content>
				<div className="banner__cta">
					<h1 className="banner__title">{data[lang].title}</h1>

					{data[lang].text && (
						<p className="banner__text">{data[lang].text}</p>
					)}

					{data[lang].highlight && (
						<span className="banner__highlight">
							{data[lang].highlight}
						</span>
					)}

					{data[lang].list && (
						<ul className="banner__list">
							{data[lang].list.map((item) => {
								if (!item.title) return null;

								return (
									<li
										key={item.title.replace(" ", "-")}
										className="banner__item"
									>
										<FaCheck />
										<span>{item.title}</span>
									</li>
								);
							})}
						</ul>
					)}
				</div>

				<div className="banner__img">
					<img src={dcImage} alt="Data Center" />
				</div>
			</Content>
		</div>
	);
};

export default Banner;
