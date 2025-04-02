import { useCallback, useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Main from './main';
import Basket from './basket';
import Item from './item';
import useSelector from '../store/use-selector';

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="item/:id" element={<Item />} />
    </Routes>
  );
}

export default App;
