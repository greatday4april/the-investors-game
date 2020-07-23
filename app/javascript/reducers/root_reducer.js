import { combineReducers } from 'redux';
import TicksReducer from './ticks_reducer';

const RootReducer = combineReducers({ ticks: TicksReducer })

export default RootReducer;