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
  const activeModal = useSelector(state => state.modals.name);

  return (
    <>
      <Routes>
        <Route path='/items' element={<Main />} />
        <Route path='/items/:id' element={<ItemPage />} />
      </Routes>
      {activeModal === 'basket' && <Basket />}
    </>
  );
}

export default App;
