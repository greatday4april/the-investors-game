import { LEVEL_UP } from '../actions/level_actions';
export const levelReducer = (oldState = 1, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case LEVEL_UP:
      const newState = oldState + 1;
      return newState;
    default:
      return oldState;
  }
};
