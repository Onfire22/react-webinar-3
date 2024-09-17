import React from "react";
import Head from '../head/index';
import Body from '../modal-body/index';
import './style.css';

const ModalContent = ({ onHide }) => {
  return (
    <div className="Modal-content">
      <Head title="Корзина" type="modal" onHide={onHide}/>
      <Body />
    </div>
  );
};

export default ModalContent;
