export const API_ROUTES = {
  getAllItems: () => '/api/v1/articles?limit=*',
  getItemById: (id) => `/api/v1/articles/${id}?fields=madeIn(title),title,category(title),description,edition,price,_id`,
  getNextItems: (skip) => `/api/v1/articles?limit=10&skip=${skip}`,
};

export const ROUTES = {
  main: () => '/',
  items: () => '/items/:id',
  item: (id) => `/items/${id}`,
  notFound: () => '*',
};
