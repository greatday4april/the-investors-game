import { LEVELS, INITIAL_BALANCE } from '../utils/constants';
import { RECEIVE_MONEY, BUY_STOCK, SELL_STOCK } from './transactionsAction';
import { getCurrentPrice } from '../reducers/assetSelector';
import { setRealTimeAsset } from '../actions/asset_actions';
export const LEVEL_UP = 'LEVEL_UP';
const _calculateTotalAsset = (state) => {
  const warpedTime = state.warpedTime;
  const transactions = state.transactions;
  const symbols = state.symbols;
  let balance = INITIAL_BALANCE;
  let stocks = symbols.reduce((map, symbol) => ((map[symbol] = 0), map), {});
  for (let transaction of transactions) {
    if (transaction.type === RECEIVE_MONEY) {
      balance += transaction.amount;
    } else {
      const symbol = transaction.symbol;
      const share = transaction.share;
      const price = transaction.price;
      if ((transaction.type === BUY_STOCK)) {
        stocks[symbol] += share;
        balance -= price * share;
      } else if (transaction.type === SELL_STOCK) {
        stocks[symbol] -= share;
        balance += price * share;
      }
    }
  }
  Object.keys(stocks).forEach((symbol) => {
    const share = stocks[symbol];
    if (share != 0) {
      const closingPrice = getCurrentPrice(state, warpedTime, symbol);
      balance += share * closingPrice;
    }
  });
  return balance;
};
export const upgradeLevel = () => {
  return (dispatch, getState) => {
    const state = getState();

    const level = getState().level;
    if (level === LEVELS.length) {
      return;
    }
    const nextLevelAssetBar = LEVELS[level];
    const totalAsset = _calculateTotalAsset(state);
    dispatch(setRealTimeAsset(Math.round(totalAsset * 1e2) / 1e2));
    if (totalAsset >= nextLevelAssetBar) {
      alert('level up');
      dispatch({ type: LEVEL_UP });
    }
  };
};
