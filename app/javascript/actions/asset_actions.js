export const SET_CURRENT_ASSET_AMOUNT = 'SET_CURRENT_ASSET_AMOUNT';
export const SET_REALTIME_ASSET = 'SET_REALTIME_ASSET';

export const setCurrentAssetAmount = (assetAmount) => {
  return {
    type: SET_CURRENT_ASSET_AMOUNT,
    assetAmount,
  };
};

export const setRealTimeAsset = (assetAmount) => {
  return {
    type: SET_REALTIME_ASSET,
    assetAmount,
  };
};
