import { BUY_STOCK } from '../actions/transactionsAction';
import { getTicksByTimeAndSymbol } from './ticksSelectors';

export const stocksSelector = ({transactions}) => {
    const stocksShare = {};
    transactions.forEach(record => {
        if (stocksShare[record.symbol] === undefined) {
            if (record.type === BUY_STOCK) {
                stocksShare[record.symbol] = record.share;
            } else {
                stocksShare[record.symbol] = -record.share;
            }
        } else {
            if (record.type === BUY_STOCK) {
                stocksShare[record.symbol] += record.share;
            } else {
                stocksShare[record.symbol] -= record.share;
            }
        }
    })
    return stocksShare;
}

const get_start_time = (end_time, days) => {
    let d = new Date(end_time);
    d.setDate(d.getDate() - days);
    return moment(d.toISOString());
}

export const dailyTicksSelector = (state, end_time, symbol) => {
    const start_time = get_start_time(end_time, 1);
    return getTicksByTimeAndSymbol(state, start_time, end_time, symbol);
}

export const weeklyTicksSelector = (state, end_time, symbol) => {
    const start_time = get_start_time(end_time, 7);
    return getTicksByTimeAndSymbol(state, start_time, end_time, symbol);
}

export const monthlyTicksSelector = (state, end_time, symbol) => {
    const start_time = get_start_time(end_time, 30);
    return getTicksByTimeAndSymbol(state, start_time, end_time, symbol);
}
