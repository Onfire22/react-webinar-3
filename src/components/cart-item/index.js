import React from "react";
import { normilizePrice } from "../../utils";
import PropTypes from "prop-types";
import './style.css';

const CartItem = (props) => {
  return (
    <div className="CartItem">
      <div className="CartItem-code">{props.item.code}</div>
      <div className="CartItem-title">{props.item.title}</div>
      <div className="CartItem-actions">
        <div className="CartItem-info">
          <span className="CartItem-price">
            {`${normilizePrice(props.item.price)} ₽`}
          </span>
          <span>{props.item.quantity}</span>
        </div>
        <button onClick={() => props.onDeleteItem(props.item.code)}>Удалить</button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func,
};

export default React.memo(CartItem);
