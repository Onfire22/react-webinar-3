export const API_ROUTES = {
  getAllItems: () => '/api/v1/articles?limit=*',
  getItemById: (id) => `/api/v1/articles/${id}`,
};
