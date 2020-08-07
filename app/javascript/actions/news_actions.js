import * as NewsApiUtil from '../utils/news_api_utils';
export const RECEIVE_ALL_NEWS = 'RECEIVE_ALL_NEWS';
export const receiveAllNewsItems = (newsItems) => ({
    type: RECEIVE_ALL_NEWS,
    newsItems
});
export const fetchNewsItems = (symbol, period, limit) => {
    return (dispatch, getState) => {
        const warpedTime = getState().warpedTime;
        let startDate = moment(warpedTime).subtract(period).format(`MMDDYYYY`);
        let endDate = moment(warpedTime).add(period).format(`MMDDYYYY`);
        console.log(startDate);
        console.log(endDate);
        console.log('aa');
        startDate = '03052019';
        endDate = '03052019';
        return NewsApiUtil.fetchNewsItems(symbol, `${startDate}-${endDate}`, limit).then(res => {
        dispatch(receiveAllNewsItems(res.data.data));
    })};
}