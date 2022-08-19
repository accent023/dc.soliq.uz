import "./Logo.css";
import logoSVG from "../../assets/svg/logo.svg";
import { useFetchData } from "../../hooks/useFetchData";

// import data from "../../data/logo.json";

const Logo = ({ classlist, lang, ...props }) => {
	const { data } = useFetchData("logo.json");

	if (!data) return null;

	return (
		<a href="/" className={`logo ${classlist}`} {...props}>
			<img
				className="logo__img"
				alt="organization's logo"
				src={logoSVG}
			/>

			<div className="logo__text">
				<span className="logo__title">{data[lang].title}</span>
				<span className="logo__sub">{data[lang].sub}</span>
			</div>
		</a>
	);
};

export default Logo;
