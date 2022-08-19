import "./DocumentsDownload.css";
import DocumentsDownloadCard from "../DocumentsDownloadCard";

const DocumentsDownload = ({ data, startIndex, endIndex, lang }) => {
	const displayDocuments = (documents) => {
		if (!documents) return null;

		return documents.slice(startIndex, endIndex).map((document, i) => {
			if (!document.title) return null;

			return (
				<DocumentsDownloadCard
					key={document.title.replace(" ", "-") + "-" + i}
					date={document.date}
					title={document.title}
					format={document.format}
					size={document.size}
					downloadURL={document.downloadURL}
					lang={lang}
				/>
			);
		});
	};

	if (data)
		return (
			<div className="documents-download">
				{displayDocuments(data.files)}
			</div>
		);

	return null;
};

export default DocumentsDownload;
