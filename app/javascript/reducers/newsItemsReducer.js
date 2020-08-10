export const RECEIVE_ALL_NEWS = 'RECEIVE_ALL_NEWS';
export const newsItemsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_NEWS:
            const newsItems = action.newsItems;
            for (let newsItem of newsItems) {
                newsItem.date = moment(newsItem.date).format('MM/DD/YYYY');
            }
            return action.newsItems;
        default:
            return oldState;
    }
}