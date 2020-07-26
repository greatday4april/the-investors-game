import { BUY_STOCK } from '../actions/transactionAction';

export const stockSelector = ({transaction}) => {
    let stockHash = {};
    transaction.forEach(record => {
        console.log(record);
        if (stockHash[record.symbol] === undefined) {
            console.log("undefined");
            if (record.type === BUY_STOCK) {
                stockHash[record.symbol] = record.share;
            } else {
                stockHash[record.symbol] = -record.share;
            }
        } else {
            if (record.type === BUY_STOCK) {
                stockHash[record.symbol] += record.share;
            } else {
                stockHash[record.symbol] -= record.share;
            }
        }
    })
    return stockHash;
}