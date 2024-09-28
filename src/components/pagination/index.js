import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Pagination = ({ total, limit, getNextPages }) => {
  const [active, setActive] = useState(0);

  const pages = Math.floor(total / limit);
  const buildPagination = (active, pages) => {
    const arr = [...Array(pages).keys()];
    const pagination = {
      start: 0,
      divisor: '...',
      end: pages,
    };
    if (!active || active === 1) {
      return [pagination.start, ...arr.slice(1, 3), pagination.divisor, pagination.end]
    }
    if (active === 2) {
      return [pagination.start, ...arr.slice(1, active + 2), pagination.divisor, pagination.end];
    }
    if (active === pages) {
      return [pagination.start, pagination.divisor, ...arr.slice(-2), pagination.end];
    }
    if (active === pages - 1) {
      return [pagination.start, pagination.divisor, ...arr.slice(-3), pagination.end];
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

  useEffect(() => {
    getNextPages();
    setActive(0);
  }, []);

  return (
    <ul className="pagination-list">
      {buildPagination(active, pages).map((page, index) => (
        <li key={index} className={getItemClass(page)}>
          { page === '...' ? <span>{page}</span> : <button className="pagination-list_button" type="button" onClick={() => handleClick(page)}>{page + 1}</button> }
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  total: PropTypes.number,
  limit: PropTypes.number,
  getNextPages: PropTypes.func,
}

export default React.memo(Pagination);
