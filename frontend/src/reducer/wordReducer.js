import * as types from './../actions/actionTypes';
const initialState = {
    isLoading: true,
}
export default function wordReducer(state=initialState, action){
    switch(action.type){
        case types.SEARCH_WORD:
            console.log(action);
            // taking an state and creating a new array with Object.assign
            return {
                ...state, 
                
            }
    
        default:
            return state;
    }

}