export const BUY_STOCK = 'BUY_STOCK';
export const SELL_STOCK = 'SELL_STOCK';
export const RECEIVE_MONEY = 'RECEIVE_MONEY';

export const buyStock = (stock) => {
  return (dispatch, getState) => {
    const warpedTime = getState().warpedTime.toString().slice(0,24);
    dispatch({
      type: BUY_STOCK,
      symbol: stock.symbol,
      share: stock.share,
      price: stock.price,
      date: warpedTime,
    });
  };
};

export const sellStock = (stock) => {
  return (dispatch, getState) => {
    const warpedTime = getState().warpedTime.toString().slice(0, 24);
    dispatch({
      type: SELL_STOCK,
      symbol: stock.symbol,
      share: stock.share,
      price: stock.price,
      date: warpedTime,
    });
  };
};

export const receiveMoney = (amount) => {
  return (dispatch, getState) => {
    const warpedTime = getState().warpedTime.toString().slice(0, 24);
    dispatch({
      type: RECEIVE_MONEY,
      amount,
      date: warpedTime,
    });
  };
};