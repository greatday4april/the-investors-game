import { RECEIVE_ALL_TICKS } from '../actions/tick_actions';
import { getAllTicks } from "./ticksSelectors";
import { isTick } from "../utils/funcUtils";

const mergeTicksTree = (oldTree, newTree) => {
    if (!newTree) return oldTree ? {...oldTree} : oldTree;
    if (!oldTree) return newTree;
    if (isTick(newTree)) return newTree;

    const keys = new Set(Object.keys(newTree));
    for (const oldKey in oldTree) {
        keys.add(oldKey);
    }

    keys.forEach(
        (key) => {newTree[key] = mergeTicksTree(oldTree[key], newTree[key]); }
    );
    return newTree;
}

const TicksReducer = (oldState = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_TICKS:
            getAllTicks.cache.clear();
            return mergeTicksTree(oldState, action.ticks);
        default:
            return oldState;
    }
}

export default TicksReducer;