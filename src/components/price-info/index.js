import React from "react";
import Controls from '../controls/index';
import PropTypes from "prop-types";
import './index.css';
import { normilizePrice, plural } from "../../utils";

const PriceInfo = ({
  onShow = () => {},
  cart = [],
  state,
  totalCost,
}) => {
  const pluralInfo = {
    one: 'товар',
    few: 'товара',
    many: 'товаров'
  };
  return (
    <div className="Price-info">
      <span>В корзине </span>
      {
        !cart.length
        ?
        <span className="Price-info_accent">Пусто</span>
        :
        <span className="Price-info_accent">{`${cart.length} ${plural(cart.length, pluralInfo)} / ${normilizePrice(totalCost)} ₽`}</span>
      }
      <Controls onShow={onShow} state={state} />
    </div>
  );
};

PriceInfo.propTypes = {
  onShow: PropTypes.func,
  cart: PropTypes.array,
  state: PropTypes.string,
  totalCost: PropTypes.number,
};

export default React.memo(PriceInfo);
