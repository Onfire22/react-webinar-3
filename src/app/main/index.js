import { memo, useCallback, useEffect, useState } from 'react';
import Item from '../../components/item';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import BasketTool from '../../components/basket-tool';
import List from '../../components/list';
import Pagination from '../../components/pagination';
import useLocales from '../../hooks';
import { API_ROUTES, ROUTES } from '../../routes';
import useSelector from '../../store/use-selector';
import useStore from '../../store/use-store';

function Main({ callbacks, select, getNextPages }) {
  const store = useStore();
  const [dataLength, setDataLength] = useState(0);
  const { lang } = useLocales();
  const renders = {
    item: useCallback(
      item => {
        return <Item lang={lang} item={item} onAdd={callbacks.addToBasket} path={ROUTES.item(item._id)} />;
      },
      [callbacks.addToBasket],
    ),
  };

  const getActive = useCallback((id) => store.actions.catalog.setActiveId(id), [store]);
  const active = useSelector(state => state.catalog.paginationActiveId);

  useEffect(() => {
    fetch(API_ROUTES.getAllItems())
      .then((data) => data.json())
      .then(({ result }) => setDataLength(result.count));
  }, [])

  return (
    <PageLayout>
      <Head title={lang.titles.store}/>
      <BasketTool lang={lang} onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum} />
      <List list={select.list} renderItem={renders.item} />
      <Pagination
        getNextPages={getNextPages}
        total={dataLength}
        limit={10}
        onActive={getActive}
        active={active}
      />
    </PageLayout>
  );
}

export default memo(Main);
