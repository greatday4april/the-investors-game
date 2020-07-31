import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (preloadedState) => {
    return createStore(
        RootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk, logger))
    )
}

export default configureStore;
