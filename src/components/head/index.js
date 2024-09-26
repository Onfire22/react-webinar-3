import { memo } from 'react';
import PropTypes from 'prop-types';
import useLocales from '../../hooks';
import './style.css';

function Head({ title }) {
  const { handleSetLang } = useLocales();

  return (
    <div className="Head">
      <h1>{title}</h1>
      <select onChange={({ target }) => handleSetLang(target.value) } name="langs">
        <option value="ru">ru</option>
        <option value="en">en</option>
      </select>
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.node,
};

export default memo(Head);
