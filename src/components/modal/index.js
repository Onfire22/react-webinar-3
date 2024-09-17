import React from "react";
import './style.css';
import ModalContent from '../modal-content/index';

const Modal = ({ show, onHide }) => {
  return (
    <div className={show ? 'Modal' : 'visually-hidden'}>
      <ModalContent onHide={onHide} />
    </div>
  );
};

export default Modal;
