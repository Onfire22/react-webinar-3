const initialState = {
  text: '',
  open: false,
  parentId: '',
};

const commentFieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'comment/input':
      return { ...state, text: action.payload.text };
    case 'comment/setParent': 
      return { ...state, parentId: action.payload }
    default:
      return state;
  }
};

export default commentFieldReducer;
