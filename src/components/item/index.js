import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Item(props) {

  return (
    <div className={'Item' + (props.item.selected ? ' Item_selected' : '')}>
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">
        {props.item.title}
      </div>
      <div className="Item-actions">
        <span className="Item-price">
          {`${props.item.price} ₽`}
        </span>
        {props.type === 'list' ?
          <button onClick={() => props.onAddItem(props.item.code)}>Добавить</button> :
          <button onClick={() => props.onDelete(props.item.code)}>Удалить</button>
        }
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
};

// Item.defaultProps = {
//   onDelete: () => {},
//   onSelect: () => {},
// };

export default React.memo(Item);
