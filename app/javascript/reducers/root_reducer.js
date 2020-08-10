import { combineReducers } from 'redux';
import { TicksReducer, CurrentTickPriceReducer } from './ticks_reducer';
import ErrorsReducer from './errors_reducer';
import transactionsReducer from './transactionsReducer';
import warpedTimeReducer from './warped_time_reducer';
import {newsItemsReducer} from './newsItemsReducer';
import symbolsReducer from './symbolsReducer';
import { currentAssetAmountReducer } from './asset_reducer';
import statsReducer from './statsReducer';

const RootReducer = combineReducers({
    ticks: TicksReducer,
    symbols: symbolsReducer,
    stats: statsReducer,
    transactions: transactionsReducer,
    currentTickPrice: CurrentTickPriceReducer,
    errors: ErrorsReducer,
    warpedTime: warpedTimeReducer,
    assetAmount: currentAssetAmountReducer,
    newsItems: newsItemsReducer
})

export default RootReducer;