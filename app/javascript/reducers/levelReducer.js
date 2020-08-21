import { LEVEL_UP } from '../actions/level_actions';
export const levelReducer = (oldState = 0, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case LEVEL_UP:
      newState = oldState + 1;
      return newState;
    default:
      return oldState;
  }
};
