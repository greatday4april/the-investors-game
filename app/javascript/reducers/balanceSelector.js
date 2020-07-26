import { BUY_STOCK } from '../actions/transactionAction';

const currentBalance = 1000000;

export const balanceSelector = ({transaction}) => {
    transaction.forEach(record => {
        if (record.type === BUY_STOCK) {
            currentBalance -= (record.price * record.share);
        } else {
            currentBalance += (record.price * record.share);
        }
    })
    return currentBalance;
}