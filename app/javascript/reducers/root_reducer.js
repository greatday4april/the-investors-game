import { combineReducers } from 'redux';
import TicksReducer from './ticks_reducer';
import ErrorsReducer from './errors_reducer';
import transactionReducer from './transactionReducer';

const RootReducer = combineReducers({ 
    ticks: TicksReducer, 
    transaction: transactionReducer,
    errors: ErrorsReducer
 })

export default RootReducer;