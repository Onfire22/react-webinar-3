import React from 'react';
import { buildPaginationArr, buildPagination } from '../../utils';
import './styles.css';

const Pagination = ({ total, limit }) => {
  const pages = Math.ceil(total / limit);
  // const pagination = buildPagination(4);
  const paginationArr = buildPaginationArr(2, pages);
  console.log(paginationArr)
  return (
    <ul className="pagination-list">
      {paginationArr.map(page => (
        <li key={page} className="pagination-list_item">
          <button className="pagination-list_button">{page}</button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
