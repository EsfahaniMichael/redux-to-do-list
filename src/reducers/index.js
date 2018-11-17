import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import listReducers from './list_reducer';


const rootReducer = combineReducers({
    form: formReducer,
    list: listReducers
})

export default rootReducer;
