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
    // onDeleteItem: useCallback(
    //   code => {
    //     store.deleteItem(code);
    //   },
    //   [store],
    // ),

    onSelectItem: useCallback(
      code => {
        store.selectItem(code);
      },
      [store],
    ),

    // onAddItem: useCallback(() => {
    //   store.addItem();
    // }, [store]),
    onAddItem: (code) => store.addToCart(code),
    onDeleteItem: (code) => store.removeFromCart(code),
    onShow: () => setShow(true),
    onHide: () => setShow(false),
  };

  return (
    <PageLayout>
      <Head title="Магазин" />
      <Controls onShow={callbacks.onShow} />
      <List
        list={list}
        onAddItem={callbacks.onAddItem}
        onSelectItem={callbacks.onSelectItem}
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
