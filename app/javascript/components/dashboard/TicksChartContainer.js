import {connect} from 'react-redux';
import TicksChart from './TicksChart'

const mapStateToProps = state => ({
    stats: state.stats
})

export default connect(
mapStateToProps 
)(TicksChart);