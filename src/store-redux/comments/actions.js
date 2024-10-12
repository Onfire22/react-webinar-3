export default {
  loadComments: (id) => {
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
  },
  createComment: (text, _id, type) => {
    return async (dispatch, getState, services) => {
      const comment = {
        text,
        parent: { _id, _type: type },
      };
      const response = await services.api.request({
        url: `api/v1/comments?fields=author(profile(name)),text,dateCreate,_id,children,parent(_id,_type)`,
        method: 'POST',
        body: JSON.stringify(comment),
      });
      console.log(response)
      dispatch({ type: 'comments/new-comment', payload: response.data.result });
    };
  },
}
