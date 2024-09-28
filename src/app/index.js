import { useCallback, useContext, useEffect, useState } from 'react';
import Main from './main';
import Basket from './basket';
import ItemPage from './item-page';
import NotFound from '../components/404';
import useStore from '../store/use-store';
import useSelector from '../store/use-selector';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../routes';
import LocalesProvider from '../i18nContext/localesProvider';
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
    // Получение следующих страниц
    getNextPages: useCallback((skip) => store.actions.catalog.loadNextItems(skip), [store]),
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
    <LocalesProvider>
      <Routes>
        <Route path={ROUTES.main()} element={<Main callbacks={callbacks} select={select} getNextPages={callbacks.getNextPages}/>} />
        <Route path={ROUTES.items()} element={<ItemPage onOpen={callbacks.openModalBasket} onAdd={callbacks.addToBasket} />} />
        <Route path={ROUTES.notFound()} element={<NotFound />}/>
      </Routes>
      {activeModal === 'basket' && <Basket />}
    </LocalesProvider>
  );
}

export default App;
