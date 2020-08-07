import { BUY_STOCK } from '../actions/transactionsAction';
import { INITIAL_BALANCE } from '../utils/constants'

export const balanceSelector = ({transactions}) => {
    const reducer = (accumulator, currentValue) => {
        return accumulator + (currentValue.type === BUY_STOCK ? -currentValue.price : currentValue.price);
    }
    return transactions.reduce(reducer, INITIAL_BALANCE);
};