import React, { useCallback, useState } from 'react';
import List from './components/list';
import Controls from './components/controls';
import Head from './components/head';
import PageLayout from './components/page-layout';
import Modal from './components/modal';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const [show, setShow] = useState();
  const list = store.getState().list;
  const cart = store.getState().cart;

  const callbacks = {
    onAddItem: (code) => store.addToCart(code),
    onDeleteItem: (code) => store.removeFromCart(code),
    onShow: () => setShow(true),
    onHide: () => setShow(false),
  };

  return (
    <PageLayout>
      <Head title="Магазин" />
      <Controls cart={cart} onShow={callbacks.onShow} />
      <List
        list={list}
        onAddItem={callbacks.onAddItem}
        type="list"
      />
      <Modal
        list={cart}
        show={show}
        onShow={callbacks.onShow}
        onHide={callbacks.onHide}
        onDelete={callbacks.onDeleteItem}
      />
    </PageLayout>
  );
}

export default App;
