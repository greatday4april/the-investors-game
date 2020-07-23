import { RECEIVE_ALL_TICKS } from '../actions/tick_actions';

const TicksReducer = (oldState = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_TICKS:
            return { ...oldState, ...(action.ticks) };
        default:
            return oldState;
    }
}

export default TicksReducer;