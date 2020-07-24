import { combineReducers } from 'redux';
import TicksReducer from './ticks_reducer';
import ErrorsReducer from './errors_reducer';
const RootReducer = combineReducers({ ticks: TicksReducer, errors: ErrorsReducer })

export default RootReducer;