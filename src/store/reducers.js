export const number = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      state += action.payload;
      return state;
    case 'MINUS':
      state -= action.payload;
      return state;
    default:
      return state;
  }
};
