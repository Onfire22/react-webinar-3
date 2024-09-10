import React from 'react';
import { createRoot } from 'react-dom/client';
import { createElement } from './utils.js';
import App from './app.js';
import Store from './store.js';
import { getRandomNumber } from './utils.js';

const store = new Store({
  list: [
    { code: getRandomNumber(), title: 'Название элемента' },
    { code: getRandomNumber(), title: 'Некий объект' },
    { code: getRandomNumber(), title: 'Заголовок' },
    { code: getRandomNumber(), title: 'Очень длинное название элемента из семи слов' },
    { code: getRandomNumber(), title: 'Запись' },
    { code: getRandomNumber(), title: 'Шестая запись' },
    { code: getRandomNumber(), title: 'Седьмая запись' },
  ],
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store} />);
});

// Первый рендер приложения
root.render(<App store={store} />);
