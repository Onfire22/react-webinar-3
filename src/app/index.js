import { useCallback, useContext, useEffect, useState } from 'react';
import Main from './main';
import Basket from './basket';
import ItemPage from '../components/item-page';
import useStore from '../store/use-store';
import useSelector from '../store/use-selector';
import { Routes, Route } from 'react-router-dom';

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {
  const store = useStore();
  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
  };
  const select = useSelector(state => ({
    list: state.catalog.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));
  const activeModal = useSelector(state => state.modals.name);

  useEffect(() => {
    store.actions.catalog.load();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Main callbacks={callbacks} select={select} />} />
        <Route path='/items/:id' element={<ItemPage onOpen={callbacks.openModalBasket} onAdd={callbacks.addToBasket} />} />
      </Routes>
      {activeModal === 'basket' && <Basket />}
    </>
  );
}

export default App;
