import * as TickApiUtil from '../utils/tick_api_utils'
export const RECEIVE_ALL_TICKS = 'RECEIVE_ALL_TICKS';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
const receiveAllTicks = (ticks) => {
    return {
        type: RECEIVE_ALL_TICKS,
        ticks: ticks
    }
}

const receiveError = (error) => {
    return {
        type: RECEIVE_ERROR,
        error: error,
    }
}

export const fetchAllTicks = (start_time, period, symbols) => {
    return (dispatch) => TickApiUtil.fetchAllTicks(start_time, period, symbols)
        .then((response) => dispatch(receiveAllTicks(response.data)))
        .catch((error) => dispatch(receiveError(error)))
}
