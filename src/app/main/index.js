import { memo, useCallback, useEffect, useState } from 'react';
import Item from '../../components/item';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import BasketTool from '../../components/basket-tool';
import List from '../../components/list';
import Pagination from '../../components/pagination';
import useLocales from '../../hooks';
import { API_ROUTES } from '../../routes';

function Main({ callbacks, select, getNextPages }) {
  const [dataLength, setDataLength] = useState(0);
  const { lang } = useLocales();
  const renders = {
    item: useCallback(
      item => {
        return <Item item={item} onAdd={callbacks.addToBasket} />;
      },
      [callbacks.addToBasket],
    ),
  };

  useEffect(() => {
    fetch(API_ROUTES.getAllItems())
      .then((data) => data.json())
      .then(({ result }) => setDataLength(result.items.length));
  }, [])

  return (
    <PageLayout>
      <Head title={lang.titles.store}/>
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum} />
      <List list={select.list} renderItem={renders.item} />
      <Pagination
        getNextPages={getNextPages}
        total={dataLength}
        limit={10}
      />
    </PageLayout>
  );
}

export default memo(Main);
