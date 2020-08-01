import { combineReducers } from 'redux';
import { TicksReducer, CurrentTickPriceReducer } from './ticks_reducer';
import ErrorsReducer from './errors_reducer';
import transactionsReducer from './transactionsReducer';
import warpedTimeReducer from './warped_time_reducer';

const RootReducer = combineReducers({
    ticks: TicksReducer,
    transactions: transactionsReducer,
    currentTickPrice: CurrentTickPriceReducer,
    errors: ErrorsReducer,
    warpedTime: warpedTimeReducer
})

export default RootReducer;