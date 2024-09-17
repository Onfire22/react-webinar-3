import React from "react";
import ModalContent from '../modal-content/index';
import './style.css';

const Modal = ({ show, list, onDelete, onHide, totalCost }) => {
  return (
    <div className={show ? 'Modal' : 'visually-hidden'}>
      <ModalContent list={list} onDelete={onDelete} totalCost={totalCost} onHide={onHide} />
    </div>
  );
};

export default React.memo(Modal);
