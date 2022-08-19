import "./AdvantagesCard.css";

const AdvantagesCard = ({ title, text, imgURL, index }) => (
    <div className="advantages-card">
        <img className="advantages-card__icon" alt="icon" src={imgURL} />

        <h3 className="advantages-card__title">{title}</h3>
        <p className="advantages-card__text">{text}</p>

        <span className="advantages-card__index">{index}</span>
    </div>
);

export default AdvantagesCard;
