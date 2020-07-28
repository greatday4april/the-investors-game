import { connect } from 'react-redux';
import PaymentsLineChart from './PaymentsLineChart';
import { fetchAllTicks } from '../../../../app/javascript/actions/tick_actions';
const mapStateToProps = (state, _ownProps) => {
    return { data: Object.values(state.ticks) };
}
const mapDispatchToProps = (dispatch) => ({
    fetchAllTicks: (start_time, period, symbols) => dispatch(fetchAllTicks(start_time, period, symbols))
});
export default connect(mapStateToProps, mapDispatchToProps)(PaymentsLineChart);