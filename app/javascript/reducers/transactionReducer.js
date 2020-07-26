import { BUY_STOCK, SELL_STOCK } from '../actions/transactionAction';


const transactionReducer = (state=[], action) => {
    Object.freeze(state);
    switch (action.type) {
        case BUY_STOCK:
            return [...state, action];
        case SELL_STOCK:
            return [...state, action];

        default:
            return state;

    }
}

export default transactionReducer;