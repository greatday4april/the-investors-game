import { INCREMENT_WARPED_TIME } from '../../javascript/actions/warp_time_actions';
import { DEFAULT_WARPED_TIME, WARPED_TIME_RATIO } from '../utils/constants';
import moment from "moment-timezone";
const warpedTimeReducer = (oldState = DEFAULT_WARPED_TIME, action) => {
    switch (action.type) {
        case INCREMENT_WARPED_TIME:
            let newState = moment(oldState).add((WARPED_TIME_RATIO * action.delta) / 1000, 'seconds');
            return newState;
        default:
            return oldState;
    }
}

export default warpedTimeReducer;