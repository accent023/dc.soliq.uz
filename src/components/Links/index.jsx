import "./Links.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Links = ({ links }) => (
	<div className="links">
		{links.items.map((item) => (
			<div key={`link-${item.id}`} className="links__item">
				<MdOutlineKeyboardArrowRight className="links__icon" />
				<a
					className="links__link"
					href={item.pageURL}
					target="_blank"
					rel="noreferrer"
				>
					{item.title}
				</a>
			</div>
		))}
	</div>
);

export default Links;
