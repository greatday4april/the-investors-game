import {connect} from 'react-redux';
import PurchasesTable from './PurchasesTable';

const mapStateToProps = state => ({
    transactions: state.transactions
})

export default connect(
mapStateToProps
)(PurchasesTable);