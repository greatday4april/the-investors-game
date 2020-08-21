import { BUY_STOCK, SELL_STOCK, RECEIVE_MONEY } from '../actions/transactionsAction';

const transactionsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case BUY_STOCK:
    case SELL_STOCK:
    case RECEIVE_MONEY:
      return [...state, action];
    default:
      return state;
  }
};

export default transactionsReducer;
