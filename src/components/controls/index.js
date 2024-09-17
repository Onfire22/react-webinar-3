import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Controls({ onShow = () => {} }) {
  return (
    <div className="Controls">
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
