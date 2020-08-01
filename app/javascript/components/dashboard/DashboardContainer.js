import { connect } from 'react-redux';
import Dashboard from './Dashboard';

const mapStateToProps = state => ({
    symbol: Object.keys(state.ticks)
})

export default connect(
mapStateToProps
)(Dashboard);