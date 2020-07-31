import * as TickApiUtil from '../utils/tick_api_utils'
export const RECEIVE_ALL_TICKS = 'RECEIVE_ALL_TICKS';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const SET_CURRENT_TICK_PRICE = 'SET_CURRENT_TICK_PRICE';
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

export const fetchAllTicks = (startTime, endTime, symbols) => {
    return (dispatch) => TickApiUtil.fetchAllTicks(startTime, endTime, symbols)
        .then((response) => dispatch(receiveAllTicks(response.data)))
        .catch((error) => dispatch(receiveError(error)))
}

export const setCurrentTickPrice = (tickPrice) => {
    return {
        type: SET_CURRENT_TICK_PRICE,
        tickPrice
    }
}