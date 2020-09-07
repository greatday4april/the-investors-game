import {connect} from 'react-redux';
import { needUpgradeLevel, upgradeLevel } from '../../actions/level_actions';
import LevelUpModal from '../../components/dashboard/LevelUpModal';
const mapStateToProps = (state) => ({
    level: state.level
});
const mapDispatchToProps = (dispatch) => ({
    needUpgradeLevel: () => dispatch(needUpgradeLevel()),
    upgradeLevel: () => dispatch(upgradeLevel())
});
export default connect(mapStateToProps, mapDispatchToProps)(LevelUpModal);