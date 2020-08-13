import { getTicksByTimeAndSymbol } from '../reducers/ticksSelectors';
import { INITIAL_BALANCE, GAME_START_TIME } from '../utils/constants';
import { BUY_STOCK } from '../actions/transactionsAction';

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
}
export const generateHistoryAssets = (state, symbols, transactions, warpedTime, period) => {
    const endDate = moment(warpedTime).startOf('day');
    let startDate = moment(GAME_START_TIME).startOf('day');
    let balance = INITIAL_BALANCE;
    let stocks = symbols.reduce((map, symbol) => ( map[symbol] = 0, map), {});
    const HistoryAssets = [];
    while (startDate.isSameOrBefore(endDate)) {
        for (const transaction of transactions) {
            const date = moment(transaction['date']).startOf('day');
            if (date.isSame(startDate, 'day')) {
                const symbol = transaction['symbol'];
                const price = transaction['price'];
                const share = transaction['share'];
                if (transaction['type'] === BUY_STOCK) {
                    stocks[symbol] += share;
                    balance -= share * price;
                }
                else {
                    stocks[symbol] -= share;
                    balance += share * price;
                }
            }
        }
        let stockValue = 0;
        Object.keys(stocks).forEach(symbol => {
            const share = stocks[symbol];
            if (share === 0) {
                stockValue += 0;
            } else {
                const closingPrice = _getClosingPrice(state, startDate, symbol);
                stockValue += share * closingPrice;
            }
        });
        HistoryAssets.push({date: startDate, amount: Math.round( (balance + stockValue) * 1e2 ) / 1e2});
        startDate = moment(startDate).add(1, 'days');
    }
    const durationDays = moment.duration(period).asDays();
    return HistoryAssets.slice(Math.max(HistoryAssets.length - durationDays, 0), HistoryAssets.length - 1);
};