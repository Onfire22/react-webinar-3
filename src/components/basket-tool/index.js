import { memo } from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import { numberFormat, plural } from '../../utils';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import useLocales from '../../hooks/index';
import './style.css';

function BasketTool({ sum = 0, amount = 0, onOpen = () => {} }) {
  const { lang } = useLocales();
  const cn = bem('BasketTool');

  return (
    <div className={cn()}>
      <Link className={cn('main')} to={ROUTES.main()}>{lang.controls.main}</Link>
      <div className={cn('info')}>
        <span className={cn('label')}>{lang.controls.inCart}</span>
        <span className={cn('total')}>
          {amount
            ? `${amount} ${plural(amount, {
                one: 'товар',
                few: 'товара',
                many: 'товаров',
              })} / ${numberFormat(sum)} ₽`
            : lang.controls.empty}
        </span>
        <button onClick={onOpen}>{lang.buttons.goTo}</button>
      </div>
    </div>
  );
}

BasketTool.propTypes = {
  onOpen: PropTypes.func.isRequired,
  sum: PropTypes.number,
  amount: PropTypes.number,
};

export default memo(BasketTool);
