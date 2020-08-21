import { connect } from 'react-redux';
import { AccountPage } from './AccountPage';
import { fetchAllTicks } from '../../actions/tick_actions';
import { setCurrentAssetAmount } from '../../actions/asset_actions';
import { generateHistoryAssets } from '../../reducers/assetSelector';

const mapStateToProps = (state, ownProps) => ({
  historyAssets: generateHistoryAssets(state, state.symbols, state.transactions, state.warpedTime, ownProps.period),
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllTicks: () => {
    dispatch(fetchAllTicks(ownProps.period));
  },
  setCurrentAssetAmount: (amount) => dispatch(setCurrentAssetAmount(amount)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
