import React from 'react';
import { connect } from 'react-redux';
import { Progress } from 'reactstrap';
import { upgradeLevel } from '../../actions/level_actions';
const ProgressBar = ({ level }) => (
  <Progress animated bar className="mb-3" value="10">
    {`Level: ${level}`}
  </Progress>
);

const mapStateToProps = (state) => ({
  level: state.level,
});
const mapDispatchToProps = (dispatch) => ({
  checkUpgradeCondition: setInterval(() => {
    dispatch(upgradeLevel());
  }, 1000),
});
const ProgressBarContainer = connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
export default ProgressBarContainer;
