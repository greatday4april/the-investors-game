import {RECEIVE_BALLANCE} from '../actions/ballanceAction';

const ballanceReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BALLANCE: 
            return Object.assign({}, action.ballance);
            // I think this will cover/replce the previous ballance.

        default:
            return state;
    }
}

export default ballanceReducer;