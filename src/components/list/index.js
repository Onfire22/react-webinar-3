import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item';
import CartItem from '../cart-item';
import './style.css';

function List({
  type = 'product',
  list = [],
  onAddItem = () => {},
  onDeleteItem = () => {},
}) {
  return (
    <div className="List">
      {list.map(item => {
        return type === 'product'
        ? 
        <Item key={item.code} item={item} onAddItem={onAddItem} />
        :
        <CartItem key={item.code} item={item} onDelete={onDeleteItem} />;
      })}
    </div>
  );
}

List.propTypes = {
  type: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    }),
  ).isRequired,
  onDeleteItem: PropTypes.func,
  onSelectItem: PropTypes.func,
};

export default React.memo(List);
