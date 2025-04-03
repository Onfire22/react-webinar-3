import { memo, useCallback, useEffect, useMemo } from 'react';
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import Item from '../../components/item';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import BasketTool from '../../components/basket-tool';
import List from '../../components/list';
import Basket from '../basket';
import Pagination from '../../components/pagination';
import { buildPagination } from '../../utils';

function Main() {
  const store = useStore();
  const activeModal = useSelector(state => state.modals.name);

  const select = useSelector(state => ({
    list: state.catalog.list,
    limit: state.catalog.limit,
    skip: state.catalog.skip,
    currentPage: state.catalog.currentPage,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  const pagination = useMemo(
    () => buildPagination(select.limit, 10, select.currentPage),
    [select.limit, select.currentPage],
  );

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    // Клик по элементу пагинации
    onPaginationClick: useCallback(
      page => typeof page === 'number' && store.actions.catalog.setPagination(page),
      [store],
    ),
  };

  const renders = {
    item: useCallback(
      item => {
        return <Item item={item} onAdd={callbacks.addToBasket} />;
      },
      [callbacks.addToBasket],
    ),
  };

  useEffect(() => {
    store.actions.catalog.load(select.skip);
  }, [select.skip]);

  return (
    <PageLayout>
      <Head title="Магазин" />
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum} />
      <List list={select.list} renderItem={renders.item} />
      <Pagination
        pages={pagination}
        currentPage={select.currentPage}
        onPaginationClick={callbacks.onPaginationClick}
      />
      {activeModal === 'basket' && <Basket />}
    </PageLayout>
  );
}

export default memo(Main);
