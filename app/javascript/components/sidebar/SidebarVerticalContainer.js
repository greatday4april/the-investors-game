import {connect} from 'react-redux';
import SidebarVertical from './SidebarVertical';

const mapStateToProps = state => ({
    symbols: state.symbols,
    housings: state.housings,
    stats: state.stats,
    housingStats: state.housingStats,
    transactions: state.transactions
})

export default connect(
mapStateToProps
)(SidebarVertical)