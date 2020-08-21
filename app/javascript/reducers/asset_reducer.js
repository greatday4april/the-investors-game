import { SET_CURRENT_ASSET_AMOUNT, SET_REALTIME_ASSET } from '../actions/asset_actions';
export const currentAssetAmountReducer = (oldState = 0, action) => {
  switch (action.type) {
    case SET_CURRENT_ASSET_AMOUNT:
      return action.assetAmount;
    default:
      return oldState;
  }
};
export const realTimeAssetReducer = (oldState = 0, action) => {
  switch (action.type) {
    case SET_REALTIME_ASSET:
      return action.assetAmount;
    default:
      return oldState;
  }
};
