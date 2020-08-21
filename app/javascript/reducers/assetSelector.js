import { getTicksByTimeAndSymbol } from '../reducers/ticksSelectors';
import { INITIAL_BALANCE, GAME_START_TIME } from '../utils/constants';
import { BUY_STOCK, SELL_STOCK, RECEIVE_MONEY } from '../actions/transactionsAction';

const _getClosingPrice = (state, date, symbol) => {
  if (date.isBefore(GAME_START_TIME)) {
    return;
  }
  const ticks = getTicksByTimeAndSymbol(state, moment(date).startOf('day'), moment(date).endOf('day'), symbol);
  if (ticks && ticks.length != 0) {
    return ticks[ticks.length - 1]['close'];
  } else {
    const newDate = moment(date).subtract(1, 'days');
    return _getClosingPrice(state, newDate, symbol);
  }
};

const _getCurrentPrice = (state, date, symbol) => {
  debugger;
  if (date.isBefore(GAME_START_TIME)) {
    return 0;
  }
  const ticks = getTicksByTimeAndSymbol(state, moment(date).startOf('day'), moment(date), symbol);
  if (ticks && ticks.length != 0) {
    return ticks[ticks.length - 1]['close'];
  } else {
    const newDate = moment(date).subtract(1, 'days');
    return _getClosingPrice(state, newDate, symbol);
  }
};

export const generateHistoryAssets = (state, symbols, transactions, warpedTime, period) => {
  const endDate = moment(warpedTime).startOf('day');
  let startDate = moment(GAME_START_TIME).startOf('day');
  let balance = INITIAL_BALANCE;
  let stocks = symbols.reduce((map, symbol) => ((map[symbol] = 0), map), {});
  const HistoryAssets = [];
  while (startDate.isSameOrBefore(endDate)) {
    for (const transaction of transactions) {
      const date = moment(transaction['date']).startOf('day');
      if (date.isSame(startDate, 'day')) {
        if (transaction['type'] === RECEIVE_MONEY) {
          const amount = transaction.amount;
          balance += amount;
        } else {
          const symbol = transaction['symbol'];
          const price = transaction['price'];
          const share = transaction['share'];
          if (transaction['type'] === BUY_STOCK) {
            stocks[symbol] += share;
            balance -= share * price;
          } else if (transaction['type'] === SELL_STOCK) {
            stocks[symbol] -= share;
            balance += share * price;
          }
        }
      }
    }
    let stockValue = 0;
    Object.keys(stocks).forEach((symbol) => {
      const share = stocks[symbol];
      if (share != 0) {
        const closingPrice = startDate.isSame(endDate)
          ? _getCurrentPrice(state, warpedTime, symbol)
          : _getClosingPrice(state, startDate, symbol);
        stockValue += share * closingPrice;
      }
    });
    HistoryAssets.push({ date: startDate, amount: Math.round((balance + stockValue) * 1e2) / 1e2 });
    startDate = moment(startDate).add(1, 'days');
  }
  HistoryAssets.push({ date: startDate, amount: 0 });
  const durationDays = moment.duration(period).asDays();
  return HistoryAssets.slice(Math.max(HistoryAssets.length - durationDays, 0), HistoryAssets.length - 1);
};
