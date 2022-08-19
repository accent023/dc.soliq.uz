import Content from "../Content";
import { Link } from "react-router-dom";
import "./Services.css";
import { useFetchData } from "../../hooks/useFetchData";

// import data from "../../data/services.json";

const Services = ({ lang }) => {
	const { data } = useFetchData("services.json");

	return (
		<div className="services">
			<div className="services__overlay services__overlay--1" />
			<div className="services__overlay services__overlay--2" />

			<Content>
				{data &&
					data[lang].items.map((item) => {
						return (
							<div
								key={item.title.replace(" ", "-")}
								className={`service service--${item.id}`}
							>
								<img
									className="service__icon"
									src={item.imgURL}
									alt={item.title}
								/>

								<h2 className="service__title">{item.title}</h2>

								<Link
									role="button"
									className="service__btn"
									to={item.pageURL}
								>
									{lang && lang === "ru"
										? "Посмотреть"
										: "Ko'rish"}
								</Link>
							</div>
						);
					})}
			</Content>
		</div>
	);
};

export default Services;
