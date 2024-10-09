const loadCommentsAction = (id) => {
  return async (dispatch, getState, services) => {
    try {
      const response = await services.api.request({
        url: `/api/v1/comments?fields=items(_id,text,dateCreate,author(profile(name)),parent(_id,_type),isDeleted),count&limit=*&search[parent]=${id}`,
      });
      dispatch({ type: 'comments/load-success', payload: { data: response.data.result.items } });
    } catch (e) {
      dispatch({ type: 'comments/load-error' });
    }
  };
};

export default loadCommentsAction;
