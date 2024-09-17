import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Controls({ onShow = () => {}, onHide = () => {}, state }) {
  return (
    <div className="Controls">  
      {state === 'hide' && <button type="button" onClick={() => onHide()}>Закрыть</button>}
      {state === 'show' && <button type="button" onClick={() => onShow()}>Перейти</button>}
    </div>
  );
}

Controls.propTypes = {
  onShow: PropTypes.func,
  onHide: PropTypes.func,
  state: PropTypes.string,
};

export default React.memo(Controls);
