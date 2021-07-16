import { combineReducers } from 'redux';
import likeReducer from './reduce.js';

const rootReducer = combineReducers({
    likeReducer,
});

export default rootReducer