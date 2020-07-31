import { RECEIVE_ALL_TICKS, SET_CURRENT_TICK_PRICE } from '../actions/tick_actions';
import { getAllTicks, getTicksByTimeAndSymbol } from "./ticksSelectors";
import { isTick } from "../utils/funcUtils";


const mergeTicksTree = (oldTree, newTree) => {
    if (!newTree) return oldTree ? { ...oldTree } : oldTree;
    if (!oldTree) return newTree;
    if (isTick(newTree)) return newTree;

    const keys = new Set(Object.keys(newTree));
    for (const oldKey in oldTree) {
        keys.add(oldKey);
    }

    keys.forEach(
        (key) => { newTree[key] = mergeTicksTree(oldTree[key], newTree[key]); }
    );
    return newTree;
}

export const TicksReducer = (oldState = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_TICKS:
            getAllTicks.cache.clear();
            getTicksByTimeAndSymbol.cache.clear();
            return mergeTicksTree(oldState, action.ticks);
        default:
            return oldState;
    }
}

export const CurrentTickPriceReducer = (oldState = 0, action) => {
    switch (action.type) {
        case SET_CURRENT_TICK_PRICE:
            return action.tickPrice
        default:
            return oldState;
    }
}