import * as TickApiUtil from '../utils/tick_api_utils'
export const RECEIVE_ALL_TICKS = 'RECEIVE_ALL_TICKS';
const receiveAllTicks = (ticks) => {
    return {
        type: RECEIVE_ALL_TICKS,
        ticks: ticks
    }
}

export const fetchAllTicks = (start_time, period) => {
    return (dispatch) => TickApiUtil.fetchAllTicks(start_time, period)
        .then((response) => dispatch(receiveAllTicks(response.data)))
}
