import {connect} from 'react-redux';
import TicksChart from './TicksChart'

const mapStateToProps = state => ({
    stats: state.stats,
    housingStats: state.housingStats,

    warpedTime: state.warpedTime
})

export default connect(
mapStateToProps 
)(TicksChart);