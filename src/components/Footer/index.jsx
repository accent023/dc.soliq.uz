import "./Footer.css";
import Content from "../Content";
import Contacts from "../Contacts";
import Links from "../Links";
import Copyright from "../Copyright";
import { useFetchData } from "../../hooks/useFetchData";

// import data from "../../data/footer.json";

const Footer = ({ lang }) => {
	const { data } = useFetchData("footer.json");

	if (!data) return null;

	return (
		<footer className="footer">
			<Content>
				<div className="footer__block">
					<h2 className="footer__title">
						{data[lang].contacts.title}
					</h2>

					<Contacts contacts={data[lang].contacts} lang={lang} />
				</div>

				<div className="footer__block">
					<h2 className="footer__title">{data[lang].links.title}</h2>
					<Links links={data[lang].links} lang={lang} />
				</div>

				{/*<div className="footer__block">
					<h2 className="footer__title">{data[lang].social.title}</h2>
					<SocialNetworks lang={lang} />
				</div>*/}
			</Content>

			<Copyright copyright={data[lang].copyright} />
		</footer>
	);
};

export default Footer;
