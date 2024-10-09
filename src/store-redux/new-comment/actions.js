export default {
  input: (text) => ({
    type: 'comment/input',
    payload: { text },
  }),
  open: () => ({
    type: 'comment/open',
  }),
  close: () => ({
    type: 'comment/close',
  }),
};
