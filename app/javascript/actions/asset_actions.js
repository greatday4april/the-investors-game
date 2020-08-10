export const SET_CURRENT_ASSET_AMOUNT = 'SET_CURRENT_ASSET_AMOUNT';

export const setCurrentAssetAmount = (assetAmount) => {
    return {
        type: SET_CURRENT_ASSET_AMOUNT,
        assetAmount
    }
}