import {connect} from 'react-redux';
import { updatePreviousRewardTime } from '../../actions/previous_reward_time_actions';
import { buyStock, receiveMoney } from '../../actions/transactionsAction';
import DailyCheckInModal from '../../components/dashboard/DailyCheckInModal';
const mapStateToProps = (state) => ({
    previousRewardTime: state.previousRewardTime
});
const mapDispatchToProps = (dispatch) => ({
    updatePreviousRewardTime: () => dispatch(updatePreviousRewardTime()),
    receiveShare: (stock) => dispatch(buyStock(stock)),
    receiveMoney: (amount) => dispatch(receiveMoney(amount))
});
export default connect(mapStateToProps, mapDispatchToProps)(DailyCheckInModal);