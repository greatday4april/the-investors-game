export const BUY_STOCK = "BUY_STOCK";
export const SELL_STOCK = "SELL_STOCK";

export const buyStock = (stock, date) => ({
    type: BUY_STOCK,
    symbol: stock.symbol,
    share: stock.share,
    price: stock.price,
    date
});

export const sellStock = (stock, date) => ({
    type: SELL_STOCK,
    symbol: stock.symbol,
    share: stock.share,
    price: stock.price,
    date
});
