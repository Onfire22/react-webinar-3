import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Controls({ onShow = () => {} }) {
  return (
    <div className="Controls">
      <span>В корзине:</span>
      <span>Пусто</span>
      <button onClick={() => onShow()}>Перейти</button>
    </div>
  );
}

Controls.propTypes = {
  onShow: PropTypes.func,
};

// Controls.defaultProps = {
//   onAdd: () => {},
// };

export default React.memo(Controls);
