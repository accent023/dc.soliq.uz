import "./ExtraServices.css";
import Content from "../Content";
import { useFetchData } from "../../hooks/useFetchData";
// import data from "../../data/extra.json";

const ExtraServices = ({ lang }) => {
    const { data } = useFetchData("extra.json");

    if (!data) return null;

    return (
        <div className="extra-services">
            <Content>
                <h2 className="extra-services__title">{data[lang].title}</h2>

                <div className="extra-services__cards">
                    {data[lang].items.map((item) => {
                        return (
                            <div key={item.id} className="extra-services__card">
                                <img
                                    className="extra-services__icon"
                                    alt="service icon"
                                    src={item.imgURL}
                                />
                                <h3 className="extra-services__service-name">
                                    {item.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </Content>
        </div>
    );
};

export default ExtraServices;
