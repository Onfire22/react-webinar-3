const initialState = {
  text: '',
  open: false,
};

const commentFieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'comment/input':
      return { ...state, text: action.payload.text };
    case 'comment/open':
      return { ...state, open: true };
    case 'comment/close':
      return { ...state, open: false };
    default:
      return state;
  }
};

export default commentFieldReducer;
