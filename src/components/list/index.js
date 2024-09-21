import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item';
import CartItem from '../cart-item';
import './style.css';

function List({
  Component,
  list = [],
  onAddItem = () => {},
  onDeleteItem = () => {},
}) {
  return (
    <div className="List">
      {list.map(item => (
        <div key={item.code} className="List-item">
          <Component item={item} onAddItem={onAddItem} onDeleteItem={onDeleteItem}  />
        </div>
      ))}
    </div>
  );
}

/*

первоначально сделал так
{list.map(item => {
  return type === 'product'
  ? 
  <Item key={item.code} item={item} onAddItem={onAddItem} />
  :
  <CartItem key={item.code} item={item} onDelete={onDeleteItem} />;
})}
но потом решил сделать совсем универсально, чтобы вообще любой список со своими пропами рендерился независимо

*/


List.propTypes = {
  Component: PropTypes.elementType,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    }),
  ).isRequired,
  onDeleteItem: PropTypes.func,
  onSelectItem: PropTypes.func,
};

export default React.memo(List);
