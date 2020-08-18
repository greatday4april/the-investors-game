import { BUY_STOCK, SELL_STOCK } from '../actions/transactionsAction';

const preloadedState = [{type: SELL_STOCK, symbol: "AAPL", share: 100, price: 20, date: "2009-08-10"},
                  {type: BUY_STOCK, symbol: "AMD", share: 120, price: 25, date: "2009-08-10" }, ]

const transactionsReducer = (state=preloadedState, action) => {
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