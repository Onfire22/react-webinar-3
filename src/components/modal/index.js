import React from "react";
import './style.css';
import ModalContent from '../modal-content/index';

const Modal = ({ show, onHide, list, onDelete }) => {
  return (
    <div className={show ? 'Modal' : 'visually-hidden'}>
      <ModalContent onHide={onHide} list={list} onDelete={onDelete} />
    </div>
  );
};

export default Modal;
