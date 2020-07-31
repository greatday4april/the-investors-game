import { connect } from 'react-redux';
import CurrentTickPrice from './CurrentTickPrice'

const mapStateToProps = (state) => ({
    tickPrice: state.currentTickPrice
});

export default connect(mapStateToProps, null)(CurrentTickPrice);