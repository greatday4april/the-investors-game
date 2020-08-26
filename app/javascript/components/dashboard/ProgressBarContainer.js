import React from 'react';
import { connect } from 'react-redux';
import { Progress } from 'reactstrap';
import { upgradeLevel } from '../../actions/level_actions';
import { LEVELS } from '../../utils/constants';
const ProgressBar = ({ level }) => (
  <div style={{ width: 600, backgroundColor: '#F9F4E9', display: "none"}} >
    <Progress  value={(level * 100) / LEVELS.length}>{`Level: ${level}`}</Progress>
  </div>
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
