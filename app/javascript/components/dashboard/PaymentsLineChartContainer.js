import PaymentsLineChart from './PaymentsLineChart';
import { connect } from 'react-redux';
import { fetchTicks, setCurrentTickPrice } from '../../../../app/javascript/actions/tick_actions';
import { getTicksByTimeAndSymbol } from '../../reducers/ticksSelectors';
import moment from "moment-timezone";
import { ONE_DAY_DURATION } from '../../utils/constants'
import { dailyTicksSelector, 
        weeklyTicksSelector, 
        monthlyTicksSelector
} from '../../reducers/stocksSelector';

const mapStateToProps = (state, ownProps) => {
    const warpedTime = state.warpedTime;
    const startTime = moment(warpedTime).subtract(ownProps.period);
    let ticks = getTicksByTimeAndSymbol(state, startTime, warpedTime, ownProps.symbol);
    let length = ticks.length;
    if (ownProps.period === ONE_DAY_DURATION) {
        const dailyTicks = getTicksByTimeAndSymbol(
            state,
            moment(warpedTime).startOf('day'),
            moment(warpedTime).endOf('day'),
            ownProps.symbol,
        );
        ticks = getTicksByTimeAndSymbol(state, moment(warpedTime).startOf('day'), warpedTime, ownProps.symbol);
        length = dailyTicks.length;
    }

    return {
        ticks: ticks,
        length: length,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchTicks: () => dispatch(fetchTicks(ownProps.period, ownProps.symbol)),
    setCurrentTickPrice: (tickPrice) => dispatch(setCurrentTickPrice(tickPrice)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {
        areStatesEqual: (nextState, prevState) =>
            nextState.ticks === prevState.ticks && nextState.warpedTime === prevState.warpedTime
    }
)(PaymentsLineChart);