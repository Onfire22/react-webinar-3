const initialState = {
  comments: [],
  waiting: false,
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'comments/load-success':
      return { ...state, comments: action.payload.data, waiting: false, };
    case 'comments/load-error':
      return { ...state, comments: [], waiting: false, };
    default:
      return state;
  }
};

export default comments;
