export default {
  input: (text) => ({
    type: 'comment/input',
    payload: { text },
  }),
  setParentId: (id) => ({
    type: 'comment/setParent',
    payload: id,
  }),
};
