import { BUY_STOCK } from '../actions/transactionsAction';

const INITIAL_BALANCE = 1000000;

export const balanceSelector = ({transactions}) => {
    const reducer = (accumulator, currentValue) => {
        return accumulator + (currentValue.type === BUY_STOCK ? -currentValue.price : currentValue.price);
    }
    return transactions.reduce(reducer, INITIAL_BALANCE);
};