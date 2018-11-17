import { combineReducers } from 'redux';
import listReducers from './list_reducer';

const rootReducer = combineReducers({
    list: listReducers
})

export default rootReducer;
