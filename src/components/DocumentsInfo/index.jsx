import "./DocumentsInfo.css";
import { FcDocument } from "react-icons/fc";

import { useFetchData } from "../../hooks/useFetchData";
// import data from "../../data/documents.json";

const DocumentsInfo = ({ lang }) => {
	const { data } = useFetchData("documents.json");

	if (!data) return null;

	return (
		<div className="documents-info">
			<FcDocument className="documents-info__icon" />

			<div className="documents-info__block">
				<h3 className="documents-info__title">{data[lang].title}</h3>

				<p className="documents-info__text">{data[lang].text}</p>
			</div>
		</div>
	);
};

export default DocumentsInfo;
