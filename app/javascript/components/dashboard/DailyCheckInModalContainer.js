import {connect} from 'react-redux';
import { updatePreviousRewardTime } from '../../actions/previous_reward_time_actions';
import { buyStock, receiveMoney } from '../../actions/transactionsAction';
import DailyCheckInModal from '../../components/dashboard/DailyCheckInModal';
const mapStateToProps = (state) => ({
    previousRewardTime: state.previousRewardTime
});
const mapDispatchToProps = (dispatch) => ({
    updatePreviousRewardTime: () => dispatch(updatePreviousRewardTime()),
    receiveShare: (stock, date) => dispatch(buyStock(stock, date)),
    receiveMoney: (amount, date) => dispatch(receiveMoney(amount, date))
});
export default connect(mapStateToProps, mapDispatchToProps)(DailyCheckInModal);