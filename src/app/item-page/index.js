import React, { useCallback } from 'react';
import Head from '../../components/head';
import useSelector from '../../store/use-selector';
import BasketTool from '../../components/basket-tool';
import PageLayout from '../../components/page-layout';
import PageContent from '../../components/item-page-content';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useStore from '../../store/use-store';
import useLocales from '../../hooks';

const ItemPage = ({ onOpen = () => {}, onAdd = () => {} }) => {
  const store = useStore();
  const { id } = useParams();
  const { lang } = useLocales();

  const select = useSelector(state => ({
    amount: state.basket.amount,
    sum: state.basket.sum,
    item: state.itemPage.activeItem,
  }));

  const callbacks = {
    fetchItem: useCallback((id) => store.actions.itemPage.setActive(id), [store]),
  };
  
  useEffect(() => {
    callbacks.fetchItem(id);
  }, [id]);

  return (
    <>
      {select.item && Object.keys(select.item).length > 0 &&
        <PageLayout>
          <Head title={select.item.title} />
          <BasketTool lang={lang} onOpen={onOpen} amount={select.amount} sum={select.sum} />
          <PageContent lang={lang} item={select.item} onAdd={onAdd} />
        </PageLayout>
      }
    </>
  );
};

ItemPage.propTypes = {
  onOpen: PropTypes.func,
  onclose: PropTypes.func,
}

export default React.memo(ItemPage);
