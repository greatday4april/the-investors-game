import { RECEIVE_TRANSACTION } from '../actions/transactionAction';


const transactionReducer = (state=[], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRANSACTION:
            return [...state, action.transaction]

        default:
            return state;

    }
}

export default transactionReducer;