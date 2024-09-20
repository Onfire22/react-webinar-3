import React from "react";
import Controls from '../controls/index';
import './index.css';
import { normilizePrice, plural } from "../../utils";

const PriceInfo = ({
  onShow = () => {},
  cart = [],
  state,
  totalCost,
}) => {
  return (
    <div className="Price-info">
      <span>В корзине </span>
      {!cart.length ? <span className="Price-info_accent">Пусто</span> : <span className="Price-info_accent">{`${cart.length} ${plural(cart.length, { one: 'товар', few: 'товара', many: 'товаров' })} / ${normilizePrice(totalCost)} ₽`}</span> }
      <Controls onShow={onShow} state={state} />
    </div>
  );
};

export default React.memo(PriceInfo);
