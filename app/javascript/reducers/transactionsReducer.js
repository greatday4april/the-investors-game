import { BUY_STOCK, SELL_STOCK } from '../actions/transactionsAction';

const transactionsReducer = (state=[], action) => {
    Object.freeze(state);
    switch (action.type) {
        case BUY_STOCK:
        case SELL_STOCK:
            return [...state, action];
        default:
            return state;
    }
}

export default transactionsReducer;