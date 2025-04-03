import './style.css';

function Pagination({ pages, currentPage, onPaginationClick }) {
  return (
    <div className="Pagination">
      {pages &&
        pages.map((page, index) => {
          return (
            <div
              className={`Pagination-page ${currentPage === page && 'Pagination-page_active'}`}
              onClick={() => onPaginationClick(page)}
              key={index}
            >
              {page}
            </div>
          );
        })}
    </div>
  );
}

export default Pagination;
