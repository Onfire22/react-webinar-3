import { useCallback, useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import useSelector from '../hooks/use-selector';
import Main from './main';
import Basket from './basket';
import Article from './article';
import Login from './login';
import PrivateRoute from './private-route';
import UserPage from './user-page';
import useStore from '../hooks/use-store';

/**
 * Приложение
 * Маршрутизация по страницам и модалкам
 */
function App() {
  const store = useStore();
  const activeModal = useSelector(state => state.modals.name);
  const select = useSelector(state => ({
    token: state?.user?.token,
    name: state?.user?.userData?.name,
  }));

  const logIn = () => store.actions.user.reLogIn();

  useEffect(() => {
    if (!select.loggedIn) {
      logIn();
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path={''} element={<Main />} />
        <Route path={'/articles/:id'} element={<Article />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/profile'} element={(
          <PrivateRoute token={select.token}>
            <UserPage />
          </PrivateRoute>
        )} />
      </Routes>

      {activeModal === 'basket' && <Basket />}
    </>
  );
}

export default App;
