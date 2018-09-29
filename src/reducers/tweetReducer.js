import {FETCH_TWEETS} from '../actions/types';

const initialState = {
    tweets : [],
    showLoader : false
};

export default (state = initialState, action)=> {
    switch (action.type) {
        case FETCH_TWEETS:
            return {
                ...state,
                tweets : action.payload,
                showLoader : true
            };
    
        default:
            return state;
    }
}