export const BUY_STOCK = "BUY_STOCK";
export const SELL_STOCK = "SELL_STOCK";

export const buyStock = stock => ({
    type: BUY_STOCK,
    symbol: stock.symbol,
    share: stock.share,
    price: stock.price,
});

export const sellStock = stock => ({
    type: SELL_STOCK,
    symbol: stock.symbol,
    share: stock.share,
    price: stock.price,
});
