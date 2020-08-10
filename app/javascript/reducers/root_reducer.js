import { combineReducers } from 'redux';
import { TicksReducer, CurrentTickPriceReducer } from './ticks_reducer';
import ErrorsReducer from './errors_reducer';
import transactionsReducer from './transactionsReducer';
import warpedTimeReducer from './warped_time_reducer';
import symbolsReducer from './symbolsReducer';
import { currentAssetAmountReducer } from './asset_reducer';

const RootReducer = combineReducers({
    ticks: TicksReducer,
    symbols: symbolsReducer,
    transactions: transactionsReducer,
    currentTickPrice: CurrentTickPriceReducer,
    errors: ErrorsReducer,
    warpedTime: warpedTimeReducer,
    assetAmount: currentAssetAmountReducer
})

export default RootReducer;