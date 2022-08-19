import "./SocialNetworks.css";
import { BsFacebook } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

const SocialNetworks = ({ items }) => {
	const renderIcons = (network) => {
		if (network.toLowerCase() === "telegram") {
			return (
				<BsTelegram className="social-networks__icon social-networks__icon--telegram" />
			);
		} else if (network.toLowerCase() === "facebook") {
			return (
				<BsFacebook className="social-networks__icon social-networks__icon--facebook" />
			);
		}

		return null;
	};

	return (
		<div className="social-networks">
			<a href="/" target="_blank" className="social-networks__link">
				<BsFacebook className="social-networks__icon social-networks__icon--facebook" />
				Facebook
			</a>

			<a href="/" target="_blank" className="social-networks__link">
				<BsTelegram className="social-networks__icon social-networks__icon--telegram" />
				Telegram
			</a>
		</div>
	);
};

export default SocialNetworks;
