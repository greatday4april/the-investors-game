import { BUY_STOCK } from '../actions/transactionsAction';

export const stockSelector = ({transactions}) => {
    let stockShare = {};
    transactions.forEach(record => {
        if (stockShare[record.symbol] === undefined) {
            if (record.type === BUY_STOCK) {
                stockShare[record.symbol] = record.share;
            } else {
                stockShare[record.symbol] = -record.share;
            }
        } else {
            if (record.type === BUY_STOCK) {
                stockShare[record.symbol] += record.share;
            } else {
                stockShare[record.symbol] -= record.share;
            }
        }
    })
    return stockShare;
}