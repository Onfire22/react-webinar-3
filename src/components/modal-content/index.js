import React from "react";
import List from '../list/index';
import Controls from '../controls/index';
import './style.css';
import { normilizePrice } from "../../utils";

const ModalContent = ({
  list = [],
  onDelete = () => {},
  onHide = () => {},
  totalCost,
}) => {
  return (
    <div className="Modal-content">
      <header className="Modal-header">
        <h2>Корзина</h2>
        <Controls state="hide" onHide={onHide} />
      </header>
      <List list={list} onDeleteItem={onDelete} />
      <footer className="Price-info">
        <span className="Price-info_accent">Итого</span>
        <span className="Price-info_accent">{`${normilizePrice(totalCost)} ₽`}</span>
      </footer>
    </div>
  );
};

export default React.memo(ModalContent);
