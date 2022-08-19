import { useState } from "react";
import "./Langs.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useFetchData } from "../../hooks/useFetchData";

// import data from "../../data/langs.json";

const Langs = ({ lang, setLang, active }) => {
	const { data } = useFetchData("langs.json");
	const [isActive, setIsActive] = useState(false);

	const toggle = (event) => {
		setIsActive((prev) => !prev);
	};

	window.addEventListener("click", (event) => {
		if (!event.target.className.includes("langs")) {
			if (!isActive) return;

			setIsActive(false);
		}
	});

	if (!data) return null;

	return (
		<div className={active ? "langs active" : "langs"}>
			<button className="langs__btn" onClick={toggle}>
				<MdOutlineKeyboardArrowDown />
				<span className="langs__span">
					{lang === "ru" ? "Русский" : "O'zbekcha"}
				</span>
			</button>

			<div className={isActive ? "langs__items active" : "langs__items"}>
				{data &&
					data.items.map((item) => {
						return (
							<div
								key={`lang-${item.id}`}
								className="langs__item"
								onClick={(event) => {
									toggle(event);
									setLang(item.language);
								}}
							>
								<span className="langs__span">
									{item.render}
								</span>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Langs;
