import { combineReducers } from 'redux';
import TicksReducer from './ticks_reducer';
import ErrorsReducer from './errors_reducer';
import ballanceReducer from './ballanceReducer';
import stockReducer from './stockReducer';
import transactionReducer from './transactionReducer';

const RootReducer = combineReducers({ 
    ticks: TicksReducer, 
    stock: stockReducer,
    ballance: ballanceReducer,
    transaction: transactionReducer,
    errors: ErrorsReducer
 })

export default RootReducer;