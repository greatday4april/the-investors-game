import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import RootReducer from '../reducers/root_reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { INCREMENT_WARPED_TIME } from "../actions/warp_time_actions";

const logger = createLogger({
    predicate: (_getState, action) => action.type !== INCREMENT_WARPED_TIME
});


const configureStore = (preloadedState) => {
    return createStore(
        RootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk, logger))
    )
}

export default configureStore;
