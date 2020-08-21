import { connect } from 'react-redux';
import Account from './Account';
const mapStateToProps = (state) => ({
    symbols: state.symbols
});
export default connect(mapStateToProps, null)(Account);