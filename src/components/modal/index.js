import React, { useEffect, useRef } from "react";
import ModalContent from '../modal-content/index';
import './style.css';

const Modal = ({
  list = [],
  onDelete = () => {},
  onHide = () => {},
  show,
  totalCost,
}) => {
  const modalRef = useRef(null);

  const handleClickHide = ({ target }) => {
    if (target === modalRef.current) {
      onHide();
    }
  };

  const handleEscClose = ({ key }) => {
    if (key === 'Escape') {
      onHide();
    }
  };

  useEffect(() => {
    window.addEventListener('click', (e) => handleClickHide(e));
    window.addEventListener('keydown', (e) => handleEscClose(e));
    return () => {
      window.removeEventListener('click', handleClickHide);
      window.removeEventListener('keydown', handleEscClose);
    }
  }, [show]);

  return (
    <div ref={modalRef} className={show ? 'Modal' : 'visually-hidden'}>
      <ModalContent list={list} onDelete={onDelete} totalCost={totalCost} onHide={onHide} />
    </div>
  );
};

export default React.memo(Modal);
