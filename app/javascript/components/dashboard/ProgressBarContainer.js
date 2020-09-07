import { connect } from 'react-redux';
import { level1, level2, level3, level4, level5, level6, level7, level8, level9 } from '../../utils/svgs';
const ProgressBar = ({ level }) => {
  const hash = {1: level1, 2: level2, 3: level3, 4: level4, 5: level5, 6: level6, 7: level7, 8: level8, 9: level9};
  return hash[level];
};

const mapStateToProps = (state) => ({
  level: state.level,
});
const ProgressBarContainer = connect(mapStateToProps, null)(ProgressBar);
export default ProgressBarContainer;
