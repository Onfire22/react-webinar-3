import React, { useCallback, useState } from 'react';
import List from './components/list';
import Head from './components/head';
import PageLayout from './components/page-layout';
import Modal from './components/modal';
import PriceInfo from './components/price-info';
import Cart from './components/cart';
import CartItem from './components/cart-item/index';
import Item from './components/item/index';

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
        Component={Item}
        list={list}
        onAddItem={callbacks.onAddItem}
      />
      <Modal show={show} onHide={callbacks.onHide}>
        <Cart
          Component={CartItem}
          onHide={callbacks.onHide}
          onDelete={callbacks.onDeleteItem}
          totalCost={totalCost}
          cart={cart}
        />
      </Modal>
    </PageLayout>
  );
}

export default App;
  