import PaymentsLineChart from './PaymentsLineChart';
import { connect } from 'react-redux';
import { fetchAllTicks, setCurrentTickPrice } from '../../../../app/javascript/actions/tick_actions';
import { getTicksByTimeAndSymbol } from '../../reducers/ticksSelectors';
import moment from "moment-timezone";
import { ONE_DAY_DURATION } from '../../utils/constants'

const mapStateToProps = (state, ownProps) => {
    const warpedTime = ownProps.warpedTime;
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
        warpedTime: warpedTime,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchAllTicks: () => {
        const startTime = moment(ownProps.warpedTime).subtract(ownProps.period);
        const endTime = moment(ownProps.warpedTime).add(ownProps.period);
        dispatch(fetchAllTicks(startTime, endTime, ownProps.symbol));
    },
    setCurrentTickPrice: (tickPrice) => dispatch(setCurrentTickPrice(tickPrice)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PaymentsLineChart);