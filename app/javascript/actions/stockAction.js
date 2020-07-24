export const BUY_STOCK = "BUY_STOCK";
export const SELL_STOCK = "SELL_STOCK";



export const buyStock = stock => ({
    type: BUY_STOCK,
    stock
});

export const sellStock = stock => ({
    type: SELL_STOCK,
    stock
});


