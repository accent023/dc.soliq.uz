// Import styles
import "./Header.css";
import Hamburger from "hamburger-react";
import { useState } from "react";

// Import components
import Content from "../Content";
import Logo from "../Logo";
import Langs from "../Langs";
import Navigation from "../Navigation";

const Header = ({ lang, setLang }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<header className="header">
			<Content>
				<Logo lang={lang} />

				<Hamburger
					className="hamburger"
					toggled={isActive}
					toggle={setIsActive}
				/>

				<Navigation
					lang={lang}
					active={isActive}
					setIsActive={setIsActive}
				/>

				<Langs lang={lang} setLang={setLang} active={isActive} />
			</Content>
		</header>
	);
};

export default Header;
