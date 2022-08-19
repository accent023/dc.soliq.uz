import { useState } from "react";
import "./Documents.css";
import DocumentsInfo from "../../components/DocumentsInfo";
import DocumentsDownload from "../../components/DocumentsDownload";
import Pagination from "../../components/Pagination";
import Content from "../../components/Content";
import { useFetchData } from "../../hooks/useFetchData";
// import data from "../../data/documents";

const Documents = ({ lang }) => {
	const { data } = useFetchData("documents.json");

	const [currentPage, setCurrentPage] = useState(0);
	const [itemsPerPage] = useState(8);

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const pageCount = Math.ceil(data && data[lang].files.length / itemsPerPage);

	const handlePageChange = ({ selected }) => setCurrentPage(selected);

	if (!data) return null;

	return (
		<div className="documents-download-page">
			<main className="main">
				<Content>
					<DocumentsInfo lang={lang} />

					<div className="downloads">
						<DocumentsDownload
							data={data[lang]}
							startIndex={startIndex}
							endIndex={endIndex}
							lang={lang}
						/>

						<Pagination
							pageCount={pageCount}
							onPageChange={handlePageChange}
						/>
					</div>
				</Content>
			</main>
		</div>
	);
};

export default Documents;
