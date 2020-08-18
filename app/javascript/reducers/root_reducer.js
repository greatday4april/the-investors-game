import { combineReducers } from 'redux';
import { TicksReducer, CurrentTickPriceReducer } from './ticks_reducer';
import ErrorsReducer from './errors_reducer';
import transactionsReducer from './transactionsReducer';
import warpedTimeReducer from './warped_time_reducer';
import symbolsReducer from './symbolsReducer';
import statsReducer from './statsReducer';
import housingsReducer from './housingReducer';

const RootReducer = combineReducers({
    ticks: TicksReducer,
    symbols: symbolsReducer,
    housings: housingsReducer,
    stats: statsReducer,
    transactions: transactionsReducer,
    currentTickPrice: CurrentTickPriceReducer,
    errors: ErrorsReducer,
    warpedTime: warpedTimeReducer
})

export default RootReducer;