import { memo } from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import { numberFormat } from '../../utils';
import LinkToMainPage from '../link-to-main-page';
import { ROUTES } from '../../routes';
import './style.css';

function BasketTool({ sum = 0, amount = 0, onOpen = () => {}, lang }) {
  const cn = bem('BasketTool');

  return (
    <div className={cn()}>
      <LinkToMainPage
        route={ROUTES.main()}
        className={cn('link')}
        title={lang.controls.main}
      />
      <div className={cn('info')}>
        <span className={cn('label')}>{lang.controls.inCart}</span>
        <span className={cn('total')}>
          {amount
            ? `${amount} ${lang.controls.plurItems(amount)} / ${numberFormat(sum)} ₽`
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
