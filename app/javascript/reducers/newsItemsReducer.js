export const RECEIVE_ALL_NEWS = 'RECEIVE_ALL_NEWS';
export const newsItemsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_NEWS:
            return action.newsItems;
        default:
            return oldState;
    }
}