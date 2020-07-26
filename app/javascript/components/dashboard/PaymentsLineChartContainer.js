import { connect } from 'react-redux';
import PaymentsLineChart from './PaymentsLineChart';
import { fetchAllTicks } from '../../../../app/javascript/actions/tick_actions';
const mapStateToProps = (state, _ownProps) => {
    return { data: Object.values(state.ticks) };
}
const mapDispatchToProps = (dispatch) => ({
    fetchAllTicks: dispatch(fetchAllTicks)
});
export default connect(mapStateToProps, mapDispatchToProps)(PaymentsLineChart);