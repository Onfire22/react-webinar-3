import React from "react";
import Controls from "../controls";
import List from '../list/index'
import PropTypes, { number } from "prop-types";
import { normilizePrice } from "../../utils";
import './style.css';

const Cart = ({
  Component,
  onHide = () => {},
  onDelete = () => {},
  cart = [],
  totalCost,
}) => {
  return (
    <div className="Cart">
    <header className="Cart-header">
      <h2>Корзина</h2>
      <Controls state="hide" onHide={onHide} />
    </header>
    <List Component={Component} type="cart" list={cart} onDeleteItem={onDelete} />
    <footer className="Cart-info">
      <span className="Price-info_accent">Итого </span>
      <span className="Price-info_accent">{`${normilizePrice(totalCost)} ₽`}</span>
    </footer>
    </div>
  );
};

Cart.propTypes = {
  Comment: PropTypes.node,
  cart: PropTypes.array,
  onDelete: PropTypes.func,
  onHide: PropTypes.func,
  totalCost: number,
};

export default Cart;
