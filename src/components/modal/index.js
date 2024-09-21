import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import './style.css';

const Modal = ({ onHide = () => {}, children, show }) => {
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
      <div className="Modal-content">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  onHide: PropTypes.func,
  children: PropTypes.node,
  show: PropTypes.bool,
};

export default React.memo(Modal);
