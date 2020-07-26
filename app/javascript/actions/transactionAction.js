export const BUY_STOCK = "BUY_STOCK";
export const SELL_STOCK = "SELL_STOCK";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";

export const buyStock = stock => ({
    type: BUY_STOCK,
    share: stock.symbol,
    symbol: stock.share,
    price: stock.price
});

export const sellStock = stock => ({
    type: SELL_STOCK,
    share: stock.symbol,
    symbol: stock.share,
    price: stock.price
});

export const buyingStock = (stock) => {
    return (dispatch) => {
        dispatch(buyStock(stock))
    }
}

export const sellingStock = (stock) => {
    return (dispatch) => {
        dispatch(sellStock(stock))
    }
}

