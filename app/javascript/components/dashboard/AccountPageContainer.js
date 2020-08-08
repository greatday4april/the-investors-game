import {connect} from 'react-redux';
import {AccountPage} from './AccountPage';
import { INITIAL_BALANCE, DEFAULT_WARPED_TIME } from '../../utils/constants';
import { BUY_STOCK } from '../../actions/transactionsAction';

const _generateHistoryBalances = (transactions) => {
    const historyBalances = [{
        date: moment(DEFAULT_WARPED_TIME).format('MM-DD-YYYY'),
        amount: INITIAL_BALANCE
    }];
    let previousAmount = INITIAL_BALANCE;
    transactions.forEach(transaction => {
        const balance = {};
        balance.date = transaction.date;
        if (transaction.type === BUY_STOCK) {
            balance.amount = previousAmount - transaction.share * transaction.price;
        } else {
            balance.amount = previousAmount + transaction.share * transaction.price;
        }
        previousAmount = balance.amount;
        historyBalances.push(balance);
    });
    return historyBalances;
}
const mapStateToProps = (state) => ({
    historyBalances: _generateHistoryBalances(state.transactions)
})
export default connect(mapStateToProps, null)(AccountPage);