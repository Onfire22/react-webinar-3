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
import LoginRoute from './login-route';

/**
 * Приложение
 * Маршрутизация по страницам и модалкам
 */
function App() {
  const store = useStore();
  const activeModal = useSelector(state => state.modals.name);
  
  const logIn = useCallback(() => store.actions.user.reLogIn(), [store]);

  useEffect(() => {
    logIn();
  }, []);

  return (
    <>
      <Routes>
        <Route path={''} element={<Main />} />
        <Route path={'/articles/:id'} element={<Article />} />
        <Route path={'/login'} element={(
          <LoginRoute>
            <Login />
          </LoginRoute>
        )} />
        <Route path={'/profile'} element={(
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        )} />
      </Routes>

      {activeModal === 'basket' && <Basket />}
    </>
  );
}

export default App;
