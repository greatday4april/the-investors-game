import { connect } from 'react-redux';
import CurrentAssetAmount from './CurrentAssetAmount';

const mapStateToProps = (state) => ({
    assetAmount: state.assetAmount
});

export default connect(mapStateToProps, null)(CurrentAssetAmount);