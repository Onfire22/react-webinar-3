import { memo, useCallback, useEffect } from 'react';
import useStore from '../../store/use-store';
import { useParams } from 'react-router';
import useSelector from '../../store/use-selector';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import BasketTool from '../../components/basket-tool';
import ItemInfo from '../../components/item-info';
import Basket from '../basket';

function Item() {
  const store = useStore();
  const { id } = useParams();
  const item = useSelector(state => state.catalog.item);
  const activeModal = useSelector(state => state.modals.name);

  useEffect(() => {
    store.actions.catalog.loadItemInfo(id);
    return () => {
      store.actions.catalog.resetState();
    };
  }, []);

  const select = useSelector(state => ({
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  const callbacks = {
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
  };

  return (
    item && (
      <PageLayout>
        <Head title={item.title} />
        <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum} />
        <ItemInfo
          id={item._id}
          description={item.description}
          price={item.price}
          onAdd={callbacks.addToBasket}
        />
        {activeModal === 'basket' && <Basket />}
      </PageLayout>
    )
  );
}

export default memo(Item);
