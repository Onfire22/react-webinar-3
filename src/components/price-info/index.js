import React from "react";
import Controls from '../controls/index';
import './index.css';

const PriceInfo = ({
  onShow = () => {},
  cart = [],
  state,
  totalCost,
}) => {
  return (
    <div className="Price-info">
      <span>В корзине </span>
      {!totalCost ? <b>Пусто</b> : <b>{`${cart.length} товара / ${totalCost} ₽`}</b> }
      <Controls onShow={onShow} state={state} />
    </div>
  );
};

export default React.memo(PriceInfo);
