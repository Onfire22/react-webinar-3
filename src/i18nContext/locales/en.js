import { plural } from "../../utils";

export const en = {
  controls: {
    main: 'Main',
    inCart: 'In Cart:',
    empty: 'empty',
    totalCost: 'Total cost',
    plurItems: (amount) => plural(amount, { one: 'item', other: 'items'}, 'en-EN')
  },
  titles: {
    store: 'Store',
    cart: 'Cart',
  },
  buttons: {
    goTo: 'Go to Cart',
    add: 'Add to Cart',
    close: 'Close',
    delete: 'Delete',
  },
  item: {
    edition: 'Manufacturer\'s country:',
    category: 'Category:',
    madeIn: 'Year of release:',
    price: 'Price:',
    count: 'pc',
  },
};
