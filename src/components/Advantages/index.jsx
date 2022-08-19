import "./Advantages.css";

import Content from "../Content";
import AdvantagesCard from "../AdvantagesCard";
import { useFetchData } from "../../hooks/useFetchData";

// local...
// import data from "../../data/advantages.json";

const Advantages = ({ lang }) => {
    const { data } = useFetchData("advantages.json");

    if (!data) return null;

    return (
        <div className="advantages">
            <Content>
                <h2 className="advantages__title">{data[lang].title}</h2>

                <div className="advantages__cards">
                    {data &&
                        data[lang].items.map((item) => (
                            <AdvantagesCard
                                key={item.title.replace(" ", "-")}
                                title={item.title}
                                text={item.text}
                                imgURL={item.imgURL}
                                index={item.id}
                            />
                        ))}
                </div>
            </Content>
        </div>
    );
};

export default Advantages;
