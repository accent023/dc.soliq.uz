import "./NewsCard.css";

const NewsCard = ({ title, text, imgURL, pageURL, date, lang }) => (
	<div className="news-card">
		<div className="news-card__head">
			<img className="news-card__img" src={imgURL} alt="Card" />
		</div>

		<div className="news-card__body">
			<h1 className="news-card__title">{title}</h1>
			<p className="news-card__text">
				{text && text.substring(0, 120) + "..."}
			</p>
			<a
				className="news-card__btn"
				role="button"
				href={pageURL}
				target="_blank"
				rel="noreferrer"
			>
				{lang && lang === "ru" ? "Подробнее" : "Batafsil"}
			</a>
		</div>

		<span className="news-card__date">{date}</span>
	</div>
);

export default NewsCard;
