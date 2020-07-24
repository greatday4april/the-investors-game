import { BUY_STOCK, SELL_STOCK } from '../actions/stockAction';

const stockReducer = (state = [], action) => {
    Object.freeze(state);
    let stockArr = state;
    switch (action.type) {
        case BUY_STOCK:
            return stockArr.concat(action.stock);

        case SELL_STOCK:
            stockArr.forEach(stock => {
                if (stock.stockID == action.stock.stockID) {
                    stock = action.stock
                }
                //when sells certain amount of stock, the new info of THIS stock will replace the old info.
            })
            return stockArr;
        
        default:
            return state;

    }
}

export default stockReducer;

