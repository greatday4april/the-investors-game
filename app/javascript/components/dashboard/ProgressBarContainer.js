import React from 'react';
import { connect } from 'react-redux';
import { Progress } from 'reactstrap';
import { upgradeLevel } from '../../actions/level_actions';
import { LEVELS } from '../../utils/constants';
const ProgressBar = ({ level }) => (
  <div style={{width: 600}}>
    <p>{`Level: ${level}`}</p>
    <Progress animated className="mb-3" value={(level * 100) / LEVELS.length}></Progress>
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