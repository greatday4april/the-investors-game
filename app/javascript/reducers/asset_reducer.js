import {SET_CURRENT_ASSET_AMOUNT} from '../actions/asset_actions';
export const CurrentAssetAmountReducer = (oldState = 0, action) => {
    switch (action.type) {
        case SET_CURRENT_ASSET_AMOUNT:
            return action.assetAmount
        default:
            return oldState;
    }
}