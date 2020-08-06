import * as NewsApiUtil from '../utils/news_api_utils';
export const RECEIVE_ALL_NEWS = 'RECEIVE_ALL_NEWS';
export const receiveAllNewsItems = (newsItems) => ({
    type: RECEIVE_ALL_NEWS,
    newsItems
});
export const fetchNewsItems = (tickers, date, items) => {
    return (dispatch, getState) => {
        let newsDate = date ? date : getState().warpedTime.format(`MMDDYYYY`);
        newsDate = '03052019';
        return NewsApiUtil.fetchNewsItems(tickers, `${newsDate}-${newsDate}`, items).then(res => {
        dispatch(receiveAllNewsItems(res.data.data));
    })};
}