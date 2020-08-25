import {connect} from 'react-redux';
import SidebarVertical from './SidebarVertical';

const mapStateToProps = state => ({
    symbols: state.symbols,
    housings: state.housings,
    stats: state.stats,
    housingStats: state.housingStats
})

export default connect(
mapStateToProps
)(SidebarVertical)