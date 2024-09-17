import React from "react";
import Head from '../head/index';
import List from '../list/index';
import './style.css';

const ModalContent = ({ onHide, list, onDelete }) => {
  return (
    <div className="Modal-content">
      <Head title="Корзина" type="modal" onHide={onHide}/>
      <List list={list} onDeleteItem={onDelete} />
    </div>
  );
};

export default ModalContent;
