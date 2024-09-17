import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Controls({ cart, onShow = () => {} }) {
  // add pluarize && styles
  return (
    <div className="Controls">
      <span>В корзине:</span>
      {!cart.length ? <span>Пусто</span> : <span>{`${cart.length} товаров`}</span>}
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
