import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { normilizePrice } from '../../utils';

function Item(props) {

  return (
    <div className="List-item">
      <div className={'Item'}>
        <div className="Item-code">{props.item.code}</div>
        <div className="Item-title">
          {props.item.title}
        </div>
        <div className="Item-actions">
          <span className="Item-price">
            {`${normilizePrice(props.item.price)} ₽`}
          </span>
          <button onClick={() => props.onAddItem(props.item.code)}>Добавить</button>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onAddItem: PropTypes.func,
};

export default React.memo(Item);
