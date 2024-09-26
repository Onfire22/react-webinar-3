import React, { useState } from 'react';
import './styles.css';

const Pagination = ({ total, limit, getNextPages }) => {
  const [active, setActive] = useState(0);

  const pages = Math.floor(total / limit);
  const buildPaginationArr = (active, pages) => {
    const arr = [...Array(pages).keys()];
    const pagination = {
      start: 0,
      divisor: '...',
      end: active >= 17 ? pages : Math.floor(pages / 2),
    };
    if (!active || active === 1) {
      return [pagination.start, ...arr.slice(1, 3), pagination.divisor, pagination.end]
    }
    if (active === 2) {
      return [pagination.start, ...arr.slice(1, active + 2), pagination.divisor, pagination.end];
    }
    if (active >= 3) {
      return [pagination.start, pagination.divisor, ...arr.slice(active - 1, active + 2), pagination.divisor, pagination.end];
    }
  };


  const getItemClass = (item) => {
    if (active === item) {
      return 'pagination-list_item-active';
    }
    return 'pagination-list_item';
  };

  const handleClick = (page) => {
    getNextPages(page * 10);
    setActive(page);
  };

  return (
    <ul className="pagination-list">
      {buildPaginationArr(active, pages).map((page, index) => (
        <li key={index} className={getItemClass(page)}>
          { page === '...' ? <span>{page}</span> : <button className="pagination-list_button" type="button" onClick={() => handleClick(page)}>{page + 1}</button> }
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
