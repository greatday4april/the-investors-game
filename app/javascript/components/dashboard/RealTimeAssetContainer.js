import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { ONE_DAY_DURATION } from '../../utils/constants';
import { fetchAllTicks } from '../../actions/tick_actions';
const RealTimeAsset = ({ asset, fetchAllTicks }) => {
  useEffect(() => {
    fetchAllTicks();
  }, [fetchAllTicks]);
  return <p className="nav-link">{`Total Asset Right Now: ${asset}`}</p>;
};
const mapStateToProps = (state) => ({
  asset: state.asset,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAllTicks: () => {
    dispatch(fetchAllTicks(ONE_DAY_DURATION));
  },
});
const RealTimeAssetContainer = connect(mapStateToProps, mapDispatchToProps)(RealTimeAsset);
export default RealTimeAssetContainer;
