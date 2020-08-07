import {connect} from 'react-redux';
import SidebarVertical from './SidebarVertical';

const mapStateToProps = state => ({
    symbols: state.symbols
})

export default connect(
mapStateToProps
)(SidebarVertical)