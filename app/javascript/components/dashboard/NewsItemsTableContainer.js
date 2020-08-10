import {connect} from 'react-redux';
import {NewsItemsTable} from './NewsItemsTable';
import {fetchNewsItems} from '../../actions/news_actions';

const mapStateToProps = (state) => ({
    newsItems: state.newsItems
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchNewsItems: ()=>{
        dispatch(fetchNewsItems(ownProps.symbol));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(NewsItemsTable);