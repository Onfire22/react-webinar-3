import { memo, useCallback } from 'react';
import { numberFormat } from '../../utils';
import { cn as bem } from '@bem-react/classname';
import { Link } from 'react-router-dom';
import LinkToMainPage from '../link-to-main-page';
import PropTypes from 'prop-types';
import { ROUTES } from '../../routes';
import useLocales from '../../hooks';
import './style.css';

function ItemBasket(props = {}) {
  const cn = bem('ItemBasket');
  const { lang } = useLocales();

  const callbacks = {
    onRemove: e => props.onRemove(props.item._id),
  };

  return (
    <div className={cn()}>
      {/*<div className={cn('code')}>{props.item._id}</div>*/}
      <Link to={ROUTES.item(props.item._id)} className={cn('title')} onClick={() => props.onClose()}>{props.item.title}</Link>
      <div className={cn('right')}>
        <div className={cn('cell')}>{numberFormat(props.item.price)} ₽</div>
        <div className={cn('cell')}>{numberFormat(props.item.amount || 0)} {lang.item.count}</div>
        <div className={cn('cell')}>
          <button onClick={callbacks.onRemove}>{lang.buttons.delete}</button>
        </div>
      </div>
    </div>
  );
}

ItemBasket.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number,
  }).isRequired,
  onRemove: PropTypes.func,
};

export default memo(ItemBasket);
