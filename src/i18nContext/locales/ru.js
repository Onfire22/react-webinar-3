import { plural } from "../../utils";

export const ru = {
  controls: {
    main: 'Главная',
    inCart: 'В корзине:',
    empty: 'пусто',
    totalCost: 'Итого',
    plurItems: (amount) => plural(amount, { one: 'товар', few: 'товара', many: 'товаров'})
  },
  titles: {
    store: 'Магазин',
    cart: 'Корзина',
  },
  buttons: {
    goTo: 'Перейти',
    add: 'Добавить',
    close: 'Закрыть',
    delete: 'Удалить',
  },
  item: {
    edition: 'Страна производитель:',
    category: 'Категория:',
    madeIn: 'Год выпуска:',
    price: 'Цена:',
    count: 'шт',
  },
};
