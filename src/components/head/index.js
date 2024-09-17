import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Head({ title, type, onHide }) {
  return (
    <div className="Head">
      <h1>{title}
        {type === 'modal' && <button onClick={() => onHide()}>Закрыть</button>}
      </h1>
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.node,
  type: PropTypes.string,
};

export default React.memo(Head);
