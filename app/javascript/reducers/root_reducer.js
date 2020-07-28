import { combineReducers } from 'redux';
import TicksReducer from './ticks_reducer';
import ErrorsReducer from './errors_reducer';
import transactionsReducer from './transactionsReducer';

const RootReducer = combineReducers({ 
    ticks: TicksReducer, 
    transactions: transactionsReducer,
    errors: ErrorsReducer
 })

export default RootReducer;