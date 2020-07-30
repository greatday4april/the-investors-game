import PaymentsLineChart from './PaymentsLineChart';
import { connect } from 'react-redux';
import { fetchAllTicks } from '../../../../app/javascript/actions/tick_actions';
import { getTicksByTimeAndSymbol } from '../../reducers/ticksSelectors';
import moment from "moment-timezone";

const mapStateToProps = (state, _ownProps) => ({
    ticks: getTicksByTimeAndSymbol(state, moment("2009-01-02T08:47:00.000-05:00"), moment([2009, 0, 2, 12]), 'AAPL'),
    length: getTicksByTimeAndSymbol(state, moment([2009, 0, 2]), moment([2009, 0, 3]), 'AAPL').length,
});
const mapDispatchToProps = (dispatch) => ({
    fetchAllTicks: (start_time, period, symbols) => dispatch(fetchAllTicks(start_time, period, symbols))
});
export default connect(mapStateToProps, mapDispatchToProps)(PaymentsLineChart);