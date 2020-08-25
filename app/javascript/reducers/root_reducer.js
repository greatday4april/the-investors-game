import { combineReducers } from 'redux';
import { TicksReducer, CurrentTickPriceReducer } from './ticks_reducer';
import ErrorsReducer from './errors_reducer';
import transactionsReducer from './transactionsReducer';
import warpedTimeReducer from './warped_time_reducer';
import { newsItemsReducer } from './newsItemsReducer';
import symbolsReducer from './symbolsReducer';
import { currentAssetAmountReducer, realTimeAssetReducer } from './asset_reducer';
import statsReducer from './statsReducer';
import housingsReducer from './housingReducer';
import previousRewardTimeReducer from './previous_reward_time_reducer';
import housingStatsReducer from './housingStatsReducer';
import { levelReducer } from './levelReducer';

const RootReducer = combineReducers({
  ticks: TicksReducer,
  symbols: symbolsReducer,
  housings: housingsReducer,
  stats: statsReducer,
  housingStats: housingStatsReducer,
  transactions: transactionsReducer,
  currentTickPrice: CurrentTickPriceReducer,
  errors: ErrorsReducer,
  warpedTime: warpedTimeReducer,
  assetAmount: currentAssetAmountReducer,
  newsItems: newsItemsReducer,
  previousRewardTime: previousRewardTimeReducer,
  level: levelReducer,
  asset: realTimeAssetReducer,
});

export default RootReducer;
