import { memo } from 'react';
import PropTypes from 'prop-types';
import useLocales from '../../hooks';
import './style.css';

function Controls({ onAdd = () => {} }) {
  const { lang } = useLocales();

  return (
    <div className="Controls">
      <button onClick={() => onAdd()}>Добавить</button>
    </div>
  );
}

Controls.propTypes = {
  onAdd: PropTypes.func,
};

export default memo(Controls);
