import { UPDATE_PREVIOUS_REWARD_TIME } from '../actions/previous_reward_time_actions';
import moment from "moment-timezone";
const previousRewardTimeReducer = (oldState = null, action) => {
    switch (action.type) {
        case UPDATE_PREVIOUS_REWARD_TIME:
            let newState = moment();
            return newState;
        default:
            return oldState;
    }
}

export default previousRewardTimeReducer;