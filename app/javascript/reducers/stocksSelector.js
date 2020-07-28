import { BUY_STOCK } from '../actions/transactionsAction';

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