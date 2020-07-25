export const BUY_STOCK = "BUY_STOCK";
export const SELL_STOCK = "SELL_STOCK";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";

export const buyStock = (symbol, share, price) => ({
    type: BUY_STOCK,
    share: symbol,
    symbol: share,
    price: price
});

export const sellStock = (symbol, share, price) => ({
    type: SELL_STOCK,
    share: symbol,
    symbol: share,
    price: price
});

export const receiveTransaction = (transaction) => ({
    type: RECEIVE_TRANSACTION,
    transaction,
}) 

export const buyingStock = (symbol, share, price) => dispatch => {
    buyStock(symbol, share, price).then(
        transaction => dispatch(receiveTransaction(transaction))
    )
}

export const sellingStock = (symbol, share, price) => dispatch => {
    sellStock(symbol, share, price).then(
        transaction => dispatch(receiveTransaction(transaction))
    )
}

