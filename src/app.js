import React, { useCallback, useState } from 'react';
import List from './components/list';
import Controls from './components/controls';
import Head from './components/head';
import PageLayout from './components/page-layout';
import Modal from './components/modal';
import PriceInfo from './components/price-info';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const [show, setShow] = useState();
  const list = store.getState().list;
  const cart = store.getState().cart;
  const totalCost = store.getTotalCost();

  const callbacks = {
    onAddItem: useCallback(
      (code) => store.addToCart(code),
      [store]),
    onDeleteItem: useCallback(
      (code) => store.removeFromCart(code),
      [store]),
    onShow: useCallback(() => setShow(true), [show]),
    onHide: useCallback(() => setShow(false), [show]),
  };

  return (
    <PageLayout>
      <Head title="Магазин" />
      <PriceInfo onShow={callbacks.onShow} totalCost={totalCost} cart={cart} state="show" />
      <List
        list={list}
        onAddItem={callbacks.onAddItem}
        type="list"
      />
      <Modal
        list={cart}
        show={show}
        onHide={callbacks.onHide}
        onDelete={callbacks.onDeleteItem}
        totalCost={totalCost}
      />
    </PageLayout>
  );
}

export default App;
