import "./DocumentsDownloadCard.css";
import { RiFileExcel2Line } from "react-icons/ri";
import { GrDocumentPdf } from "react-icons/gr";
import { FaRegFileWord } from "react-icons/fa";
import { FaFileArchive } from "react-icons/fa";

const DocumentsDownloadCard = ({ date, title, format, downloadURL, lang }) => {
	const renderExtIcon = (ext) => {
		if (ext.toLowerCase() === "xlsx") {
			return <RiFileExcel2Line className={ext} />;
		} else if (ext.toLowerCase() === "pdf") {
			return <GrDocumentPdf className={ext} />;
		} else if (
			ext.toLowerCase() === "docx" ||
			ext.toLowerCase() === "doc"
		) {
			return <FaRegFileWord className={ext} />;
		} else if (ext.toLowerCase() === "zip" || ext.toLowerCase() === "rar") {
			return <FaFileArchive className={ext} />;
		} else {
			return null;
		}
	};

	return (
		<div className="documents-download-card">
			<div className="documents-download-card__body">
				{date && (
					<span className="documents-download-card__date">
						{date}
					</span>
				)}
				{format && (
					<span className="documents-download-card__format">
						{renderExtIcon(format)}
					</span>
				)}
			</div>

			<div className="documents-download-card__foot">
				<div className="documents-download-card__props">
					<h3 className="documents-download-card__title">{title}</h3>
				</div>

				<a
					role="button"
					href={downloadURL || "#"}
					className="documents-download-card__btn"
				>
					{lang === "ru" ? "Скачать" : "Yuklab olish"}
				</a>
			</div>
		</div>
	);
};

export default DocumentsDownloadCard;
