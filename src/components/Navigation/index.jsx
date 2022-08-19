import "./Navigation.css";
import { Link } from "react-router-dom";
import { Link as Smooth } from "react-scroll";
import { useLocation } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
// -- Data --
// import data from "../../data//navigation.json";

const Navigation = ({ lang, active, setIsActive }) => {
	const { pathname } = useLocation();
	const { data } = useFetchData("navigation.json");

	return (
		<nav className={active ? "navigation active" : "navigation"}>
			{data
				? data[lang].items.map((item) => {
						if (item.smooth === true) {
							return pathname.includes("about-us") &&
								item.id !== 5 ? null : (
								<Smooth
									key={
										item.title.replace(" ", "-") +
										"-" +
										item.id
									}
									className="navigation__item"
									to={item.pageURL}
									smooth={true}
									spy={true}
									onClick={() => setIsActive(false)}
								>
									{item.title}
								</Smooth>
							);
						}

						return pathname.includes("about-us") &&
							item.id !== 1 ? null : (
							<Link
								key={
									item.title.replace(" ", "-") + "-" + item.id
								}
								to={item.pageURL}
								className="navigation__item"
								onClick={() => setIsActive(false)}
							>
								{item.title}
							</Link>
						);
				  })
				: "Нет данных"}
		</nav>
	);
};

export default Navigation;
