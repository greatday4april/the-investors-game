import { RECEIVE_TRANSACTION } from '../actions/transactionAction';


const transactionReducer = (state=[], action) => {
    Object.freeze(state);
    let transacArr = state;
    switch (action.type) {
        case RECEIVE_TRANSACTION:
            return transacArr.concat(action.transaction)

        default:
            return state;

    }
}

export default transactionReducer;