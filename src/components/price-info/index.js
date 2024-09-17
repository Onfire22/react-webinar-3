import React from "react";
import Controls from '../controls/index';
import PropTypes from 'prop-types';
import './index.css';

const PriceInfo = ({ onShow, state, cart, totalCost }) => {
  return (
    <div className="Price-info">
      <span>В корзине </span>
      {!totalCost ? <b>Пусто</b> : <b>{`${cart.length} товара / ${totalCost} ₽`}</b> }
      <Controls onShow={onShow} state={state} />
    </div>
  );
};

export default React.memo(PriceInfo);
