import "./Pagination.css";
import ReactPaginate from "react-paginate";

const Pagination = ({ onPageChange, pageCount }) => {
	return (
		<ReactPaginate
			previousLabel="<<"
			nextLabel=">>"
			pageCount={pageCount}
			onPageChange={onPageChange}
			containerClassName="pagination"
			previousClassName="pagination__previous"
			nextClassName="pagination__next"
			pageLinkClassName="pagination__link"
			disabledClassName="pagination__item--disabled"
			disabledLinkClassName="pagination__link--disabled"
			activeClassName="pagination__item--actvie"
			activeLinkClassName="pagination__link--active"
		/>
	);
};

export default Pagination;
