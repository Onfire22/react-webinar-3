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
      {!totalCost ? <span className="Price-info_accent">Пусто</span> : <span className="Price-info_accent">{`${cart.length} товара / ${totalCost} ₽`}</span> }
      <Controls onShow={onShow} state={state} />
    </div>
  );
};

export default React.memo(PriceInfo);
