import * as Types from './actionTypes';

export const number = (state = 0, action) => {
  switch (action.type) {
    case Types.ADD:
      state += action.payload;
      return state;
    case Types.MINUS:
      state -= action.payload;
      return state;
    default:
      return state;
  }
};
