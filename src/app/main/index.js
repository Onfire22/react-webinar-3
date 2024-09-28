import { memo, useCallback, useEffect } from 'react';
import Item from '../../components/item';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import BasketTool from '../../components/basket-tool';
import List from '../../components/list';
import Pagination from '../../components/pagination';
import useLocales from '../../hooks';
import { ROUTES } from '../../routes';
import useSelector from '../../store/use-selector';
import useStore from '../../store/use-store';

function Main() {
  const store = useStore();
  const { lang } = useLocales();

  const callbacks = {
     // Добавление в корзину
     addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
     // Открытие модалки корзины
     openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
     // Устанавливаем размер всех айтемов
     setItemsLength: useCallback(() => store.actions.catalog.setDataLength(), [store]),
     // Устанавливаем активную страницу пагинации
     setPaginationPage: useCallback((id) => store.actions.catalog.setActivePage(id), [store]),
      // Получение страниц
     loadPages: useCallback((skip) => store.actions.catalog.loadItems(skip), [store]),
  };

  const renders = {
    item: useCallback(
      item => {
        return <Item lang={lang} item={item} onAdd={callbacks.addToBasket} path={ROUTES.item(item._id)} />;
      },
      [callbacks.addToBasket, lang],
    ),
  };

  const select = useSelector(state => ({
    list: state.catalog.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
    active: state.catalog.paginationActivePage,
    skip: state.catalog.paginationSkip,
    length: state.catalog.dataLength,
  }));

  useEffect(() => {
    callbacks.setItemsLength();
  }, [])

  return (
    <PageLayout>
      <Head title={lang.titles.store}/>
      <BasketTool lang={lang} onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum} />
      <List list={select.list} renderItem={renders.item} />
      <Pagination
        loadPages={callbacks.loadPages}
        total={select.length}
        limit={select.skip}
        onActive={callbacks.setPaginationPage}
        active={select.active}
      />
    </PageLayout>
  );
}

export default memo(Main);
