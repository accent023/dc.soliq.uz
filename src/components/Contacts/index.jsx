import "./Contacts.css";
import { BsTelephoneForward } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { ImOffice } from "react-icons/im";

const Contacts = ({ contacts }) => (
	<div className="contacts">
		<div className="contacts__item phone">
			<BsTelephoneForward className="contacts__icon" />
			<a className="contacts__link" href={`tel:${contacts.phone.ref}`}>
				{contacts.phone.render}
			</a>
		</div>

		<div className="contacts__item email">
			<MdOutlineAlternateEmail className="contacts__icon" />
			<a className="contacts__link" href={`mailto:${contacts.email}`}>
				{contacts.email}
			</a>
		</div>

		<div className="contacts__item location">
			<ImOffice className="contacts__icon" />
			<a className="contacts__link" href="/" target="_blank">
				{contacts.location}
			</a>
		</div>
	</div>
);

export default Contacts;
