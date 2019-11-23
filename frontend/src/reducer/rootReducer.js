// root reducer
import {combineReducers} from 'redux';
import words from './wordReducer';


// to combine reducers
const rootReducer = combineReducers({
    words

});


export default rootReducer;