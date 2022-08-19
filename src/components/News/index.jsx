import "./News.css";
import Content from "../Content";
import NewsCard from "../NewsCard";
import Pagination from "../Pagination";
import { useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";
// import data from "../../data/news.json";

const News = ({ lang }) => {
	const { data } = useFetchData("news.json");

	const [currentPage, setCurrentPage] = useState(0);
	const [itemsPerPage] = useState(3);

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const pageCount = Math.ceil(data && data[lang].news.length / itemsPerPage);

	const handlePageChange = ({ selected }) => setCurrentPage(selected);

	const displayDocuments = (documents) => {
		if (!documents) return null;

		return documents.slice(startIndex, endIndex).map((item, i) => {
			if (!document.title) return null;

			return (
				<NewsCard
					lang={lang}
					key={item.id}
					title={item.title}
					text={item.text}
					imgURL={item.imgURL}
					pageURL={item.pageURL}
					date={item.date}
				/>
			);
		});
	};

	if (!data) return null;

	return (
		<div className="news">
			<Content>
				<h2 className="news__title">{data[lang].title}</h2>

				<div className="news__cards">
					{displayDocuments(data[lang].news)}
				</div>

				<Pagination
					pageCount={pageCount}
					onPageChange={handlePageChange}
				/>
			</Content>
		</div>
	);
};

export default News;
